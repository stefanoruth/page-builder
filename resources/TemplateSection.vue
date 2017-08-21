<template>
    <section>
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
            <template-field v-for="(panel, panelIndex) in section.panels" :key="panelIndex" :field="panel"></template-field>
            <hr>
        </div>
        <div class="control">
            <button v-on:click="addPanel" class="button is-primary is-small">Add Panel</button>
        </div>
        <hr>
    </section>
</template>

<script>
    export default {
        props: ['section', 'index'],

        methods: {
            addPanel: function(){
                this.section.panels.push({
                    label:null,
                    type:null,
                    panels:[],
                });
            }
        }
    }
</script>