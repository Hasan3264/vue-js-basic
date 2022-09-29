new Vue({
    el: "#app", //access by id from html
    data: { //passing data to html
      title: "This is title",
      title2: "This is title2",
      Voll:234.789,
      //dirrective send
      src: "https://picsum.photos/id/237/200/300",
      alt:"This",
      mytext:"hello my",
      myhtml:"<strong>hi i'm strong</strong>",
      //dirrective send
      array: ['car', 'girl','home'],
      obj:{
        name:"hassan"
      },
     //lopop
       cars: ['car', 'girl','home'],
       hassan:{
         name:"hassan",
         age:"21",
         height:"7",

       },
      //condition 
      user:"hassan",
      userage:"128",
      allowed:"18",
      name:"hassan",

      //event 
      x:0,
      y:0,
    },
    methods:{
        grating (){
                 return this.title2;
              },
              changeUser(){
               return this.user=="hassan"? true :false;
            },
            update(){
                   setTimeout(()=>{
                       this.name="husssen"
                   },2000);

                   
            },
            updatename(name,event){
              this.title=name;       //argument  and modifier    
              console.log(event);
            },
            getCord(event){
              this.x=event.clientX;
              this.y=event.clientY;
            },
            handelform(){
              console.log()
            }
    },


   //  //dirrectives code
         
   

});
