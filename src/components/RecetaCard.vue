<script setup>
defineProps({
  receta: { type: Object, required: true },
})
</script>

<template>
  <article class="card">
    <h2>{{ receta.titulo }}</h2>
    <p class="datos">
      {{ receta.categoria }} · {{ receta.dificultad }} · {{ receta.tiempo }} min ·
      {{ receta.cantidad }}
    </p>
    <p>{{ receta.introduccion }}</p>

    <h3>Ingredientes</h3>
    <ul>
      <li v-for="(ingrediente, i) in receta.ingredientes" :key="i">{{ ingrediente }}</li>
    </ul>

    <h3>Pasos</h3>
    <ol>
      <li v-for="(paso, i) in receta.pasos" :key="i">{{ paso }}</li>
    </ol>
  </article>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}
.datos {
  color: #666;
}
</style>