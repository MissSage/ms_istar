<template>
  <div class="istar-text">
    <slot>
      {{ text || "我是文本组件" }}
    </slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text?: string;
}>();
</script>

<style scoped>
.istar-text {
}
</style>
