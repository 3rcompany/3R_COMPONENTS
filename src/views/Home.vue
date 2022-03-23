<template>
<Navbar class="sticky top-0"/>
  <div class=" w-full flex flex-row items-start  justify-start px-2">
    <home-selector-arbol></home-selector-arbol>

    <div class="bg-white self-start justify-self-center contenedor">
      <h1>Contenido</h1>
      <Iconos icono="bag" strokew="1.5"></Iconos>
    </div>
  </div>
</template>



<script>
import HomeSelectorArbol from '../components/HomeSelectorArbol.vue';
import Navbar from "../components/Navbar.vue";
import Iconos from '../components/Iconos.vue';
export default {
    name: "Home",
    components: { Navbar, HomeSelectorArbol, Iconos }
};
</script>

<style scoped>
.contenedor{
  /* min-height: 50vh; */
  width: 100%;
}
</style>