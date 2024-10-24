<template>
  <v-container fluid>
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="firstname" label="Firstname" :rules="rules" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="lastname" label="Lastname" :rules="rules" required></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="email" label="Email" :rules="rules" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-select v-model="age" :items="ageOption" item-value="key" item-title="value" label="Age" required></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-radio-group v-model="gender" inline required>
            <v-radio v-for="option in genderOptions" :key="option.key" :value="option.value" :label="option.value"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="6">
          <v-combobox v-model="skill" :items="skillOptions" label="Skill" multiple required></v-combobox>
        </v-col>
        <v-col cols="12" md="6">
          <v-file-input v-model="file" label="File" required></v-file-input>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="introdution" label="Introduction" :rules="rules" required></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-slider v-model="treatment" label="Treatment" thumb-label="always" required></v-slider>
        </v-col>
      </v-row>
      <v-btn @click.prevent="submit">submit</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const firstname = ref(null)
const lastname = ref(null)
const email = ref(null)
const age = ref(null)
const gender = ref(null)
const skill = ref(null)
const file = ref(null)
const introdution = ref(null)
const treatment = ref(null)
const form = ref()
    
const ageOption = [
  {key: 20, value: '20~30'},
  {key: 30, value: '30~40'},
  {key: 40, value: '40~50'},
  {key: 50, value: '50~60'}
]
const genderOptions = [
  {key: 0, value: '男'},
  {key: 1, value: '女'}
]
const skillOptions = [
  'Javascript',
  'Vue',
  'Vuetify',
  'Docker'
]
const rules = [ v => !!v || 'This is required' ]

const submit = () => {
  form.value.validate()
}
</script>
