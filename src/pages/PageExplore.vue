<template>
  <q-page class="">
    <q-img
    style="max-width: 100%; height: 190px; object-fit: cover;"
      class="rounded-borders"
    src="https://i.pinimg.com/originals/47/4f/f3/474ff3319df17354e29327d37d37fc2d.png">
      <div class="absolute-bottom">
        <q-input rounded standout="bg-black-1" v-model="input_text" placeholder="Explore Cloudmoon"
        >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      </div>
    </q-img>
      
      <h4 class="q-pl-md"> Today's News </h4>
      <div v-for="article in filteredList" :key="article.title">
        <q-card class="my-card q-ma-lg" >
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline text-weight-bold">{{ article.source.name }}</div>
          <div class="text-h5 q-mt-sm q-mb-xs">{{ article.title }}</div>
          <div class="text-caption text-grey">
            {{ article.description }}
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            :src= 'article.image'
            style="max-width: 100%; height: 100%; object-fit: cover;"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat color="purple-4" type="a" :href='article.url' target="__blank">
            Open in new tab
        </q-btn>
      </q-card-actions>
    </q-card>
      </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: 'PageExplore',
  data(){
    return{
      input_text:"",
      api_key:'5ec29c08a695e02b7623c4ed90f8a66b', // Gnews API Key
      articles: [],
      errors: [] 
    }
  },
  created () {
    axios.get('https://gnews.io/api/v4/search?q=example&token='+this.api_key)
      .then(response => {
        //this.articles = response.data.articles
        this.articles = response.data.articles
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  computed: {
    filteredList() {
      return this.articles.filter(post => {
        return post.title.toLowerCase().includes(this.input_text.toLowerCase())
      })
    }
  }

})
</script>
<style lang="css">
</style>