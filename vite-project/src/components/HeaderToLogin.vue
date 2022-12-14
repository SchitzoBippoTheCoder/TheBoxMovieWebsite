<template>
    <div id="headerContainer">
        <img src="../assets/TheBoxLogo.png">
        <h1 id="title">{{ title }}</h1>
        <p id="tagline">{{ tagline }}</p>
        <input id="submitButton" type="button" :value="buttonValue" @click="pushToLogin()">
    </div>
    <div>

    </div>
</template>

<script setup>
import router from "../router";

defineProps({
    title: String,
    tagline: String,
    buttonValue: String
});

function pushToLogin() {
    router.push('/login');
}

</script>

<style>
html,
body {
    margin: 0px;
    padding: 0px;


}

#headerContainer {
    height: 50px;
    width: 100%;

    background-color: transparent;

    /*margin-left: 5px;*/
    padding-top: 20px;
    padding-bottom: 5px;
}

#title {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bolder;

    color: white;

    margin-left: 115px;

    display: inline;

    text-shadow: 1px 1px 5px black;

}

#tagline {
    display: inline;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: italic;
    font-weight: bold;

    font-size: medium;

    color: white;

    margin-left: 20px;

    text-shadow: 1px 1px 5px black;
}

#submitButton {
    position: absolute;

    top: 30px;
    right: 2%;

    outline: transparent;
    border-color: transparent;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;

    background-color: black;
    color: white;

    height: 25px;
    width: 100px;

    letter-spacing: 2px;
}

#submitButton:hover{
    border-style: solid;
    border-color: white;
    border-width: 2px;
}

img {
    position: absolute;

    margin-left: 20px;

    height: 50px;
    width: 78.3850931677px;
}

</style>