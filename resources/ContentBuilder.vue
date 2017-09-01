<template>
    <div>
        <content-field v-for="(field, key) in template" :key="key" :field="field" style="margin-bottom:40px"></content-field>
    </div>
</template>

<script>
    export default {
        props: ['template'],
    }
</script>