<template>

    <div>



        <div class="md-layout word score-board">
            <img class="cake" src="../assets/images/cake.png"/>

            <md-button class="md-icon-button md-accent md-raised">
                {{gameState.score}}
            </md-button>
            <img class="cake" src="../assets/images/cake.png"/>
        </div>

        <div class="score">
        <div v-for="i in gameState.score" class="diplo">
            <img src="../assets/diplodocus.png"/>
        </div>
        </div>
        <div>
            <img :src="gameState.image" class="picture"/>
        </div>



        <div class="md-layout word">

            <md-button class="md-icon-button md-raised md-accent" @click="clear">
                <md-icon>delete_forever</md-icon>
            </md-button>

            <div class="md-layout-item part" :class="{'highlighted': gameState.activePart == 0 }">{{ gameState.parts[0] }}</div>
            <div class="md-layout-item part" :class="{'highlighted': gameState.activePart == 1 }">{{ gameState.parts[1] }}</div>

            <md-button class="md-icon-button md-raised md-primary" @click="next" :disabled="gameState.disabled">
                <md-icon>play_arrow</md-icon>
            </md-button>

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
        width: 240px;
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
        width: 320px;
        margin: auto;
        height: 60px;
    }

    .picture {
        width: 300px;
        margin-bottom: 20px;
    }

    .clear {
        width: 36px!important;
        min-width: unset!important;
    }

    .cake {
        width: 32px;
    }

    .score-board {
        width: 120px;
        height: 50px;
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
      },
      clear: () => { game.clear() }
    },
    data: function () {
      return {
        gameState: game.state
      }
    }
  }
</script>
