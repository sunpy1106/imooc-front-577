<template>
    <div>
     <mobileNavigationVue  v-if="isMobileTerminal"/>
    </div>
  </template>
  <script setup>

import {isMobileTerminal} from '@/utils/flexable'
import mobileNavigationVue from './mobile/index.vue'

  </script>
  