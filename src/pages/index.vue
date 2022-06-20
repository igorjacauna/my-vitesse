<script setup lang="ts">
import Input from '../components/Atom/Input.vue';
import Card from '../components/Atom/Card.vue';
import Button from '../components/Atom/Button.vue';

const valor = ref(0);
</script>

<template>
  <Card class="bg-white border">
    <div>Start page</div>
    <Input
      v-model="valor"
      type="text"
    />
    {{ valor }}
  </Card>
  <Button
    class="primary"
    @click="valor++"
  >
    Sum
  </Button>
</template>
