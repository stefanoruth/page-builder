<template>
    <div>
        <section>
            <template-field v-for="(field, key) in fields" :key="key" :field="field" v-on:delete-field="deleteField(key)"></template-field>
        </section>
        <div class="control column">
            <button v-on:click="addField" class="button is-primary is-small">Add Field</button>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    let Field = require('./field.js');

    export default {
        props: ['value'],

        data() {
            return {
                fields: [],
            };
        },

        watch: {
            'fields': function() {
                // When the internal value changes, we $emit an event. Because this event is 
                // named 'input', v-model will automatically update the parent value
                this.$emit('input', this.fields);
            }
        },
        
        created: function() {
            // We initially sync the internalValue with the value passed in by the parent
            this.fields = this.value;
        },

        methods: {
            addField: function(){
                this.fields.push(new Field);
            },

            deleteField(fieldKey){
                this.fields.splice(fieldKey, 1);
            },
        },

        components: {
            draggable,
        },
    }
</script>

