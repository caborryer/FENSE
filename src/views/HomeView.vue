<script setup>
  import Productos from '../components/Productos.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Slider from '../components/Slider.vue'
  import Valores from '../components/Valores.vue'
  import Contactenos from '../components/Contactenos.vue'
  import Carousel from '../components/Carousel.vue'
  import { productos } from '../data/productos'



 
</script>

<template>
  <Header/>
  <Carousel/>
    <main class="container-xl mt-5">
        <h3 class="text-center text-h4 font-weight-bold my 5">NUESTROS PRODUCTOS</h3>
        
        <div class="row mt-5">
        <v-card flat class="py-10">
            <v-row>
            <Productos
                v-for="producto in productos"
                :key="producto.id"
                :producto="producto"
            />
        </v-row>
        </v-card>
            <Valores/>
            <Slider/>
            <Contactenos/>
        </div>
    </main>
  <Footer />
</template>