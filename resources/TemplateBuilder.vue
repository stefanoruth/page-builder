<template>
    <div>
        <template-section v-for="(section, index) in sections" :key="index" :section="section" :index="index"></template-section>
        <div class="control">
            <button v-on:click="addSection" class="button is-primary is-small">Add Section</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['sections'],

        methods: {
            addSection: function(){
                this.sections.push({
                    title:null,
                    label: null,
                    panels:[],
                });
            },

            addPanel: function(index){
                this.sections[index].panels.push('der');
            }
        }
    }
</script>

