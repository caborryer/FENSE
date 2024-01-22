<script setup>
    defineProps({
        data: {
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
            <v-img :src="'/img/' + data.imagen + '.png'"  height="250" cover  />

            <v-card-title>
                {{ data.nombre }}
            </v-card-title>

            <v-card-text class="text-truncate" >
                {{ data.descripcion }}
            </v-card-text>
        </v-card>
    </v-col>
</template>
