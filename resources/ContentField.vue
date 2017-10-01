<template>
    <div v-if="isSimple(field.type)" class="field">
        <label class="label">{{ field.title }}</label>
        <div class="control">
            <input v-if="field.type == 'text'" :name="field.label" type="text" class="input">
            <textarea v-else-if="field.type == 'textarea'" :name="field.label" class="textarea"></textarea>
            <div v-else-if="field.type == 'select'" class="select">
                <select :name="field.label">
                    <option v-for="i in 10" :value="i">i</option>
                </select>
            </div>
            <div v-else-if="field.type == 'multiselect'" class="select is-multiple">
                <select multiple size="8">
                    <option v-for="i in 10" :value="i">Option: {{ i }}</option>
                </select>
            </div>
            <div v-else-if="field.type == 'image' || field.type == 'file'" class="file has-name is-fullwidth">
                <label class="file-label">
                    <input class="file-input" type="file" v-on:change="fileUploaded">
                    <span class="file-cta">
                        <span class="file-label">Choose a file…</span>
                    </span>
                    <span class="file-name">{{ inputValue }}</span>
                </label>
            </div>
            <div v-else>Forgot to support that field "{{ field.type }} xD"</div>
        </div>
    </div>

    <div v-else-if="hasSubFields(field.type)" class="card">
        <div class="card-header">
            <div class="card-header-title">{{ field.title }}</div>
        </div>
        <div class="card-content">
            <div v-for="i in field.numFields">
                <content-field v-for="(subField, subKey) in field.fields" :key="subKey" :field="subField"></content-field>
                <hr v-if="field.numFields != i">
            </div>
        </div>
        <div class="card-footer" v-if="field.type == 'repeater'">
            <div class="card-footer-item">
                <button class="button" @click="addField">Add</button>
            </div>
        </div>
    </div>
            
    <div v-else>
        <p>Forgot to support that field "{{ field.type }}" xD</p>
    </div>
</template>

<script>
    export default {
        props: ['field'],
        data() {
            return {
                inputValue: null,
            }
        },

        methods: {
            isSimple: function(type) {
                return ['section', 'repeater'].indexOf(type) == -1;
            },

            hasSubFields: function(type) {
                return ['section','repeater'].indexOf(type) > -1;
            },
            fileUploaded: function(event) {
                this.inputValue = event.srcElement.files[0].name;
            },
            addField: function() {
                this.field.numFields++;
            },
        }
    }
</script>