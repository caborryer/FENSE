<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        to: {
            type: String
        }
    })
</script>


<template>
   <RouterLink
        :to="{name: to}"
        class="rounded font-bold"
   >
        <slot></slot>
   </RouterLink>
</template>

