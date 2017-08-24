window.Vue = require('vue');
window._ = require('lodash');

Vue.component('template-field', require('./TemplateField'));
Vue.component('template-builder', require('./TemplateBuilder'));
Vue.filter('pretty', function(value) {
    return JSON.stringify(value, null, 2);
});

window.myApp = new Vue({
    el: '#root',
    data: {
        'pageTemplate': [],
    },

    methods: {
        exampleData() {
            this.pageTemplate.length = 0;
            this.pageTemplate.push({
                "title": "Header",
                "label": "header",
                "panels": []
              });

            this.pageTemplate.push({
                "title": "Content",
                "label": "content",
                "panels": [
                  {
                    "title": "Post",
                    "label": "post",
                    "type": "repeater",
                    "panels": [
                      {
                        "title": "Title",
                        "label": "title",
                        "type": "text",
                        "min": 0,
                        "max": null,
                        "panels": []
                      },
                      {
                        "title": "Ulr",
                        "label": "slug",
                        "type": "url",
                        "min": 0,
                        "max": null,
                        "panels": []
                      },
                      {
                        "title": "Body",
                        "label": "body",
                        "type": "tinymce",
                        "min": 0,
                        "max": null,
                        "panels": []
                      }
                    ],
                    "min": "0",
                    "max": null,
                  }
                ]
              });
        }
    }
});