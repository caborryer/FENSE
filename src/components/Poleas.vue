<script setup>
    defineProps({
        polea: {
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
            <v-img :src="'/img/' + polea.imagen + '.png'"  height="250" cover  />

            <v-card-title>
                {{ polea.nombre }}
            </v-card-title>

            <v-card-text class="text-truncate" >
                {{ polea.descripcion }}
            </v-card-text>
        </v-card>
    </v-col>
</template>
