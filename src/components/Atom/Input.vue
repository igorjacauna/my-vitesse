<script setup lang="ts">
export interface Props {
  modelValue: any
}
export interface Emits {
  (event: 'update:modelValue', id: any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 'padrao',
});
const emit = defineEmits<Emits>();
const data = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
});
</script>

<template>
  <input v-model="data">
</template>

<style scoped>
input {
  @apply 
    px-4 py-2 
    rounded-lg 
    border border-gray-300 
    focus:outline-none focus:ring-2 focus:ring-gray-200;
}
</style>
