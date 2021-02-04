<template>
    <div class="card-body">
        <h3>{{title}}</h3>
        <br>

        <div>
            v-text: <span v-text="text"></span><br>
            v-html: <span v-html="text"></span><br>
            v-once: <span v-once>{{text}}</span><br>    <!-- 한번 바인딩 후 값 변경 안함 -->
            v-pre: <span v-pre>{{pre}}</span><br>       <!-- {{}} 바인딩 식이아닌 텍스트로 인식 -->
            <br>
            <button v-on:click="changeText('NolBu')">Change</button>
            <button @click="changeText('<b>HungBu</b>')">Change</button>
            <br>
            <br>
            
            Num: {{num}}<br>
            <input type="text" class="form-control"         v-model="num">
            <input type="text" v-bind:class="formControl"   v-model="num"><!-- 지정 값은 변수명 -->
            <input type="text" :class="formControl"         v-model="num"><!-- :는 v-bind의 단축 -->
            <br>
            
            <input type="checkbox" value="apple"    v-model="fruit">사과, 
            <input type="checkbox" value="banana"   v-model="fruit">바나나, 
            <input type="checkbox" value="melon"    v-model="fruit">멜론<br>
            
            <div>{{fruit}}</div>
            <div><span v-for="(item, i) in fruit" :key="item">{{item}}{{i !== fruit.length-1 ? ', ' : ''}}</span></div>
        <br>

        computed: {{one}} / {{two()}}<br>
        <br>
      
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '2. Binding',
            text: '<b>Hello World</b>',
            num: 10,
            formControl: 'form-control',
            fruit: []
        }
    },
    methods: {
        changeText: function(value) {
            this.text = value;
        },
        two: function() {       // data에 있는 어떤 변수라도 변경되면 다시 실행된다
            console.log('methods');
            let total = 0;
            let x = Number(this.num);
            if(isNaN(x)) total = 0;
            for(let i = 0; i <= x; i++) {
                total += i;
            }
            return total;
        }
    },
    computed: {                 // 계산된 변수. this로 사용한 변수가 변경될때만 실행
        one: function() {
            console.log('computed');
            let total = 0;
            let x = Number(this.num);       // 이 변수가 변경되야 one이 실행된다
            if(isNaN(x)) total = 0;
            for(let i = 0; i <= x; i++) {
                total += i;
            }
            return total;
        }
    }
}
</script>

<style scoped>

</style>