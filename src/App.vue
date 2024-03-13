<template>
  <div>
    <!-- /// :key로 변경된 url 경로 인식 -->
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>