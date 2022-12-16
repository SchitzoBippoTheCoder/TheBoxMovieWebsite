<template>
    <div id="itemInfo">
        <img :src="moviePath" id="itemPoster"/>
    </div>
    <br />
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    title: String,
    poster: String,
})

const movieTitle = ref(props.title);
const moviePath = ref(props.poster);

</script>

<style scoped>
#itemInfo {
    height: 130px;
    position: relative;

    margin-left: 550px;
    margin-bottom: 30px;
}

#itemPoster {
    position: absolute;

    height: 150px;
    width: 100px;

    top: 25px;
    left: 15px;

    box-shadow: -7px 12px 8px black;
}

#itemPoster:hover {
    transform: scale(1.1);
    z-index: 100000;
}

#movieTitle {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bold;

    color: white;

    position: absolute;

    top: 0px;
    left: -100px;

    margin-top: 30px;
    width: 350px;
}
</style>
