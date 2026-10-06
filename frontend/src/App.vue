<template>
  <div class="">
    {{ nome }}
  </div>
</template>


<script>

import { ref } from 'vue';

export default {
  name: 'App',
  data () {
    return {
      nome: ref('oi')
    }
  }
}
</script>

<style>
</style>
