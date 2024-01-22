<script setup>
    defineProps({
        acople: {
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
            <v-img :src="'/img/' + acople.imagen + '.png'"  height="250" cover  />

            <v-card-title>
                {{ acople.nombre }}
            </v-card-title>

            <v-card-text class="text-truncate" >
                {{ acople.descripcion }}
            </v-card-text>
        </v-card>
    </v-col>
</template>
