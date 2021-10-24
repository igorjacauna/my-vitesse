<script setup lang="ts">
const valor = ref(0)
</script>

<template>
  <AtomCard class="bg-white border">
    <div>Start page</div>
    <AtomInput
      v-model="valor"
      type="text"
    />
    {{ valor }}
  </AtomCard>
  <AtomButton
    class="primary"
    @click="valor++"
  >
    Sum
  </AtomButton>
</template>
