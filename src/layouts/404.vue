<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <main class="p-10">
    <div>
      <p class="text-4xl">
        <CarbonWarning class="inline-block" />
      </p>
    </div>
    <router-view />
    <div>
      <AtomButton
        class="m-3 text-sm mt-8"
        @click="router.back()"
      >
        Voltar
      </AtomButton>
    </div>
  </main>
</template>
