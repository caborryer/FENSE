<script setup>
  import Cards from '../components/Cards.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { datas } from '../data/correas'
  import SlideProducto from '../components/SlideProducto.vue'
  import Marcas from '../components/Marcas.vue'

 

 
</script>

<template>
  <Header/>
   <SlideProducto/>
    <main class="container-xl mt-5">
        <div class="row mt-5">
        <v-card flat class="py-10">
            <v-row>
            <Cards
                v-for="data in datas"
                :key="data.id"
                :data="data"
            />
        </v-row>
        </v-card>
        </div>
        <Marcas/>
    </main>
  <Footer />
</template>