<template>
  <div>
    <router-link to="/">INDEX</router-link> | 
    <router-link to="/home">HOME</router-link> | 
    <router-link to="/about/100/data/NolBu">ABOUT</router-link> | 
    <router-link to="/param/200">PARAM</router-link> | 
    <router-link to="/child">CHILD</router-link> | 
    <router-link to="/abc">ABC</router-link> | 
    <hr>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
