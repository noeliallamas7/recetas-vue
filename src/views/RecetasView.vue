<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import RecetaCard from '../components/RecetaCard.vue'
import MensajeEstado from '../components/MensajeEstado.vue'

const recetas = ref([])
const cargando = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(db, 'recetas'))
    recetas.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    cargando.value = false
  }
})
</script>

<template>
  <section>
    <h1>Recetas</h1>
    <MensajeEstado v-if="cargando" texto="Cargando recetas..." />
    <MensajeEstado
      v-else-if="error"
      tipo="error"
      texto="No se han podido cargar las recetas. Inténtalo más tarde."
    />
    <MensajeEstado v-else-if="recetas.length === 0" texto="Todavía no hay recetas." />
    <div v-else>
      <RecetaCard v-for="receta in recetas" :key="receta.id" :receta="receta" />
    </div>
  </section>
</template>