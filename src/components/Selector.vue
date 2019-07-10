<template>
    <md-button class="md-raised" v-on:click="play">{{ value }}</md-button>
</template>

<style lang="scss" scoped>

</style>


<script>
  import { game } from "../game.js";

  export default {
    name: 'Selector',
    props: {
      value: String
    },
    methods: {
      play: function (event) {
        var audio = new Audio(require('../assets/' + this.value + '.mp3'));
        audio.play();
        game.setPart(this.value);
      }
    }
  }
</script>
