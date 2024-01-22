<script setup>
    defineProps({
        chumacera: {
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
            <v-img :src="'/img/' + chumacera.imagen + '.png'"  height="250" cover  />

            <v-card-title>
                {{ chumacera.nombre }}
            </v-card-title>

            <v-card-text class="text-truncate" >
                {{ chumacera.descripcion }}
            </v-card-text>
        </v-card>
    </v-col>
</template>
