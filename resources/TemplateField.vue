<template>
    <div class="box">
        <div class="columns">
            <div class="column">
                <div class="field">
                    <label class="label is-small">Title</label>
                    <div class="control">
                        <input type="text" class="input is-small" v-model="field.title">
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="field">
                    <label class="label is-small">Label</label>
                    <div class="control">
                        <input type="text" class="input is-small" v-model="field.label">
                    </div>
                </div>
            </div>
            <div class="column">
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
                                <optgroup label="Content">
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
                                </optgroup>
                                <optgroup label="Layout">
                                    <option value="repeater">Repeater</option>
                                    <option value="placeholder">Placeholder</option>
                                </optgroup>
                                
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column" v-if="field.type == 'repeater'">
                <div class="field">
                    <label class="label is-small">Min</label>
                    <div class="control">
                        <input type="number" class="input is-small" min="0" v-model="field.min">
                    </div>
                </div>
            </div>
            <div class="column" v-if="field.type == 'repeater'">
                <div class="field">
                    <label class="label is-small">Max</label>
                    <div class="control">
                        <input type="number" class="input is-small" min="1" v-model="field.max">
                    </div>
                </div>
            </div>
            <div class="column">
                <button v-on:click="$emit('delete-field')" class="button is-secundary is-small">Remove</button>
            </div>
        </div>
        <hr v-if="field.type == 'repeater'">
        <div style="padding-left:2rem;" v-if="field.type == 'repeater'">
                 <template-field v-for="(panel, index) in field.panels" :key="index" :field="panel" v-on:delete-field="deleteSubField(index)"></template-field>
            <div class="column" style="padding-left: 0px">
                <button v-on:click="addPanel(field)" class="button is-primary is-small">Add Panel</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['field'],

        methods: {
            addPanel: function(repeater){
                repeater.panels.push({
                    title:null,
                    label:null,
                    type:null,
                    min:0,
                    max:null,
                    panels:[],
                });
            },

            deleteSubField: function(index){
                this.field.panels.splice(index, 1);
            },
        },
    }
</script>