<template>
  <div class="istar-button">
    <button><slot>{{ text }}</slot></button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text?: string
}>()
</script>

<style scoped>
.istar-button {
  
}
</style>