<script setup>
    defineProps({
        correa: {
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
            <v-img :src="'/img/' + correa.imagen + '.png'"  height="250" cover  />

            <v-card-title>
                {{ correa.nombre }}
            </v-card-title>

            <v-card-text class="text-truncate" >
                {{ correa.descripcion }}
            </v-card-text>
        </v-card>
    </v-col>
</template>
