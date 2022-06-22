<script setup lang="ts">
export interface Props {
  modelValue?: any
}
export interface Emits {
  (event: 'update:modelValue', id: any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
});
const emits = defineEmits<Emits>();
const data = useVModel(props, 'modelValue', emits);
</script>

<template>
  <input
    v-model="data"
    class="input input-bordered"
  >
</template>
