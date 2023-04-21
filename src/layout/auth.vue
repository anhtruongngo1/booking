<template>
    <Menu />
    <div class="fixed">
        auth layout
    </div>
    <slot />
</template>

<script>
import Menu from './Menu/Menu.vue';
export default {
    components: {
        Menu
    }
}
</script>

<style>

</style>