<template>
        <HeaderToLogin title="Welcome to The Box" tagline="What will YOU find today?" button-value="LOGIN"></HeaderToLogin>
        <div id="backgroundImage"></div>
        <h1 id="messageLine1">Want it? Box it!</h1>
        <h3 id="messageLine2">Login to start collecting!</h3>
        <Footer message1="The Box" message2="Copyright © 2022 The Box, Inc." id="footer"></Footer>
</template>

<script setup>
import HeaderToLogin from '../components/HeaderToLogin.vue'
import Footer from '../components/Footer.vue'

import { storeToRefs } from 'pinia';
import { indexStore } from "../store/index.js";
import { ref } from 'vue';
import router from '../router';

const nameInput = ref("");
const classInput = ref("");

const index = indexStore();

const { username } = storeToRefs(index)

</script>

<style>
#backgroundImage {
        position: absolute;

        top: 0px;
        left: 0px;

        z-index: -1;

        height: 100%;
        width: 100%;
        background-image: url('../assets/movieBackground.jpg');
        background-size: cover;

        filter: brightness(25%);
}

#messageLine1 {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);

        text-align: left;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: italic;
        font-weight: bolder;

        font-size: 50px;

        color: white;

        text-shadow: 5px 5px 5px black;
}

#messageLine2 {
        position: absolute;
        top: 50%;
        left: 50%;
        
        transform: translate(-50%, -50%);

        text-align: center;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: italic;
        font-weight: bolder;

        font-size: 23px;

        color: white;

        text-shadow: 5px 5px 5px black;
}

#messageContainer {
        position: absolute;
        left: -50px;
        width: 1000px;
}

#footer{
        position: absolute;

        bottom: 0px;

        margin-bottom: 20px;
}
</style>