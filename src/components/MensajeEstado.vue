<script setup>
defineProps({
  texto: { type: String, required: true },
  tipo: { type: String, default: 'info' },
})
</script>

<template>
  <p class="mensaje" :class="tipo">{{ texto }}</p>
</template>

<style scoped>
.mensaje {
  padding: 1rem;
  border-radius: 8px;
  background: #f2f2f2;
}
.error {
  background: #fde2e2;
  color: #8a1f1f;
}
</style>