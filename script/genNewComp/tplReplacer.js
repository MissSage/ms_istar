const fs = require("fs-extra")
const handlebars = require("handlebars")
const { resolve, join } = require("path")
/**
 * 组织模板替换信息
 * @param {*} meta
 */
const getTplFilePath = meta => ({
  // docs 目录
  readme: {
    from: "./.template/docs/README.md.tpl",
    to: `../../docs/guide/${meta.compName}.md`
  },
  demo: {
    from: "./.template/docs/demo.vue.tpl",
    to: `../../examples/${meta.compName}.vue`
  },
  // src 目录
  vue: {
    from: "./.template/src/index.vue.tpl",
    to: `../../packages/${meta.compName}/src/index.vue`
  },
  // 根目录
  install: {
    from: "./.template/index.ts.tpl",
    to: `../../packages/${meta.compName}/index.ts`
  }
})
/**
 * 通过.template中的模板生成文件
 * @param {*} meta
 */
const compFilesTplReplacer = meta => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach(key => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), "utf-8")
    const fileContent = handlebars.compile(fileTpl)(meta)
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, err => {
      if (err) console.log(err)
    })
  })
}

/**
 * 往list.json中添加组件信息
 * @param {*} meta
 */
const listJsonTplReplacer = meta => {
  const listFilePath = "../../packages/list.json"
  const listFileContent = _getListJson()
  listFileContent.push(meta)
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, err => {
    if (err) console.log(err)
  })
  return listFileContent
}

/**
 * 更新路由信息
 * @param {*} listFileContent
 */
const routerTplReplacer = listFileContent => {
  const routerFileFrom = "./.template/router.ts.tpl"
  const routerFileTo = "../../src/router/index.ts"
  const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), "utf-8")
  const routerMeta = {
    routes: listFileContent.map(comp => {
      return `{
    meta: {
      title: '${comp.compZhName}'
    },
    name: '${comp.compName}',
    path: '/components/${comp.compName}',
    component: () => import('../../examples/${comp.compName}.vue'),
  }`
    })
  }
  const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta)
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, err => {
    if (err) console.log(err)
  })
}
/**
 * 只更新文档侧边菜单，组件相关，docs/.vitepress/themeConfigs/sidebar/guide.ts
 * @param {*} listFileContent
 */
const docTplReplacer = listFileContent => {
  const docFileFrom = "./.template/docs/guide.ts.tpl"
  const docFileTo = "../../docs/.vitepress/themeConfigs/sidebar/guide.ts"
  const docFileTpl = fs.readFileSync(resolve(__dirname, docFileFrom), "utf-8")
  const docMeta = {
    guides: listFileContent.map(comp => {
      return `
      {
        text: '${comp.compZhName}(${comp.compName})',
        link: '/guide/${comp.compName}',
      }`
    })
  }
  const docFileContent = handlebars.compile(docFileTpl, { noEscape: true })(docMeta)
  fs.outputFile(resolve(__dirname, docFileTo), docFileContent, err => {
    if (err) console.log(err)
  })
}

/**
 * 更新 install.ts
 * @param {*} listFileContent
 */
const installTsTplReplacer = listFileContent => {
  const installFileFrom = "./.template/install.ts.tpl"
  const installFileTo = "../../packages/index.ts" // 这里没有写错，别慌
  const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), "utf-8")
  const installMeta = {
    importPlugins: listFileContent.map(({ compName }) => `import { ${compName}Plugin } from './${compName}';`).join("\n"),
    installPlugins: listFileContent.map(({ compName }) => `${compName}Plugin.install?.(app);`).join("\n    "),
    exportPlugins: listFileContent.map(({ compName }) => `export * from './${compName}'`).join("\n")
  }
  const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta)
  fs.outputFile(resolve(__dirname, installFileTo), installFileContent, err => {
    if (err) console.log(err)
  })
}
/**
 * 根据模板和输入信息生成组件
 * @param {*} meta
 */
const tplReplacer = meta => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)
  routerTplReplacer(listFileContent)
  docTplReplacer(listFileContent)
  installTsTplReplacer(listFileContent)

  console.log(`组件新建完毕，请前往 packages/${meta.compName} 目录进行开发`)
}
/**
 * 清空list.json中的数据
 */
const emptyListJson = () => {
  const listFilePath = "../../packages/list.json"
  const listFileContent = []
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, err => {
    if (err) console.log(err)
  })
  return listFileContent
}
const removeListJsonItem = compName => {
  if (!compName) return
  let listFileContent = _getListJson()
  listFileContent = listFileContent.filter(item => item.compName !== compName)
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, err => {
    if (err) console.log(err)
  })
  return listFileContent
}
/**
 * 删除文件夹功能
 * @param  {String} url  文件路径，绝对路径
 * @return {Null}
 * @author huangh 20170123
 */
function deleteDir(url, isDirectory = true) {
  let files = []
  if (fs.existsSync(resolve(__dirname, url))) {
    //判断给定的路径是否存在
    if (isDirectory) {
      files = fs.readdirSync(resolve(__dirname, url)) //返回文件和子目录的数组
      files.forEach(function (file, index) {
        var curPath = join(resolve(__dirname, url), file)

        if (fs.statSync(curPath).isDirectory()) {
          //同步读取文件夹文件，如果是文件夹，则函数回调
          deleteDir(curPath)
        } else {
          fs.unlinkSync(curPath) //是指定文件，则删除
        }
      })

      fs.rmdirSync(resolve(__dirname, url)) //清除文件夹
    } else {
      var curPath = resolve(__dirname, url)
      fs.unlinkSync(curPath)
    }
  } else {
    console.log("给定的路径不存在！")
  }
}
/**
 * 查询list.json
 */
const _getListJson = () => {
  const listFilePath = "../../packages/list.json"
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), "utf-8")
  return JSON.parse(listFileTpl)
}

/**
 * 删除指定的组件
 * @param {*} meta
 */
const clearOne = meta => {
  const compName = meta.compName
  const listFileContent = removeListJsonItem(compName)
  routerTplReplacer(listFileContent)
  docTplReplacer(listFileContent)
  installTsTplReplacer(listFileContent)
  deleteDir("../../docs/guide/" + compName + ".md", false)
  deleteDir("../../examples/" + compName + ".vue", false)
  deleteDir("../../packages/" + compName)
}
/**
 * 删除全部组件
 * 作为模板的时候用，其它时间不要用，不然文件被删除会导致损失
 */
const clear = () => {
  const listFileContent = _getListJson()
  listFileContent.map(item => {
    const compName = item.compName
    deleteDir("../../docs/guide/" + compName + ".md", false)
    deleteDir("../../examples/" + compName + ".vue", false)
    deleteDir("../../packages/" + compName)
  })
  emptyListJson()
  routerTplReplacer([])
  docTplReplacer([])
  installTsTplReplacer([])
  console.log(`组件清空完毕`)
}
module.exports = {
  tplReplacer,
  clear,
  clearOne
}
