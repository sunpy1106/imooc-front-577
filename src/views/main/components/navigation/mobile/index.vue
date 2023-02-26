<template>
    <div>
     移动端导航
    </div>
  </template>
  <script setup>

import { getCategory } from '@/api/category';
const getCategoryData = async() =>{
    const res = await getCategory()
    console.log(res)
}
getCategoryData()
  </script>
  