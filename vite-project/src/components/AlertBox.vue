<template>
    <div id="messageContainer">
        <p>{{ message }}</p>
    </div>
</template>

<script setup>
defineProps({
    message: String,
});

</script>

<style>
html,
body {
    padding: 0;
    margin: 0;
}

</style>