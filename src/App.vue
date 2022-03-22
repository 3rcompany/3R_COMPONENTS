<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>&nbsp;
  </nav> -->
<div class="w-full h-screen p-4">
    <router-view class="" />
</div>
 
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
const switchTema =() =>{
  let objetivo = document.querySelector('html')
  objetivo.classList.toggle("dark")

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>