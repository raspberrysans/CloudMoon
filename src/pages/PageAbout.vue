<template>
  <q-page class="">
    <q-img
    style="max-width: 100%; height: 190px; object-fit: cover;"
      class="rounded-borders"
    src="https://i.pinimg.com/originals/47/4f/f3/474ff3319df17354e29327d37d37fc2d.png">
      <div class="absolute-bottom">
        © 2021 Cloudmoon, Inc.
      </div>
    </q-img>
    <h4 class="q-pl-md q-mt-none q-mb-sm text-weight-light row inline justify between"> About CloudMoon </h4>
    <q-icon name="las la-cloud-moon q-ma-md row inline q-pb-md" color="dark" size="4em"/>
    <p class="text-h6 q-mt-none q-pa-md"> 
        CloudMoon is a Twitter clone created using 
        <b>Quasar Framework and Vue, with a Firebase backend. </b>
        It is a small passion project created by <b> <a href="https://raspberrysans.github.io/" target=”_blank”> Sans Bhatia. </a> </b>
    </p>
    <p class="text-h6 q-mt-none q-pa-md"> 
      Feautures:
      <ul>
      <li>Post a CloudMoon</li>
      <li>Like a CloudMoon</li>
      <li>Delete a CloudMoon</li>
      <li>Check and search for the latest news in Explore / CloudMoon or in the right-hand side drawer</li>
      </ul>
    </p>
    <p class="text-h6 q-mt-none q-pa-md"> 
      Feautures to add in the future:
      <ul>
      <li>Comment on a CloudMoon</li>
      <li>Separate accounts for each person</li>
      <li>Upload images on CloudMoon</li>
      <li>Language options</li>
      </ul>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageAbout'
})
</script>
