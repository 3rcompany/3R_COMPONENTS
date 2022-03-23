<template>
  <div class="card mr-2">
    <input type="search" name="" placeholder="Buscar" class="buscador"   id="">
    <div class="flex items-center justify-start w-full">
      <h1 class="mr-2">></h1>
      <input type="checkbox" class="mr-2" name="" id="">
      <h1 class="mr-2">Icono</h1>
      <h1 class="truncate">nivel 1 lorem Lorem, ipsum dolor.</h1>
      
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card{
  background-color: #fff;
  border-radius: 0.5em;
  width: 260px;
  min-height: 25em;
  margin-right: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.021) 0px 0px 0px .8px;
  padding: .5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.buscador{
  width: 100%;
  padding-left: .5em;
  padding-right: .5em;
  padding-top: .4em;
  padding-bottom: .4em;
  background-color: #fafafe;
  border-radius: 0.5em;
  flex: none;
}

.buscador:focus{
   outline: 2px solid transparent;
}
</style>