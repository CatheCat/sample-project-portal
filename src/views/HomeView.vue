<template>
  <v-container fluid>
    <v-select v-if="isMobile" v-model="activeTab" :items="tabs"></v-select>
    <v-tabs v-if="!isMobile" v-model="activeTab">
      <v-tab v-for="tab in tabs" :key="tab" :value="tab">{{ tab }}</v-tab>
    </v-tabs>

    <v-window v-model="activeTab">
      <v-window-item v-for="tab in tabs" :key="tab" :value="tab">
        <span class="text-h6 font-weight-medium">Find something interesting to discuss {{ tab }}</span>

        <v-spacer></v-spacer>
        
        <v-row>
          <v-col v-for="i in 6" :key="i" cols="12" md="4">
            <v-card>
              <v-img :src="`https://picsum.photos/300/200?random=${i}&grayscale`" cover></v-img>

              <v-card-title>13 years ago today, a true patriot lost his life. Rest in Peace big guy.</v-card-title>

              <v-card-subtitle>6 hours ago by</v-card-subtitle>

              <v-card-actions>
                <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
                <v-btn icon><v-icon>mdi-bookmark</v-icon></v-btn>
                <v-btn icon><v-icon>mdi-share-variant</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const activeTab = ref(null)

const isMobile = computed(() => store.getters.getIsMobile)

const tabs = ['HOT', 'NEW', 'RISING', 'CONTROVERSIAL', 'TOP', 'GILDED', 'PROMOTED']
</script>
