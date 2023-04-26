<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to='/'>Home</RouterLink>
    <RouterLink to='/about'>About</RouterLink>
    <RouterLink to='/contact'>contact</RouterLink>
    <RouterLink to='/post'>post</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
  nav {
    padding: 10px;
    width: 100%;
    margin: 0 auto;
    font-size: 30px;
    border-bottom: 2px solid mediumpurple;
  }
  nav a{
    text-decoration: none;
    color: black;
    padding: 5px 10px;
  }
  nav a.router-link-active {
    border-radius: 10px;
    background-color: white;
    color: lightseagreen;
  }


</style>
