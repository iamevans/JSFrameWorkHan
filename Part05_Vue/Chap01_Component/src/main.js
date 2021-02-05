import { createApp } from 'vue'
import App from './App.vue'
import CustomPlugIn from './common/custom.plugin';

const app = createApp(App)

// custom directive
app.directive('bgColor', {
    beforeMount(elem, bind) {
        // console.log(elem);
        // console.log(bind);
        elem.style.backgroundColor = bind.value;
    }
});

app.use(CustomPlugIn, {name: 'NolBu'})

app.mount('#app')
