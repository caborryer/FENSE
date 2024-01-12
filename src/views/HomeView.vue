<script setup>
  import Productos from '../components/Productos.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Slider from '../components/Slider.vue'
  import Valores from '../components/Valores.vue'
  import Contactenos from '../components/Contactenos.vue'
  import Carousel from '../components/Carousel.vue'


 
</script>

<template>
  <Header/>
  <Carousel/>
    <main class="container-xl mt-5">
        <h2 class="text-center">NUESTROS PRODUCTOS</h2>
        
        <div class="row mt-5">
            <Productos/>
            <Valores/>
            <Slider/>
            <Contactenos/>
        </div>
    </main>
  <Footer />
</template>