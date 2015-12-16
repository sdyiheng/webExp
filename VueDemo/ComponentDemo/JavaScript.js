var mycomponent = Vue.extend({
template: '<div>test</div>'
});

Vue.component("my-component", mycomponent);

new Vue({
    el:"#example"
})