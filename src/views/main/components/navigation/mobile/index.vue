<template>
    <div class=" bg-white sticky top-0 left-0 z-10">
     <ul class=" relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
        <li class=" shrink-0 px-1.5 py-0.5 z-10 duration-200" v-for="item in  data" :key="item.id">
            {{ item.name }}
        </li>
     </ul>
    </div>
  </template>
  <script setup>
    //vite 构建的项目中，可以直接使用DefineProps方法
    defineProps({
        data:{
            type: Array,
            required: true
        }
    })
  </script>
  