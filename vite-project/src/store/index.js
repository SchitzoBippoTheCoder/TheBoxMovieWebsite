import { defineStore } from 'pinia';

export const indexStore = defineStore("main", {
    state: () => ({
        movieItems: [],
        resultOptions: [],
    }),
    getters: {

    },
    actions: {
        addMovieItem(movieID){
            this.movieItems.push(movieID);
            
        },

        removeMovieItem(arraySlot){
            this.movieItems.splice(arraySlot, 1)
        },

        addResultOption(id){
            this.resultOptions.push({id});
        }
    }
})

// Methods can also be async
// Learn getters - modify state variables without actually changing them 
