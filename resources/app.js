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
    "title": "Page title",
    "label": "page-title",
    "type": "text",
    "panels": []
  },
  {
    "title": "Produkt Sektion",
    "label": "product-section",
    "type": "section",
    "panels": [
      {
        "title": "Title",
        "label": "title",
        "type": "text",
        "panels": []
      },
      {
        "title": "Produkter",
        "label": "products",
        "type": "repeater",
        "panels": [
          {
            "title": "Navn",
            "label": "name",
            "type": "text",
            "panels": []
          },
          {
            "title": "Description",
            "label": "description",
            "type": "textarea",
            "panels": []
          },
          {
            "title": "Billede",
            "label": "image",
            "type": "image",
            "panels": []
          },
          {
            "title": "Kategorier",
            "label": "categories",
            "type": "multiselect",
            "panels": []
          }
        ]
      }
    ]
  },
  {
    "title": "Projects",
    "label": "projects",
    "type": "section",
    "panels": [
      {
        "title": "Title",
        "label": "title",
        "type": "text",
        "panels": []
      },
      {
        "title": "Projects",
        "label": "items",
        "type": "repeater",
        "panels": [
          {
            "title": "Title",
            "label": "title",
            "type": "text",
            "panels": []
          },
          {
            "title": "Main Image",
            "label": "image",
            "type": "image",
            "panels": []
          },
          {
            "title": "Body",
            "label": "description",
            "type": "tinymce",
            "panels": []
          },
          {
            "title": "Download files",
            "label": "files",
            "type": "repeater",
            "panels": [
              {
                "title": "Title",
                "label": "title",
                "type": "text",
                "panels": []
              },
              {
                "title": "File",
                "label": "file",
                "type": "file",
                "panels": []
              }
            ]
          }
        ]
      }
    ]
  }
],
    },

    methods: {
        showPage: function(page) {
            this.page = page;
        }
    }
});