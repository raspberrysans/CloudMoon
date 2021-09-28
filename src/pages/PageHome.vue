<template>
  <q-page class="page relative-position">
    <q-img
    style="max-width: 100%; height: 250px; object-fit: cover;"
      class="rounded-borders"
    src="https://i.pinimg.com/originals/47/4f/f3/474ff3319df17354e29327d37d37fc2d.png">
      <div class="absolute-bottom">
        Welcome to CloudMoon 2021. What is on your mind?
      </div>
    </q-img>

    <div class="row">
      <div class="col">
        <q-input v-model="imgurl" filled type="url" hint="Image URL" 
        label="Valid Image URL *"
        :rules="nameRules"/>
      </div>

      <div class="col">
        <q-input
          filled
          v-model="ireum"
          label="Your name *"
          hint="Name"
          lazy-rules
          :rules="nameRules"
        />
      </div>
      <div class="col">
        <q-input
          filled
          v-model="userID"
          label="Your ID *"
          hint="User ID"
          lazy-rules
          :rules="userIDRules"
        />
      </div>
      <div class="col">
        <q-toggle
        v-model="isGuest"
        color="primary"
        icon="las la-cloud-moon"
      />
      Guest?
      </div>
    </div>
    <div class="q-py-lg q-px-md ">
      <div class="row">
        <div class="col">
          <q-input bottom-slots 
            v-model="newCloudContent" 
            placeholder="What's Happening?" 
            counter maxlength="280"
            autogrow 
          >
          <template v-slot:before>
            <q-avatar size="xl">
              <img 
              style="max-width: 100%; height: 100%; object-fit: cover;"
              src="https://i.pinimg.com/originals/d9/01/78/d90178e601651432841490de849f4a08.jpg">
            </q-avatar>
          </template>
        </q-input>
      </div>
        <div class="col col-shrink">
          <q-btn rounded color="primary" 
          class="q-ma-lg" 
          @click.prevent="addNewCM()"
          :disabled="!newCloudContent">
            <q-icon name="las la-cloud-moon" size="lg"/>
          </q-btn>
        </div>
    </div>
    </div>
      
    <q-separator size="10px" color="grey-2" />
    <q-list separator>
      <transition-group
        appear
        enter-active-class="animated flipInX slower"
        leave-active-class="animated flipOutX slower"
      >
        <q-item class="q-py-md cloudmoons"
        v-for="cm in cloudmoons"
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
import { formatDistance } from 'date-fns'
import { collection, query, orderBy, onSnapshot, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore"
import db from 'src/boot/firebase'
export default defineComponent({
  name: 'PageHome',
  data(){ 
    const ireum = ref(null)
    const userID = ref(null)
    return {
      newCloudContent:'',
      isGuest: true,
      cloudmoons: [],
      imgurl:"",   
      ireum,
      userID,
      nameRules: [
        val => (val && val.length > 0) || 'Please enter a valid value'
      ],
      userIDRules: [
        val => (val && val.length > 1) || 'Please mention your ID'
      ]
    }
  },
  methods:{
    relativeDate(value){
      return formatDistance(value.date, new Date(), { addSuffix: true })
    },
    async addNewCM(){
      if(this.ireum && this.userID){
        let newCloud = {
        content:this.newCloudContent,
        date: Date.now(),
        liked: false,
        name:this.ireum,
        userid:this.userID,
        imgurl:this.imgurl
      }
      const docRef = await addDoc(collection(db, "kite"), newCloud);
      this.newCloudContent=""
      this.imgurl = ""
      this.ireum = ""
      this.userID=""
    }
      
      
    },
      async deleteCloudMoon(cm){
        await deleteDoc(doc(db, "kite", cm.id));
      },
      async likedCM(cm){
        await updateDoc(doc(db, "kite", cm.id), {
          liked: !cm.liked
        })
      }
  },
  mounted(){
    const q = query(collection(db, "kite"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let cloudmoonChange = change.doc.data()
        cloudmoonChange.id = change.doc.id
        if (change.type === "added") {
            this.cloudmoons.unshift(cloudmoonChange)
        }
        if (change.type === "modified") {
          let index = this.cloudmoons.findIndex(cm => cm.id === cloudmoonChange.id);
          Object.assign(this.cloudmoons[index], cloudmoonChange)
        }
        if (change.type === "removed") {
          let index = this.cloudmoons.findIndex(cm => cm.id === cloudmoonChange.id);
          this.cloudmoons.splice(index, 1)

          
        }
      });
    });

  }

})
</script>

<style lang="css">
.newcloud {
  font-size: 19px;
  line-height:1.4;
}
.cloud-content{
  white-space: pre-line;
  line-height: 1;
}
.cloudmoons:hover{
  background-color: rgb(255, 255, 255);
}
.cloud-icons{
  position: relative;
}
.idtime{
  font-size: 15px;
}
.scroll{
  overflow: hidden;
}
</style>