<script setup>
  import Acoples from '../components/Acoples.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { acoples } from '../data/acoples'
  import SlideProductoAcoples from '../components/SlideProductoAcoples.vue'
  import Marcas from '../components/Marcas.vue'

 

 
</script>

<template>
  <Header/>
   <SlideProductoAcoples/>
    <main class="container-xl mt-5">
        <div class="row mt-5">
        <v-card flat class="py-10">
            <v-row>
            <Acoples
                v-for="acople in acoples"
                :key="acople.id"
                :acople="acople"
            />
        </v-row>
        </v-card>
        </div>
        <Marcas/>
    </main>
  <Footer />
</template>