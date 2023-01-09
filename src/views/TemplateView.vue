<template>
    <div class="d-flex flex-column" style="height: 100vh">
        <header>
            <navbar-component/>
        </header>

        <body class="mb-auto">
            <slot></slot>
        </body>

        <footer>

        </footer>
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
    export default {
        name:'TemplateView',
        components :{
            NavbarComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>