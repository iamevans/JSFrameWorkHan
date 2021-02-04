<template>
    <div>
        <h3>1. Currency</h3>
        <br>

        <div>
        Qty: <input type="text" class="form-control" v-model="qty"><br>
        Cost: <input type="text" class="form-control" v-model="cost"><br>
        Country: 
            <select class="form-control" v-model="inCurr">
                <option v-for="item in currencies" :key="item">{{item}}</option>
            </select>
        </div>
        <br>

        <div>
            Total: <span>{{qty * cost}}</span>
        </div>

        <div>
            Total: <span v-for="item in currencies" :key="item">{{item}} {{onTotal(item)}} &nbsp; </span>
        </div>
    </div>
</template>

<script>
export default {
   name: 'currency',        // tab name이 아님. 재귀호출 목적으로 정의
   data: function(){        // 변수 정의. 값이 변경되면 화면 변경됨
    return {
        qty: 3,
        cost: 5,
        inCurr: 'USD',
        currencies: ['USD', 'EUR', 'CNY'],
        rate: {
            USD: 1,
            EUR: 1.35,
            CNY: 6.87
        }
    }
   },
   methods: {                    // method 정의
    onTotal: function(outCurr) {
        return (this.qty * this.cost * this.rate[this.inCurr] / this.rate[outCurr]).toFixed(2);
    }
   }
}
</script>

<style scoped>

</style>