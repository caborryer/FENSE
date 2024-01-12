<script setup>
    import { computed } from 'vue'
    import Carousel from './Carousel.vue'
    // import Slider from './Slider.vue'
    import Navbar from './Navbar.vue'

    const props = defineProps({
        carrito: {
            type: Array,
            required: true
        },
        guitarra: {
            type: Object,
            required: true
        }
    })

    defineEmits(['decrementar-cantidad', 'incrementar-cantidad', 'agregar-carrito', 'eliminar-producto', 'vaciar-carrito'])

    const totalPagar = computed(() => {
        return props.carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0 )
    })
</script>

<template>
    <header class="header">
    <!-- <div className="dinamicBar-contenedor">
        <p className="dinamicBar-animacion">TODO LO RELACIONADO CON MANTENIMIENTO Y CONFIABILIDAD INDUSTRIAL.   LLEGAMOS A CUALQUIER ZONA DEL PAÍS. TODO LO RELACIONADO CON MANTENIMIENTO Y CONFIABILIDAD INDUSTRIAL.   LLEGAMOS A CUALQUIER ZONA DEL PAÍS. TODO LO RELACIONADO CON MANTENIMIENTO Y CONFIABILIDAD INDUSTRIAL.   LLEGAMOS A CUALQUIER ZONA DEL PAÍS. TODO LO RELACIONADO CON MANTENIMIENTO Y CONFIABILIDAD INDUSTRIAL.   LLEGAMOS A CUALQUIER ZONA DEL PAÍS.</p>
    </div> -->
        <!-- <div class="container-xl">
            <div class="row justify-content-center justify-content-md-between">
      
                <div class="col-8 col-md-3">
                    <a href="index.html">
                        <img class="img-logo" style="background:white" src="/img/logo.svg" alt="imagen logo">
                        <p style="color:white;font-size:8px">FERRO ELECTRICOS Y SUMINISTROS INDUSTRIALES DE COLOMBIA S.A.S<br/> NIT: 901672682-4 </p>
                    </a>
                </div>
                <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        class="carrito"
                    >
                        <img class="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
    
                        <div id="carrito" class="bg-white p-3">
                            <p v-if="carrito.length === 0" class="text-center m-0">
                                El carrito esta vacio
                            </p>
                            <div v-else>
                                <table   class="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="producto in carrito"
                                            :key="producto.id"
                                        >
                                            <td>
                                                <img 
                                                    class="img-fluid" 
                                                    :src="'/img/' + producto.imagen + '.jpg'" 
                                                    :alt="'imagen guitarra ' + producto.nombre"
                                                >
                                            </td>
                                            <td>
                                                {{ producto.nombre }}
                                            </td>
                                            <td class="fw-bold">
                                                ${{producto.precio}}
                                            </td>
                                            <td class="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    class="btn btn-dark"
                                                    @click="$emit('decrementar-cantidad', producto.id)"
                                                >
                                                    -
                                                </button>
                                                    {{ producto.cantidad }}
                                                <button
                                                    type="button"
                                                    class="btn btn-dark"
                                                    @click="$emit('incrementar-cantidad', producto.id)"
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    class="btn btn-danger"
                                                    type="button"
                                                    @click="$emit('eliminar-producto', producto.id)"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
        
                                <p class="text-end">Total pagar: <span class="fw-bold">${{ totalPagar }}</span></p>

                                <button 
                                    class="btn btn-dark w-100 mt-3 p-2"
                                    @click="$emit('vaciar-carrito')"
                                >Vaciar Carrito</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div> -->
    <Navbar/>
    </header>
    <!-- <Carousel/> -->
</template>
