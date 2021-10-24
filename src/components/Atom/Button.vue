<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  @apply 
    px-4 py-1 rounded inline-block
    cursor-pointer
    disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50;
}

.primary {
  @apply 
  bg-teal-600 hover:bg-teal-700 
  text-white;
}
</style>