<script setup>
  import Chumaceras from '../components/Chumaceras.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { chumaceras } from '../data/chumaceras'
  import SlideProductoChumaceras from '../components/SlideProductoChumacera.vue'
  import Marcas from '../components/Marcas.vue'

 

 
</script>

<template>
  <Header/>
   <SlideProductoChumaceras/>
    <main class="container-xl mt-5">
        <div class="row mt-5">
        <v-card flat class="py-10">
            <v-row>
            <Chumaceras
                v-for="chumacera in chumaceras"
                :key="chumacera.id"
                :chumacera="chumacera"
            />
        </v-row>
        </v-card>
        </div>
        <Marcas/>
    </main>
  <Footer />
</template>