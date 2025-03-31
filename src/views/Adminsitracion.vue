<template>
    <default-layout>
        <h1 class="margen">Administracion</h1>
        <p class="margen">Dentro de la Administracion podra ver los datos del cliente, agregar productos, o ver los pedidos</p>
        <p class="margen subtitulo" >Administre los clientes</p>
        <table border="1" class="margen" >
            <thead>
                <th class="vacio">Nombre</th>
                <th class="vacio">Apellidos</th>
                <th class="vacio">Direcciones</th>
                <th class="vacio">Acciones</th>
            </thead>
            <tbody>
                <!--uso de la api-->
                <th class="vacio">Martha</th>
                <th class="vacio"> Mendez Gomez</th>
                <th class="vacio">1ra sur y 5ta oriente</th>
                <th class="vacio"><a href="#" class="boton_eliminar">Borrar</a> <a href="#" class="boton_actulizar">Actulizar</a></th>
            </tbody>
        </table>

        <p class="margen subtitulo" >Administre los Productos</p>
        <table border="1" class="margen" >
            <thead>
                <th class="vacio">Id</th>
                <th class="vacio">Nombre</th>
                <!--seria bueno agregar un stock-->
                <th class="vacio">Precio</th>
                <th class="vacio">Acciones</th>
            </thead>
            <tbody>
                <!--uso de la api-->
                <th class="vacio">1</th>
                <th class="vacio">Tomate kg</th>
                <th class="vacio">$25</th>
                <th class="vacio"><a href="#" class="boton_eliminar">Borrar</a> <a href="#" class="boton_actulizar">Actulizar</a></th>
            </tbody>
        </table>
    </default-layout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
export default{
    name: 'AdminView',
    components:{
        DefaultLayout
    }
}
</script>

<style>
    .margen{ margin-top: 20px; margin-left: 20px;}
    .subtitulo{font-size: 25px;}
    .boton_actulizar{background-color: rgb(87, 196, 60);border-radius: 5px; padding: 8px; color: rgb(255, 255, 255); text-decoration: none;}
    .boton_eliminar{background-color: rgb(182, 48, 48); border-radius: 5px; padding: 8px; color: rgb(255, 255, 255); text-decoration: none;}
    .boton_actulizar:hover{background-color: rgb(136, 182, 124);border-radius: 5px; padding: 8px; color: rgb(255, 255, 255); text-decoration: underline;}
    .boton_eliminar:hover{background-color: rgb(182, 110, 110); border-radius: 5px; padding: 8px; color: rgb(255, 255, 255); text-decoration: underline;}
    .vacio{padding: 10px;}
</style>