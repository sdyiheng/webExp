$(function () {
    alert(' loaded');

    var User = Backbone.Model.extend({
        idAttribute:"_id",
        initialize: function (name, _id) {
            this.set('name', name || 'noName');
            this.set('_id', _id || 0);
        }
    });

    var Users = Backbone.Collection.extend({ model: User });
    var users = new Users();


    users.add(new User('xcd', 1));
    users.add(new User('xcd2', 2));

    var u = users.at(0);
    u = users.get(1);
    u = users.get(2);

    alert(u.get('_id'));

});