<template>

    <div>

        <div class="score">
        <div v-for="i in gameState.score" class="diplo">
            <img src="../assets/diplodocus.png"/>
        </div>
        </div>

        <div>
            <img :src="gameState.image" class="picture"/>
        </div>



        <div class="md-layout word" >
            <div class="md-layout-item part" :class="{'highlighted': gameState.activePart == 0 }">{{ gameState.parts[0] }}</div>
            <div class="md-layout-item part" :class="{'highlighted': gameState.activePart == 1 }">{{ gameState.parts[1] }}</div>
        </div>


        <div class="selection">
            <Selector class="md-raised" :value="gameState.selectors[0]"></Selector>
            <Selector class="md-raised" :value="gameState.selectors[1]"></Selector>
            <Selector class="md-raised" :value="gameState.selectors[2]"></Selector>
        </div>
        <div>
            <Selector class="md-raised" :value="gameState.selectors[3]"></Selector>
            <Selector class="md-raised" :value="gameState.selectors[4]"></Selector>
            <Selector class="md-raised" :value="gameState.selectors[5]"></Selector>
        </div>

        <div>
            <md-button class="md-raised md-primary" @click="next" :disabled="gameState.disabled">DALEJ</md-button>
        </div>


    </div>


</template>

<style lang="scss" scoped>
    .part {
        font-size: 32px;
        margin-right: 10px;
        padding-bottom: 5px;
        border-bottom: 3px solid black;
    }

    .word {
        width: 150px;
        height: 30px;
        margin: 0 auto;
    }

    .selection {
        margin-top: 50px;
    }

    .highlighted {
        border-bottom: 3px solid khaki;
    }

    .diplo {
        float: left;
    }

    .score {
        width: 300px;
        margin: auto;
        height: 60px;
    }

    .picture {
        width: 300px;
        margin-bottom: 20px;
    }
</style>


<script>

  import Selector from "../components/Selector.vue";
  import { game } from "../game.js";




  export default {
    name: 'Board',
    components: {
      Selector
    },
    methods: {
      next: function() {
        game.next();
      }
    },
    data: function () {
      return {
        gameState: game.state
      }
    }
  }
</script>
