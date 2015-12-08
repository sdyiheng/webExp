
$(function () {
    var User = Backbone.Model.extend({
        name: 'xcd'
    });

    var ouser = new User();
    alert(ouser.name);

    var User2 = Backbone.Model.extend({
        initialize: function (name) {
            this.set({ name: name });
        }
    });
    var user = new User2('刀狂剑痴');
    alert(user.get('name'));

    user.set({ name: 'ddd' });
    alert(user.get('name'));

})
//  windows.alert('test');