<template >
  <q-layout view="lHr lpR lFf">

    <q-header bordered class="header text-black header">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-item>
          <q-item-section>
          <q-item-label class="text-h4 text-weight-bold">{{ $route.name }} / CloudMoon</q-item-label>
          </q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" 
    class="left-drawer" style="position: sticky"
    >
      <q-btn :ripple="{ color: 'primary' }" flat to="/" rounded>
        <q-icon name="las la-cloud-moon" 
        size="4.5em" 
        color="primary" 
        class="q-pa-lg"
        display="flex"
        flex-direction="column"
        clickable
        />
      </q-btn>

      <q-list>
        <q-item exact clickable v-ripple to="/home">
          <q-item-section avatar>
            <q-icon color="primary" name="las la-home" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>

        <q-item exact clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon color="primary" name="las la-question-circle" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
      </q-item>

      <q-item exact clickable v-ripple to="/explore">
          <q-item-section avatar>
            <q-icon color="primary" name="las la-hashtag" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Explore</q-item-section>
      </q-item>

      <q-item exact clickable v-ripple to="/notifications">
          <q-item-section avatar>
            <q-icon color="primary" name="las la-bell" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Notifications</q-item-section>
      </q-item>

      <q-item exact clickable v-ripple to="/messages">
          <q-item-section avatar>
            <q-icon color="primary" name="las la-envelope" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Messages</q-item-section>
      </q-item>

      <q-item exact clickable v-ripple to="/profile">
          <q-item-section avatar>
            <q-icon color="primary" name="las la-user-circle" size="md" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">My Profile</q-item-section>
      </q-item>

      </q-list>

      <q-btn unelevated rounded color="primary" class="q-ma-lg" to="/" >
        <q-icon name="las la-cloud-moon" size="lg"/>
        <div> CloudMoon </div>
      </q-btn>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" class="right-drawer" >
        <q-input rounded dense outlined 
        placeholder="Search CloudMoon News" 
        class="q-ma-sm"
        v-model="input_text">
          <template v-slot:prepend>
          <q-icon name="search" @click="text = ''" />
        </template>
      </q-input>
      <q-list class="q-pl-md" style="max-width: 450px" padding>
      <q-item class="q-mt-sm"
      v-for="article in  limitArray(filteredList, 4)" :key="article.title">
        <q-item-section>
          <q-item-label class="text-weight-bold" overline>{{ article.title }}</q-item-label>
          <q-item-label>{{ article.source.name }}</q-item-label>
          <q-item-label lines="2" caption>{{article.description}}</q-item-label>
        </q-item-section>
        <q-item-section class="relative-bottom col-shrink">
        <q-btn flat rounded color="purple-4" type="a" :href=article.url target="__blank">
            Open
        </q-btn>
      </q-item-section>
      </q-item>
      
      </q-list>
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import mixin from 'src/pages/PageExplore'; 
export default {
  mixins:[ mixin ],
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  },
  methods:{
     limitArray(arr, length = 3) {
      if (arr && arr.length) {
        if (length == -1) {
          return arr;
        }
        if (length > arr.length) {
          return arr;
        }

        return arr.slice(0, length);
      }

      return null;
    }
  }

}
</script>
<style language="css">

.header{
background-color: #ebe4f8;
}
.left-drawer{

}
.right-drawer{

}

</style>