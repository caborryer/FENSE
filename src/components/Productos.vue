<script setup>
    defineProps({
        producto: {
            type: Object
        }
    })
</script>

<template>
    <v-col
        cols="12"
        md="4"
    >
        <v-card>
            <v-img :src="'/img/' + producto.imagen + '.png'"  height="250" cover  />

            <v-card-title>
                {{ producto.nombre }}
            </v-card-title>

            <v-card-text class="text-truncate" >
                {{ producto.descripcion }}
            </v-card-text>

            <template v-slot:actions>
                <v-btn
                    block
                    color="info"
                    variant="flat"
                    router :to="`${producto.pagina}`"
                >
                    Ver Información
                </v-btn>
            </template>
        </v-card>
    </v-col>
</template>
