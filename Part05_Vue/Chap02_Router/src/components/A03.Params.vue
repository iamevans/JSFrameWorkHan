<template>
    <div>
        <h6>A03 Param Component</h6>
        This is Param Component<br>
        <br>
        ID: {{$route.params.id}} <!-- $ref -->
    </div>
</template>

<script>
export default {
    name: 'Params',
    data: function(){
        return {
            
        }
    }
}
</script>

<style>

</style>