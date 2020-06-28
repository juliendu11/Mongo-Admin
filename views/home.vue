<template>
  <div>
    Test
  <div class="center content-inputs">
      <vs-input v-model="value" placeholder="Name" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
  import Vuesax from 'vuesax'

  import 'vuesax/dist/vuesax.css' //Vuesax styles
  Vue.use(Vuesax, {
    // options here
  })

export default {
  mounted() {
   
  },
};
</script>

<style></style>
