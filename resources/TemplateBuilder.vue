<template>
    <div>
        <draggable v-model="sections">
            <section v-for="(section, index) in sections" class="box">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Title</label>
                            <div class="control">
                                <input type="text" class="input is-small" v-model="section.title">
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label is-small">Label</label>
                            <div class="control">
                                <input type="text" class="input is-small" v-model="section.label">
                            </div>
                        </div>
                    </div>
                </div>
                <div style="padding-left:2rem;">
                    <template-field v-for="(panel, panelIndex) in section.panels" :key="panelIndex" :field="panel" v-on:delete-field="deleteField(index, panelIndex)"></template-field>
                </div>
                <div class="control column">
                    <button v-on:click="addPanel(index)" class="button is-primary is-small">Add Panel</button>
                    <button v-on:click="removeSection(index)" class="button is-small">Remove Section</button>
                </div>
            </section>
        </draggable>
        <div class="control column">
            <button v-on:click="addSection" class="button is-primary is-small">Add Section</button>
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
                sections: null,
            };
        },

        watch: {
            'sections': function() {
                // When the internal value changes, we $emit an event. Because this event is 
                // named 'input', v-model will automatically update the parent value
                this.$emit('input', this.sections);
            }
        },
        
        created: function() {
            // We initially sync the internalValue with the value passed in by the parent
            this.sections = this.value;
        },

        methods: {
            addSection: function(){
                this.sections.push({
                    title:null,
                    label: null,
                    panels:[],
                });
            },

            addPanel: function(index){
                this.sections[index].panels.push(new Field);
            },

            deleteField(sectionKey, fieldKey){
                this.sections[sectionKey].panels.splice(fieldKey, 1);
            },

            removeSection: function(index){
                this.sections.splice(index, 1);
            },
        },

        components: {
            draggable,
        },
    }
</script>

