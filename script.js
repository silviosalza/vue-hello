//sintassi di vuejs per farlo partire
const {createApp} = Vue;


createApp({
    data(){
        return{
           message: "Silvio Salza", 
           alertmsg: "Bravo bel click",
           color: "",
           img: ""
        }
    },
    methods: {
       alertMsg(){
        const text = `${this.alertmsg}`
        alert(text)
       },
       colorChange(){
        this.color = "green"
       },
       addImg(){
        this.img = "https://img.ifunny.co/images/40abecfe771bec1e97cb7a7f47e320e1435e9f0d0a68f72bd237eb05f8381b45_1.jpg"

       }

    }
}).mount("#app")
