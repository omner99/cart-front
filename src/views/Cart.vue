<template>
    <default-layout>
       <h1 class="margen">Carrito</h1>
       <p class="subtitulo margen">Usted tiene en su carrito</p>
       <table border="1" class="margen">
            <thead>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Monto</th>
            </thead>
            <tbody>
            <tr>
                <!--uso de la api-->
                    <th class="vacio">Cebolla kg</th>
                    <th class="vacio">1</th>
                    <th class="vacio">$30</th>
                </tr>
                <tr>
                <!--uso de la api-->
                    <th class="vacio">Tomate</th>
                    <th class="vacio">2</th>
                    <th class="vacio">$50</th>
                </tr>
                <tr>
                <!--uso de la api-->
                    <th class="vacio">Cantidad total:</th>
                    <th class="vacio"></th>
                    <th class="vacio">$92.8</th>
                </tr>
            </tbody>
       </table>
       <p class="subtitulo margen">Facilitenos sus datos de envio</p>

       <form action="#">
            <label for="" class="margen">Nombre: </label><input type="text"><br>
            <label for="" class="margen">Apellidos: </label><input type="text"><br>
            <label for="" class="margen">Direccion de envio: </label><input type="text"> <a href="#" class="boton_actulizar">Nueva Direccion</a>

            
            
       </form>
    </default-layout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue';
export default{
    name: 'CartView',
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