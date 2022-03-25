<template>
  <div class="flex flex-col items-center justify-start p-4 text-white h-screen bg-gray-900 overflow-auto">
    <div>
      <input type="search" placeholder="Buscar video" class="px-4 h-10 text-white bg-gray-800" v-model="palabra" />
      <input @click="peticion(palabra)" class="h-10 bg-black px-4 cursor-pointer" value="Go" />
    </div>
    <div  class="h-screen w-full flex items-center justify-center">
      <div class="flex-none" id="player"></div>
    </div>
    <div class="w-full flex flex-wrap items-start justify-start">
      <div @click="onYouTubePlayerAPIReady(video.id.videoId)" v-for="video in data.items" :key="video" class="flex flex-row items-center justify-start bg-black w-72 rounded m-1 cursor-pointer hover:bg-white hover:text-black p-1">
        <!-- <img :src="video.snippet.thumbnails.high.url" alt="" /> -->
        <div class="w-20 rounded-xl h-20 flex-none bg-center mr-2 overflow-hidden" :style="{ backgroundImage: 'url(' + video.snippet.thumbnails.default.url + ')' }"></div>
        <h1 class="text-xs text-left">{{ video.snippet.title }}</h1>
      </div>
    </div>
    <div id="ytplayer"></div>
    <iframe v-if="seleccionado" id="ytplayer" type="text/html" width="640" height="360" :src="idseleccionado" frameborder="0" />

    <!-- <pre>
    {{ data.items }}

    </pre> -->
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
// create youtube player
var player;
function onYouTubePlayerAPIReady(x) {
  
  player = new YT.Player("player", {
    height: "800",
    width: "100%",
    playerVars: { controls: 0, rel: 0, modestbranding: 1, showinfo: 0, fs: 0, disablekb: 1 },
    videoId: x,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// autoplay video
function onPlayerReady(event) {
  seleccionado.value=true
  event.target.playVideo();
}

// when video ends
function onPlayerStateChange(event) {
  if (event.data === 0) {
    player.destroy();
    seleccionado.value=false
  }
}

const Apikey = "AIzaSyCQgMmY8anWipY7Las0l7CTkDdPmszxqlo";
const palabra = ref("");
const data = ref([]);

const seleccionado = ref(false);
const idseleccionado = ref("");

const reproducir = ide => {
  seleccionado.value = false;
  idseleccionado.value = `http://www.youtube.com/embed/${ide}?autoplay=1&controls=0&showinfo=0&rel=0`;

  seleccionado.value = true;
};

const peticion = async buscar => {
  if (!buscar.length) return;

  const endPoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCQgMmY8anWipY7Las0l7CTkDdPmszxqlo&maxResults=50&type=video&videoDuration=short&videoCategoryId=10&q=${buscar}`;
  try {
    const res = await fetch(endPoint, {
      method: "GET"
    });

    const datax = await res.json();
    console.log(datax);
    data.value = await datax;

    // if (data.response == "SUCCESS") {
    //   return {
    //     response: true,
    //     data: data
    //   };
    // }

    // return {
    //   response: false,
    //   data: []
    // };
  } catch (error) {
    console.log(error);
    return {
      response: false,
      data: []
    };
  }
};

// peticion('salsa');
</script>

<style></style>
