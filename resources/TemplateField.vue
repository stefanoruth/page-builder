<template>
    <div>
        <div class="columns">
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
                                <option value="text">text</option>
                                <option value="textarea">textarea</option>
                                <option value="repeater">repeater</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="padding-left:2rem;" v-if="field.type == 'repeater'">
            <template-field v-for="(panel, index) in field.panels" :key="index" :field="panel"></template-field>
            <div class="column" style="padding-left: 0px">
                <button v-on:click="addPanel(field)" class="button is-primary is-small">Add Panel</button>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['field'],

        methods: {
            addPanel: function(repeater){
                repeater.panels.push({
                    label:null,
                    type:null,
                    panels:[],
                });
            },
        },
    }
</script>