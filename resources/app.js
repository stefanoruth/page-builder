window.Vue = require('vue');
window._ = require('lodash');

Vue.component('template-field', require('./TemplateField'));
Vue.component('template-builder', require('./TemplateBuilder'));
Vue.component('content-builder', require('./ContentBuilder'));
Vue.component('content-field', require('./ContentField'));
Vue.filter('pretty', function(value) {
    return JSON.stringify(value, null, 2);
});



window.myApp = new Vue({
    el: '#root',
    data: {
        'page': 'content',
        'pageTemplate': [
  {
    "title": "Posts",
    "label": null,
    "type": "repeater",
    "fields": [
      {
        "title": "Title",
        "label": null,
        "type": "text",
        "fields": [],
        "numFields": 1,
        "min": 0,
        "max": null
      },
      {
        "title": "Body",
        "label": null,
        "type": "textarea",
        "fields": [],
        "numFields": 1,
        "min": 0,
        "max": null
      }
    ],
    "numFields": 1,
    "min": 0,
    "max": null
  }
],
    },

    methods: {
        showPage: function(page) {
            this.page = page;
        }
    }
});