<template>
    <HeaderToShop title="Checkout" tagline="Thank you for shopping with us!" button-value="STORE"></HeaderToShop>
    <div id="backgroundImage">

    </div>
    <div id="itemContainer">
        <div id="blurItemBackground"></div>
        <ItemContainer v-for="option in finalMovieOptions" :title="option.title" :poster="option.poster"></ItemContainer>
    </div>
    <div id="paymentContainer">
        <h2 id="checkoutTitle">SUMMARY</h2>
        <hr id="line"/>
        <h3 id="checkoutHeader">Order Details</h3>
        <p class="checkoutContent">{{ finalMovieLength }} total items</p>
        <ul>
            <li class="checkoutContent">Check your list of movies before purchasing!</li>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <p id="checkoutArgeement">By completing this purchse, you agree to The Box's Terms and Conditions</p>
        <input type="button" :value="finalButtonValue" id="checkoutButton"/>
    </div>
</template>

<script setup>
import HeaderToShop from "../components/HeaderToShop.vue"
import ItemContainer from "../components/ItemContainer.vue"

import { indexStore } from "../store/index.js"
import { storeToRefs } from 'pinia';


const index = indexStore();
const { movieItems } = storeToRefs(index);

let finalMovieOptions = movieItems.value;
let finalMovieLength = movieItems.value.length;
let finalButtonValue = "PURCHASE -- $" + finalMovieLength;

</script>

<style scoped>
#backgroundImage {
    position: fixed;

    top: 0px;
    left: 0px;

    z-index: -1000000;

    height: 100vh;
    width: 100%;
    background-image: url('../assets/movieBackground.jpg');
    background-size: cover;

    filter: brightness(35%);
}

#itemContainer {

    position: relative;

    margin-top: 20px;
    margin-bottom: 30px;

    z-index: 100000;

    overflow-y: scroll;
    overflow-x: hidden;
    
    top: 15px;

    height: 485px;
}

#itemContainer::-webkit-scrollbar {
    display: none;
}

#checkoutTitle {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;

    margin-top: 30px;
    margin-left: 35px;
}

#checkoutHeader {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: bold;

    margin-top: 30px;
    margin-left: 35px;
}

.checkoutContent {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;

    margin-top: 0px;
    margin-left: 35px;

    width: 250px;
}

#checkoutArgeement {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;

    margin-top: 0px;
    margin-left: 35px;

    width: 300px;
}

#paymentContainer {

    position: fixed;

    top: 125px;
    right: 240px;

    background-color: whitesmoke;

    height: 450px;
    width: 375px;


    box-shadow: -5px 10px 5px black;

    z-index: 99999999;

    border-radius: 10px;
}

#line {
    width: 87%;
}

#checkoutButton{
    outline: transparent;
    border-color: transparent;

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-style: normal;
    font-weight: normal;

    vertical-align: middle;
    text-align: center;

    background-color: white;
    color: black;

    height: 25px;
    width: 200px;

    letter-spacing: 1px;

    margin-top: 0px;
    margin-left: 35px;

    border-style: solid;
    border-color: black;
}

#checkoutButton:hover{
    border-style: solid;

    color: white;
    background-color: black;
    border-color: black;
    border-width: 2px;
}

#blurItemBackground {
    position: fixed;

    height: 512px;
    width: 100vw;

    background-color: black;
    opacity: 0.7;

    margin-top: 100px;

    top: 0px;
}
</style>