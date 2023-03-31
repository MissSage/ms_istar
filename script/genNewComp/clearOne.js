const inquirer = require("inquirer")
const fs = require("fs-extra")
const { resolve } = require("path")
const tplReplacer = require("./tplReplacer")

const listFilePath = "../../packages/list.json"

const RegxMap = {
  IS_COMP_NAME: /^[A-Z]/
}

const infoCollector = async () => {
  const meta = await inquirer.prompt([
    {
      type: "input",
      message: "请输入你要删除的组件名（纯英文，大写开头）：",
      name: "compName",
      validate(answer) {
        const done = this.async()
        const validateRes = RegxMap.IS_COMP_NAME.test(answer)
        if (!validateRes) {
          done("请按要求输入正确的组件名！")
          return
        }
        const listData = fs.readJSONSync(resolve(__dirname, listFilePath))
        if (listData.find(item => item.compName === answer)) {
          done(null, true)
        } else {
          done(`不存在名为${answer}的组件，请确认后更换名字再重试。`)
          return
        }
      }
    }
  ])
  return meta
}

async function run() {
  const meta = await infoCollector()
  tplReplacer.clearOne(meta)
}

run()
