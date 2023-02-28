<template>
    <div>
     <mobileNavigationVue  :data= categorysData v-if="isMobileTerminal"/>
    </div>
  </template>
  <script setup>

import {isMobileTerminal} from '@/utils/flexable'
import mobileNavigationVue from './mobile/index.vue'

import { getCategory } from '@/api/category';
import {ref} from 'vue'

const categorysData = ref([])
const getCategoryData = async() =>{
    const {categorys} = await getCategory()
    categorysData.value = categorys
    console.log(categorysData.value)
}

getCategoryData()

  </script>
  