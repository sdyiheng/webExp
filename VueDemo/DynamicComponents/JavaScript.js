var mycomponent = Vue.extend({ template: "<div>test</div>" });
var mycomponent2 = Vue.extend({ template: "<div>test2</div>" });

var vm = new Vue({
    el: "body",
    data: { currentView: 'home' },
    components: {
        home: mycomponent,
        test2:mycomponent2
    }
});

var changeComponent = function () { vm.currentView = 'test2';};

$(function () {

    setTimeout(changeComponent, 5000);

});

