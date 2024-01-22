<script setup>
  import Poleas from '../components/Poleas.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { poleas } from '../data/poleas'
  import SlideProductoPolea from '../components/SlideProductoPolea.vue'
  import Marcas from '../components/Marcas.vue'

 

 
</script>

<template>
  <Header/>
   <SlideProductoPolea/>
    <main class="container-xl mt-5">
        <div class="row mt-5">
        <v-card flat class="py-10">
            <v-row>
            <Poleas
                v-for="polea in poleas"
                :key="polea.id"
                :polea="polea"
            />
        </v-row>
        </v-card>
        </div>
        <Marcas/>
    </main>
  <Footer />
</template>