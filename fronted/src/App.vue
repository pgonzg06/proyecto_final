<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <v-img
          alt="FlashGram Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="150"
        />
      </div>

    </v-app-bar>

    <v-content>
      <Inicio />
    </v-content>

  </v-app>
</template>

<script>
import Inicio from "./components/Inicio";

export default {
  name: "App",

  components: {
    Inicio
  },

  data(){
    }
};
</script>
