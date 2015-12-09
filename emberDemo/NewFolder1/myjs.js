$(function () {
    //创建实例
    App = Ember.Application.create({
        LOG_TRANSITIONS: true
    });


    App.ApplicationView = Ember.View.extend({
        templateName: 'application1'
    });



    //App.Router.map(function () {

    //    this.resource("home", { path: "/" });

    //    this.resource("employee", { path: "/employee/:employee_id" });

    //});



    //App.HomeRoute = Ember.Route.extend({

    //    model: function () {

    //        return App.Employee.find();

    //    },

    //    setupController: function (controller, model) {

    //        controller.set('content', model);

    //    }

    //});



    //App.Store = DS.Store.extend({

    //    revision: 12,

    //    adapter: 'DS.FixtureAdapter'



    //});



    App.Employee = DS.Model.extend({

        name: DS.attr('string'),

        department: DS.attr('string'),

        title: DS.attr('string')

    });

    //App.Employee.FIXTURES = [

    //{

    //    id: 1,

    //    name: 'Jackson Huang',

    //    department: 'IT',

    //    title: 'programmer'

    //},

    //{

    //    id: 2,

    //    name: 'Ada Chen',

    //    department: 'purchasing',

    //    title: 'buyer'

    //},

    //{

    //    id: 3,

    //    name: 'JK Rush',

    //    department: 'IT',

    //    title: 'programmer'

    //},

    //{

    //    id: 4,

    //    name: 'Lucy Liu',

    //    department: 'IT',

    //    title: 'tester'

    //}

    //];
});

