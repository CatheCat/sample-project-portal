<template>
  <div>
    <v-app-bar :order="1" v-if="isMobile" >
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="isOpen = !isOpen"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>
        <v-img src="../assets/image/app-logo.svg" max-width="160"></v-img>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer :order="0" v-model="isOpen">
      <v-list>
        <v-list-item>
          <v-img src="../assets/image/app-logo.svg"></v-img>
        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item title="catherine_chen@gmail.com">
          <template v-slot:append>
            <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item>
          <v-text-field label="Search" prepend-inner-icon="mdi-magnify"></v-text-field>
        </v-list-item>

        <v-list-item v-for="item in items1" :key="item.title" :value="item.title" :to="item.to">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      
      <v-list density="compact" nav>
        <v-list-group v-for="({ title, icon, items }, i) in items2" :key="i" :value="title">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="title">
              <template v-slot:prepend>
                <v-icon :icon="icon"></v-icon>
              </template>
            </v-list-item>
          </template>
          <v-list-item v-for="({ title, to }, i) in items" :key="i" :title="title" :value="title" :to="to"></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const isOpen = ref(!store.getters.getIsMobile)

const isMobile = computed(() => store.getters.getIsMobile)

const items1= [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Notification', to: '', icon: 'mdi-bell' },
  { title: 'My subreddits', to: '', icon: 'mdi-view-dashboard' },
  { title: 'Gaming', to: '', icon: '' },
  { title: 'Funny', to: '', icon: '' },
  { title: 'Series', to: '', icon: '' },
]

const items2 = [
  {
    title: 'About',
    icon: 'mdi-account-multiple',
    items: [
      { title: 'Register', to: '/about' },
      { title: 'Profile', to: '' }
    ]
  },
  {
    title: 'Help',
    icon: 'mdi-help-box',
    items: [
      { title: 'General FAQ', to: '' },
    ]
  },
  {
    title: 'App & Tools',
    icon: 'mdi-tools',
    items: [
      { title: 'About System', to: '' },
      { title: 'Extension Plugin', to: '' }
    ]
  }
]
</script>
