
<template>
    <div id="app" class="card-body">
        <h3>5. Event</h3>
        <br>

        Num: {{num}}<br>
        <button v-on:click="num++">+1</button>
        <button @click="decrease">-1</button>
        <button @click.once="decrease">once</button>
        <br>
        <br>
        
        <div id="container" @click="outerEvent">
            <div id="inner" @click="innerOne">ONE</div>
            <div id="inner" @click.stop="innerTwo">TWO</div>
        </div>
        <br>
        <br>

        <div>
            <a href="http://www.daum.net" @click="goDaum">DAUM</a> |
            <a href="http://www.naver.com" @click.prevent="goNaver">NAVER</a> |
        </div>
        <br>

        <input type="text" class="form-control"                         @keyup="keyUpEvent"/><br>
        esc: <input type="text" class="form-control" v-model="name"     @keyup.esc="escEvent"/><br>
        Enter: <input type="text" class="form-control" v-model="msg"    @keyup.enter="helpEvent"/><br>
        <!-- 다른 조합도 적용됨 -->
        Alt + Enter<input type="text" class="form-control" v-model="msg"    @keyup.enter.alt="showEvent"/><br>
        <br>
    
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            num: 0,
            name: 'Guest',
            msg: ''
        }
    },
    methods: {
        decrease: function() {
            this.num--
        },
        outerEvent: function(){
            console.log('Outer')
        },
        innerOne: function(evt) {
            evt.stopPropagation();    // 버블링 단계(상위요소 동일이벤트) 실행 중지
            console.log('Inner One')
        },
        innerTwo: function() {
            console.log('Inner Two')
        },
        goDaum: function(evt) {
            evt.preventDefault();       // JS가 가지고 있는 명령을 취소(실행안함)
            console.log('Daum')
        },
        goNaver: function() {
            console.log('Naver')
        },
        keyUpEvent: function(evt) {
            //console.log(evt);
            if(evt.keyCode === 27) evt.target.value = '';
        },
        escEvent: function() {
            // if(evt.keyCode === 27) this.name = '';
            this.name = '';
        },
        helpEvent: function() {
            alert('10자 이내로 입력해주세요')
        },
        showEvent: function() {
            alert('20자 이내로 입력해주세요')
        },
      },
}
</script>

<style scoped>
    #container { width: 300px; height: 150px; border: 1px solid gray; display: flex; justify-content: center; align-items: center;}
    #inner { width: 100px; height: 100px; background: orange; padding: 10px; margin: 10px; text-align: center; display: flex; justify-content: center; align-items: center;}
</style>