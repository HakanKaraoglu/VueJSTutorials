<template>

<div class="col-md-4" @click="switchCharacter">

  <div class="card">
  
  <div class="character-card">  
    <div class="card-block">
    <p class="no">No: {{character.id}}</p> <br>

    <img style="float:left" width="240px" height="200px" v-bind:src="character.url">  
    <h3 class="clear">Name  : {{character.name}}</h3>

    <p>Height : <span class="label label-success"> {{character.height}} (m)</span></p>
    <p>Weight : <span class="label label-info">{{character.weight}} (kgs)</span></p>

    <p>Types :</p>

    <div v-for="(types,index) in character.type" :key="index">
     <span v-if="types=='Fire'" class="label label-fire">{{types}}</span>
     <span v-else-if="types=='Water'" class="label label-water">{{types}}</span>
     <span v-else-if="types=='Electric'" class="label label-electric">{{types}}</span>
     <span v-else-if="types=='Grass'" class="label label-grass">{{types}}</span>
     <span v-else-if="types=='Ice'" class="label label-ice">{{types}}</span>
     <span v-else-if="types=='Figthing'" class="label label-figthing">{{types}}</span>
     <span v-else-if="types=='Poison'" class="label label-poison">{{types}}</span>
     <span v-else-if="types=='Ground'" class="label label-ground">{{types}}</span>
     <span v-else-if="types=='Flying'" class="label label-flying">{{types}}</span>
     <span v-else-if="types=='Psychic'" class="label label-psychic">{{types}}</span>
     <span v-else-if="types=='Bug'" class="label label-bug">{{types}}</span>
     <span v-else-if="types=='Rock'" class="label label-rock">{{types}}</span>
     <span v-else-if="types=='Ghost'" class="label label-ghost">{{types}}</span>
     <span v-else-if="types=='Dragon'" class="label label-dragon">{{types}}</span>
     <span v-else-if="types=='Dark'" class="label label-dark">{{types}}</span>
     <span v-else-if="types=='Steel'" class="label label-steel">{{types}}</span>
     <span v-else-if="types=='Fairy'" class="label label-fairy">{{types}}</span>
     <span v-else class="label label-normal">{{types}}</span>
    </div>
      
    </div>

    <br>

    <Ability :ability="character.ability"/>

  </div>
  
  </div>

  
</div>

</template>

<script>
import Ability from "./Ability";

export default {
  props: {
    id: {
      type: [Number]
    },
    ability: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      character: {}
    };
  },

  methods: {
    fetchCharacter(id) {
      fetch(`data.json`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(json => (this.character = json[id]));
    },

    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) + 1;
      this.fetchCharacter(random_id);
    }
  },

  created() {
    this.fetchCharacter(this.id);
  },

  components: {
    Ability
  }
};
</script>

<style>
.no {
  padding: 8px;
  float: left;
}

.clear {
  float: none;
}
.label-normal {
  background-color: #aaaa99;
  margin-left: 10px;
  float: left;
}
.label-fire {
  background-color: #ff4422;
  float: left;
  margin-left: 10px;
}

.label-water {
  background-color: #3399ff;
  float: left;
  margin-left: 10px;
}

.label-electric {
  background-color: #ffcc33;
  float: left;
  margin-left: 10px;
}

.label-grass {
  background-color: #77cc55;
  float: left;
  margin-left: 10px;
}

.label-ice {
  background-color: #66ccff;
  float: left;
  margin-left: 10px;
}

.label-figthing {
  background-color: #bb5544;
  float: left;
  margin-left: 10px;
}

.label-poison {
  background-color: #aa5599;
  float: left;
  margin-left: 10px;
}

.label-ground {
  background-color: #ddbb55;
  float: left;
  margin-left: 10px;
}

.label-flying {
  background-color: #8899ff;
  float: left;
  margin-left: 10px;
}

.label-psychic {
  background-color: #ff5599;
  float: left;
  margin-left: 10px;
}

.label-bug {
  background-color: #aabb22;
  float: left;
  margin-left: 10px;
}

.label-rock {
  background-color: #bbaa66;
  float: left;
  margin-left: 10px;
}

.label-ghost {
  background-color: #6666bb;
  float: left;
  margin-left: 10px;
}

.label-dragon {
  background-color: #7766ee;
  float: left;
  margin-left: 10px;
}

.label-dark {
  background-color: #775544;
  float: left;
  margin-left: 10px;
}

.label-steel {
  background-color: #aaaabb;
  float: left;
  margin-left: 10px;
}

.label-fairy {
  background-color: #ee99ee;
  float: left;
  margin-left: 10px;
}
</style>
