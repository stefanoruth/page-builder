window.Vue = require('vue');
window._ = require('lodash');

Vue.component('template-field', require('./TemplateField'));
Vue.component('template-builder', require('./TemplateBuilder'));
Vue.component('template-section', require('./TemplateSection'));
Vue.filter('pretty', function(value) {
    return JSON.stringify(value, null, 2);
});

window.myApp = new Vue({
    el: '#root',
    data: {
        'pageTemplate': [],
    },
});