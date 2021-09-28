<template>
  <q-page class="">
    <q-img
    style="max-width: 100%; height: 190px; object-fit: cover;"
      class="rounded-borders"
    src="https://i.pinimg.com/originals/47/4f/f3/474ff3319df17354e29327d37d37fc2d.png">
      <div class="absolute-bottom">
        You have 0 notifications.
      </div>
    </q-img>
    <h3 class="q-pa-sm text-weight-lighter "> 
        Nothing to see here — yet </h3>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotifications'
})
</script>
