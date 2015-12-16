new Vue({
    el: "#app",
    data:
        {
            message: "test",
            items: [
                { text: "111" },
                { text: "222" }
            ],
            showHello: false
        },
    methods: {
        clickHandler: function () { alert('clicked.') },
    },
    created: function () { console.log("created"); },
    compiled: function () { console.log("compiled"); },
    ready: function () { console.log("ready"); },
    destroyed: function () { console.log("destroyed"); },
});

var items2 = [
                { text: "111" },
                { text: "222" }
];

var vm = new Vue({
    el: "#app2",
    data:
        {
            message: "test",
            items: items2,
            showHello: false,
            targetURL:"http://cn.engadget.com",
        },
    methods: {
        clickHandler: function () { items2.push({text:vm.message}); },
    }
});