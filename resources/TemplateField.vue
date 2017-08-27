<template>
    <div class="card">
        <div class="card-content">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <div class="field">
                            <label class="label is-small">Title</label>
                            <div class="control">
                                <input type="text" class="input is-small" v-model="field.title">
                            </div>
                        </div>
                    </div>
                    <div class="level-item">
                         <div class="field">
                            <label class="label is-small">Label</label>
                            <div class="control">
                                <input type="text" class="input is-small" v-model="field.label">
                            </div>
                        </div>
                    </div>
                    <div class="level-item">
                        <div class="field">
                            <label class="label is-small">Type</label>
                            <div class="control">
                                <div class="select is-small">
                                    <select v-model="field.type">
                                        <optgroup label="Basic">
                                            <option value="text">Text</option>
                                            <option value="textarea">Textarea</option>
                                            <option value="number">Number</option>
                                            <option value="email">Email</option>
                                            <option value="url">Url</option>
                                            <option value="password">Password</option>
                                        </optgroup>
                                        <optgroup label="Layout">
                                            <option value="repeater">Repeater</option>
                                            <option value="placeholder">Placeholder</option>
                                            <option value="section">Section</option>
                                        </optgroup>
                                        <!-- <optgroup label="Content">
                                            <option value="tinymce">TinyMCE</option>
                                            <option value="image">Image</option>
                                            <option value="file">File</option>
                                        </optgroup>
                                        <optgroup label="Choice">
                                            <option value="select">Select</option>
                                            <option value="multiselect">Multi select</option>
                                            <option value="checkbox">Checkbox</option>
                                            <option value="radio">Radio</option>
                                            <option value="bool">Bool</option>
                                        </optgroup>
                                        <optgroup label="Component">
                                            <option value="map">Map</option>
                                        </optgroup> -->
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="level-item">
                        <div class="field">
                            <label class="label is-small">&nbsp</label>
                            <div class="control">
                                <button v-on:click="$emit('delete-field')" class="button is-secundary is-small">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div class="card-footer" v-if="field.hasSubFields()" style="flex-flow: column;">
            <div class="column">
                <template-field v-for="(panel, index) in field.panels" :key="index" :field="panel" v-on:delete-field="deleteSubField(index)"></template-field>
            </div>
            <div class="column">
                <button v-on:click="addPanel(field)" class="button is-primary is-small">Add Field</button>
            </div>
       </div>
    </div>
</template>

   
           

<script>
    let Field = require('./field.js');

    export default {
        props: ['field'],

        methods: {
            addPanel: function(repeater){
                repeater.panels.push(new Field);
            },

            deleteSubField: function(index){
                this.field.panels.splice(index, 1);
            },
        },
    }
</script>
<!-- 
 <div class="columns">
            <div class="column">
                
            </div>
            <div class="column">
                
            </div>
            <div class="column">
                 
            </div>
            <div class="column">
                
            </div>
        </div>
        <hr v-if="field.hasSubFields()">
        <div style="padding-left:2rem;" v-if="field.hasSubFields()">
            
        </div> -->