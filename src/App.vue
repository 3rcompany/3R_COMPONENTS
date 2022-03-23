<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
const switchTema = () => {
  let objetivo = document.querySelector('html')
  objetivo.classList.toggle("dark")
  objetivo.classList.toggle("light")

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

.light{
  background-color: #fafafe;
}
</style>