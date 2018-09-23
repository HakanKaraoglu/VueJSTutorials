<template>
<div id="app">
   
   <h3>{{title}}</h3>

   <div class="col-md-12">
   
   <Character v-for="(id,index) in initial_ids" v-bind:id="id" v-bind:key="index"/>

   </div>

</div>
</template>

<script>
import Character from "./components/Character";

export default {
  name: "app",
  data() {
    return {
      title: "Generate Pokemon Team",
      initial_ids:[0,3,6,17,11,24]
    };
  },

  components: {
    Character    
  }
};
</script>


<style>
</style>
