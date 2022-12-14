<template>
    <div id="itemInfo">
        <img :src="moviePath" id="itemPoster"/>
        <h2 id="movieTitle">{{ movieTitle }}</h2>
    </div>
    <br />
</template>

<script setup>
import { ref } from "vue"
import axios from "axios";
import MovieOption from "../components/MovieOption.vue";

const props = defineProps({
    id: String,
})

const movieID = ref(props.id);

const movieTitle = ref("");
const moviePath = ref("");

let search = axios.get(`https://api.themoviedb.org/3/movie/${props.id}`, {
    params: {
        api_key: "e06cb446302dcf3a3cb1358720141aad",
        append_to_response: "videos",
    }
})

let searchResult = search.then((movieData) => {
    movieTitle.value = movieData.data.original_title;
    moviePath.value = "https://image.tmdb.org/t/p/w500/" + movieData.data.poster_path
})


</script>

<style scoped>
#itemInfo {
    height: 130px;
    position: relative;

    margin-left: 200px;
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
