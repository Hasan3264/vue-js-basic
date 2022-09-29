const app1 =new Vue({
  el:"#app",
  data:{
    a:0,
    link:"https://www.facebook.com/profile.php?id=100051748479784",
    name:'',
    fromData:{
        firstnmae:'',
        lastnmae:'',
    },
    a:0,
    b:0,
    Salary:1230,
},
computed:{
    handelform(){
        console.log(this.fromData);
    },
    addToA(){
     return this.a +this.Salary
    },
    addToB(){
     return this.b +this.Salary
    },
    instancevaluchange(){ //access of app2
        app2.data="cha"
    }
}
 
});

const app2 = new Vue({
  el:"#app2",
  data:{
    data: '@nd instance',
},

});

const value =`<h2>this is my name {{name}}</h2>`;
const app3 = new Vue({
    
    data:{
        name: 'Hassan',
    },
    template: value,
});
setTimeout(()=>{
    app3.$mount('#app3')
},2000);  

//component 
Vue.component('hassan',{
    data(){
        return{
            name:'lufi',
        }
        
    },
    template: `<p>{{name}}</p>`
});
new Vue({
   el:"#div4"
});