<template>
  <q-page class="">
    <q-card class="my-card">
      <q-img
      style="max-width: 100%; height: 260px; object-fit: cover;"
        class="rounded-borders"
      src="https://i.pinimg.com/originals/47/4f/f3/474ff3319df17354e29327d37d37fc2d.png">
        <div class="absolute-bottom">
          <q-item>
            <q-item-section avatar>
            <q-avatar size="xl">
              <img src="https://i.pinimg.com/736x/ae/fa/7a/aefa7ae98077dcc350862d7af697ae76.jpg">
            </q-avatar>
            </q-item-section>
            <q-item-section>
            <q-item-label>SANS</q-item-label>
            <q-item-label>@raspberrysans</q-item-label>
            </q-item-section>
            </q-item>
        </div>
      </q-img>
    </q-card>
    <q-tabs
        v-model="tab"
        narrow-indicator
        dense
        align="justify"
      >
        <q-tab :ripple="false" name="CloudMoons" icon="las la-cloud-moon" label="CloudMoons" class="text-primary"/>
        <q-tab :ripple="false" name="Likes" icon="las la-heart" label="Likes" class="text-secondary" />
      </q-tabs>
    <q-list separator>
      <transition-group
        appear
        enter-active-class="animated flipInX slower"
        leave-active-class="animated flipOutX slower"
      >
        <q-item class="q-py-md cloudmoons"
        v-for="cm in filteredList()"
        v-bind:key="cm.id"
        clickable
        >
        
        <q-item-section avatar top>
        <q-avatar size="xl">
            <img style="max-width: 100%; height: 100%; object-fit: cover;"
            :src= 'cm.imgurl'
            v-if='cm.imgurl'/>

            <img style="max-width: 100%; height: 100%; object-fit: cover;"
            src= 'https://i.pinimg.com/originals/d9/01/78/d90178e601651432841490de849f4a08.jpg'
            v-if='!cm.imgurl'/>
        </q-avatar>
        </q-item-section>

        <q-item-section >
        <q-item-label class="text-subtitle1 text-weight-bold"> {{cm.name}}
            <span class="text-grey-7 text-weight-light idtime"> &bull; @{{cm.userid}} 
              &bull; <br class="lt-md"> {{ relativeDate(cm) }}  </span>
            
        </q-item-label>
        
        <q-item-label class="cloud-content text-body1">
        {{cm.content}}
        </q-item-label>
        <div class=" flex justify-between q-mt-sm cloud-icons">
            <q-btn flat round color="info" class="q-ma-lg col" size="md" >
            <q-icon name="las la-comment-alt" size="sm"/>
            </q-btn>

            <q-btn flat round color="positive" class="q-ma-lg col" size="md" >
            <q-icon name="las la-retweet" size="sm"/>
            </q-btn>

            <q-btn flat round color="secondary" class="q-ma-lg col" size="md" 
            @click="likedCM(cm)">
            <q-icon :class="[cm.liked? 'las la-heart' : 'las la-cloud-moon']" size="sm"/>
            </q-btn>

            <q-btn flat round color="primary" class="q-ma-lg col" size="md">
            <q-icon name="las la-share-square" size="sm"/>
            </q-btn>

            <q-btn flat round color="warning" class="q-ma-lg col" 
            size="md" 
            @click.prevent="deleteCloudMoon(cm)"
            >
            <q-icon name="las la-trash" size="sm"/>
            </q-btn>
        </div>
        </q-item-section>


          
        </q-item>
      </transition-group>
      
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'
import mixin from './PageHome'; 
export default defineComponent({
    mixins:[ mixin ],
  name: 'PageProfile',
  setup () {
    return {
      tab: ref('CloudMoons')
    }
  },
  methods: {
    filteredList() {
        console.log(this.cloudmoons)
      return this.cloudmoons.filter(post => {
        return (post.name === 'sans' && post.userid === 'raspberrysans')
      })
    }
  }
})
</script>
<style lang="css">

.avt{
    height: 40px;

}
</style>
