<template>
    <div>
        <header class="header">
            <a href="#">Productos</a>
            <a href="#">Carrito</a>
            <a href="#">Administracion</a>
        </header>
        <main class="main-content">
            <slot></slot>
        </main>
        <footer>
            <p>Gracias por su preferirnos</p>
        </footer>
    </div>
</template>
<script>
export default{
    name: 'DefaultLayout'

}
</script>