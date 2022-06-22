<script setup lang="ts">
import Input from '../components/Atom/Input.vue';
import Card from '../components/Atom/Card.vue';
import Button from '../components/Atom/Button.vue';

const valor = ref(0);
</script>

<template>
  <Card>
    <div>Start page</div>
    <Input
      v-model="valor"
      type="text"
    />
    {{ valor }}
  </Card>
  <Button
    class="btn-primary btn-sm"
    @click="valor++"
  >
    Sum
  </Button>
</template>
