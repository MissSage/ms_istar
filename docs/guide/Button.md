<!-- 加载 demo 组件 start -->
<!-- 脚本自动生成，请自行修改此组件具体的文档信息 -->

<script setup>
import demo from '../../examples/Button.vue'
import Preview from '../../src/components/Preview.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 按钮

按钮

## 基础用法

<Preview comp-name="Button" demo-name="demo">
  <demo />
</Preview>

## 属性

参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`arg1` | 第一个参数 | string | - | `default` | 否
`arg2` | 第二个参数 | string | - | `default` | 否

## 事件

事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三
