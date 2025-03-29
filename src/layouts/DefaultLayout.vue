<template>
    <div>
        <header class="header navbar">
            <router-link to="/">Productos</router-link>
            <router-link to="/Cart">Carrito</router-link>
            <router-link to="/admin">Administración</router-link>
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

<style>
    *{margin: 0px; padding: 0px;}
    .navbar{background-color: rgb(120, 120, 221);padding-top: 25px; padding-bottom: 30px;}
    .navbar a{padding-left: 40px; color: rgb(255, 255, 255); text-decoration: none;}
    .navbar a:hover{padding-left: 40px; color: rgb(204, 204, 204);}
    div {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Hace que el contenedor ocupe toda la altura de la pantalla */
}

.main-content {
    flex: 1; /* Ocupa todo el espacio disponible */
}

footer {
    background-color: #f1f1f1;
    text-align: center;
    padding: 10px;
}
</style>

