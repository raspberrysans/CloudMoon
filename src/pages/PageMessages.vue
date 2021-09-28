<template>
  <q-page class="">
    <q-img
    style="max-width: 100%; height: 190px; object-fit: cover;"
      class="rounded-borders"
    src="https://i.pinimg.com/originals/47/4f/f3/474ff3319df17354e29327d37d37fc2d.png">
      <div class="absolute-bottom q-pa-md">
        Send a message, get a message 
      </div>
    </q-img>
    <q-btn unelevated rounded color="primary" class="q-ma-lg" to="/" >
        <q-icon name="las la-cloud-moon" size="lg"/>
        <div> Start a conversation </div>
      </q-btn>    
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageMessages'
})
</script>
