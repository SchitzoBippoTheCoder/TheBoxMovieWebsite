import { defineStore } from 'pinia';

export const indexStore = defineStore("main", {
    state: () => ({
        movieItems: [],
        resultOptions: [],
        createdDiscoveryList: false,
    }),
    getters: {

    },
    actions: {
        addMovieItem(movieObject){
            this.movieItems.push(movieObject);
            
        },

        removeMovieItem(arraySlot){
            this.movieItems.splice(arraySlot, 1)
        },

        addResultOption(id){
            this.resultOptions.push({id});
        },

        finishList() {
            this.createdDiscoveryList = true;
        }
    }
})

// Methods can also be async
// Learn getters - modify state variables without actually changing them 
