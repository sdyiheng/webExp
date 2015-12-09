
$(function () {
    var User = Backbone.Model.extend({
        name: 'xcd'
    }, {age:100});

    var ouser = new User();
    alert(ouser.name);//xcd
    alert(ouser.age);//undefined
    alert(User.age);//100

    var User2 = Backbone.Model.extend({
        defaults:{name:'defaultName'},
        initialize: function (name) {
            if (name)
                this.set({ name: name });

            this.on('changed', function (model) { alert('name changed to:'+model.name); })
        }
    });
    var user = new User2('刀狂剑痴');
    _.extend(user, Backbone.Events);
    user.on('e', function (msg) { alert(msg); });
    user.bind('change:name', function () { alert('name changed.'); })
    alert(user.get('name'));

    user.set({ name: 'ddd' });
    alert(user.get('name'));

    var du = new User2;
    alert(du.get('name'));

    du.set('name', 'dddsssss');
    alert(du.get('name'));
    alert(du.changed.name);

    user.trigger('e','a event sample.');
})
//  windows.alert('test');