<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      slides: [1, 2, 3], 
      texts: ['ENTREGA RÁPIDA Y CONFIABLE', 'SERVICIO ALTAMENTE PROFESIONAL', 'ÓPTIMA CALIDAD EN TODOS NUESTROS PRODUCTOS'],
    };
  },
})
</script>
<template>
  <Carousel :autoplay="3500" :wrap-around="true">
    <Slide class="carousel__item" :style="{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/img/imagen${slide}.png')` }" v-for="(slide, index) in slides" :key="slide">
      <div class="carousel__content">
        <img :src="`/img/imagen${slide}.png`" alt="Slide {{ slide }}" class="carousel__image" />
        <div class="carousel__text">
          <p class="text-responsive">{{ texts[index] }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<style scoped>
.carousel__item {
  background-position: 50%;
  background-size: cover;
  position: relative;
}

.carousel__content {
  position: relative;
}

.carousel__image {
  visibility: hidden; /* Ocultar la imagen real si es necesario */
}

.carousel__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #000000b0;
  color: #fff; /* Color del texto */
}
.text-responsive {
  font-size: 16px; /* Tamaño de fuente base */
  max-width: 80%; /* Ajusta el valor según sea necesario */
  margin: 0 auto;
}

@media screen and (min-width: 600px) {
  .text-responsive {
    font-size: 37px; /* Ajustar tamaño de fuente para dispositivos más grandes */
  }
}

@media screen and (min-width: 1200px) {
  .text-responsive {
    font-size: 45px; /* Ajustar tamaño de fuente para dispositivos aún más grandes */
  }
}
</style>