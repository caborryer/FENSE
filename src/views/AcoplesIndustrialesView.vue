<script>
  import { ref } from 'vue';
  import Correas from '../components/Correas.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { correas } from '../data/correas'
  import SlideProducto from '../components/SlideProducto.vue'
  import Marcas from '../components/Marcas.vue'

  export default {
    components: {
    Correas,
    Header,
    Footer,
    SlideProducto,
    Marcas,
    correas
  },
    
  setup() {
    const valor = ref("ACOPLES INDUSTRIALES");
    const valor2 = ref("acoplesindustriales");

    return {
      valor,
      valor2,
    };
  },
};

</script>

<template>
  <Header/>
   <SlideProducto :prop1="valor" :prop2="valor2"/>
    <main class="container-xl mt-5">
        <div class="row mt-5">
        <v-card flat class="py-10">
            <v-row>
            <Correas
                v-for="correa in correas"
                :key="correa.id"
                :correa="correa"
            />
        </v-row>
        </v-card>
        </div>
        <Marcas/>
    </main>
  <Footer />
</template>