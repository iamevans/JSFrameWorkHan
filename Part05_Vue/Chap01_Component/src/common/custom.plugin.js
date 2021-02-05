// custom.plugin.js

export default {
    install(app, options) {
        console.log(app);
        console.log(options);

        app.config.globalProperties.num = 100;

        app.directive('color', {
            beforeMount(elem, bind) {
                elem.style.color = bind.value;
            }
        });
    }
}