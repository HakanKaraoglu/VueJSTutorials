<template>
   
   <div id="app">
   Got Jokes ?

   <br><br>

   <span v-for="(jokeType,index) in types" :key="index">
   <input type="checkbox" :value="jokeType" v-model="checkedTypes" checked>
   <label>{{jokeType}}</label>&nbsp;&nbsp;&nbsp;
   </span>
   
   <br><br>
   <button class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
   <button class="btn btn-success" @click="addJoke">Add a Joke</button>
   <br><br>

   <div class="col-md-12">

   <Joke 
   v-for="(joke,index) in $store.state.jokes"
   v-show="checkedTypes.includes(joke.type.toLowerCase())"
   :joke="joke"
   :index="index"
   :key="index"
   />

   </div>

   </div>

</template>

<script>
import { mapActions } from "vuex";
import Joke from "./Joke.vue";

export default {
  data() {
    return {
      types: ["general", "programming", "knock-knock"],
      checkedTypes: ["general", "programming", "knock-Knock"]
    };
  },

  methods: mapActions(["initJokes", "addJoke"]),
  components: {
    Joke
  }
};
</script>