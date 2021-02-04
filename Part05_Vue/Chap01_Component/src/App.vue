<template>
  <div class="card-body">
    <h1>Vue Components</h1>

    <A01Currency></A01Currency>
    
  </div>
</template>

<style>
  
  h1 { color: orange; }

</style>

<script>
import A01Currency from './components/A01.Currency';

export default {
  name: 'App',
  components: {
    A01Currency, 
  }
}
</script>


