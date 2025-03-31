<template>
    <default-layout>
        <p class="margen subtitulo" >Bienvenido</p>
        <table border="1" class="margen" >
            <thead>
                <th class="vacio">Nombre</th>
                <th class="vacio">Precio</th>
                <th class="vacio">Cantidad</th>
                <th class="vacio">Total de los productos</th>
            </thead>
            <tbody>
                <tr>
                <!--uso de la api-->
                    <th class="vacio">Tomate kg</th>
                    <th class="vacio">$25</th>
                    <th class="vacio"> <input type="number"></th>
                    <th class="vacio">$0</th>
                </tr>
                <tr>
                <!--uso de la api-->
                    <th class="vacio">Cebolla kg</th>
                    <th class="vacio">$30</th>
                    <th class="vacio"> <input type="number"></th>
                    <th class="vacio">$30</th>
                </tr>
                <tr>
                <!--uso de la api-->
                    <th class="vacio">Cantidad total:</th>
                    <th class="vacio"></th>
                    <th class="vacio"></th>
                    <th class="vacio">$30</th>
                </tr>
            </tbody>
        </table>
    </default-layout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
export default{
    name: 'ProductsView',
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