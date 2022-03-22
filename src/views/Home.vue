<template>
  <div class=" w-full h-full dark:bg-blue-300  flex flex-row items-center  justify-start overflow-y-auto">
    <div class="w-64 bg-blue-400 h-96 rounded mr-4 sticky top-0">

    </div>

    <div class="bg-blue-600 self-start justify-self-center contenedor">
      <h1>Contenido</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.contenedor{
  min-height: 10vh;
  width: 100%;
}
</style>