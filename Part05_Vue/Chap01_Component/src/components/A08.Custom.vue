
<template>
    <div class="card-body">
        <h3>8. Custom Directive, Filter</h3>
        <br>

        <div>
            Date: {{toDate(new Date())}}<br>
            Currency: {{toCurrency('USD', 123.456)}}<br>
        </div>
        <br>

        <h5>PlugIn</h5>
        <div>
            Num: {{num}}<br>
            <br>

            <div v-bgColor="'orange'">Hello World</div>
            <div v-color="'green'">OrangeColor</div>
        </div>
    </div>
</template>

<script>
import { toDate, toCurrency } from './../common/custom.filter';

export default {
    data: function() {
        return {
            //num: 0,
        }
    },
    methods: {
        // 외부 메서드 등록
        toDate, toCurrency
    }
}
</script>

<style scoped>

</style>
