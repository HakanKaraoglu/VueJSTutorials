<template>

<div style="padding:10px">

   <h3>Ability</h3>
    
 <div class="progress">
    <div class="progress-bar progress-bar-danger" role="progressbar" :aria-valuenow="ability.hp" aria-valuemin="0" aria-valuemax="120" :style="{width: ability.hp+'%'}">
      HP : {{ability.hp}}
    </div>
  </div>

  <div class="progress">
    <div class="progress-bar progress-bar-warning" role="progressbar" :aria-valuenow="ability.attack" aria-valuemin="0" aria-valuemax="120" :style="{width: ability.attack+'%'}">
      Attack : {{ability.attack}}
    </div>
  </div>

  <div class="progress">
    <div class="progress-bar progress-bar-info" role="progressbar" :aria-valuenow="ability.defense" aria-valuemin="0" aria-valuemax="120" :style="{width: ability.defense+'%'}">
      Defense : {{ability.defense}}
    </div>
  </div>

  <div class="progress">
    <div class="progress-bar progress-bar-warning" role="progressbar" :aria-valuenow="ability.spAttack" aria-valuemin="0" aria-valuemax="120" :style="{width: ability.spAttack+'%'}">
     Sp. Attack : {{ability.spAttack}}
    </div>
  </div>

  <div class="progress">
    <div class="progress-bar progress-bar-info" role="progressbar" :aria-valuenow="ability.spDefense" aria-valuemin="0" aria-valuemax="120" :style="{width: ability.spDefense+'%'}">
      Sp. Defense : {{ability.spDefense}}
    </div>
  </div>

  <div class="progress">
    <div class="progress-bar progress-bar-success" role="progressbar" :aria-valuenow="ability.speed" aria-valuemin="0" aria-valuemax="120" :style="{width: ability.speed+'%'}">
      Speed : {{ability.speed}}
    </div>
  </div>
  
</div>


</template>

<script>
export default {
  name: "Ability",
  props: {
    ability:{
      type:Object,
      required:false,
      default: function () { return {} }
    }
  },

  data() {
    return {

    };
  }
  
};
</script>