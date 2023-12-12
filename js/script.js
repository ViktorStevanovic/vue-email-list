const { createApp } = Vue;

createApp({
    data() {
        return {
            emailArr: [],
        }
    },

    methods: {
        getNewMail(){
            for (let index = 0; index < 10; index++) {             
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                    (response) =>{
                    this.emailArr.push(response.data.response);
                });              
            }
            console.log(this.emailArr);            
        }
    },

    mounted() {
        this.getNewMail();
    },
}).mount('#app');