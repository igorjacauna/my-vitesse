<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  @apply
    p-6
    rounded-lg
    shadow-lg
}
</style>
