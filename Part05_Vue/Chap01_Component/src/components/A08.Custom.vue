
<template>
    <div class="card-body">
        <h3>8. Custom Directive, Filter</h3>
        <br>

        <div>
            Date: {{new Date()}}<br>
            Currency: {{123.456}}<br>
        </div>
        <br>

        <h5>PlugIn</h5>
        <div>
            Num: {{num}}<br>
            <br>

            <div>Hello World</div>
            <div>OrangeColor</div>
        </div>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            num: 0,
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>
