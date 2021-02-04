<template>
  <div class="card-body">
    <h1>Vue Components</h1>

    <A03Repeater></A03Repeater>
    <A02Binding></A02Binding>
    <A01Currency></A01Currency>

  </div>
</template>

<style>
  
  h1 { color: orange; }

</style>

<script>
import A01Currency from './components/A01.Currency';
import A02Binding from './components/A02.Binding';
import A03Repeater from './components/A03.Repeater';

export default {
  name: 'App',
  components: {
    A01Currency, A02Binding, A03Repeater, 
  }
}
</script>


