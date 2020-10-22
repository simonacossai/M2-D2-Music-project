let button= document.querySelector(".toggle");
let button1 = document.querySelector(".toggle1");

let container = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
const toggle=()=>{
         if(container.classList.value!=="hide"){
             container.classList.add("hide");
            }else{
             container.classList.remove("hide");
         }
}

const toggle2=()=>{
    if(container2.classList.value!=="hide"){
        container2.classList.add("hide");
       }else{
        container2.classList.remove("hide");
    }
}

window.onload= function (){
    let albums=document.createElement="h4";
    let albumArray=[];
    albumArray= document.querySelectorAll(".album-cover");
    albums = albumArray.length;
    console.log(albums);
    let about = document.querySelector(".songs");
    about.innerHTML=albums+" album covers in this web page";
   }

   let links = document.querySelectorAll(".breadcrumb-item a");
   let active = document.querySelector('.active');
   for(let i=0; i<links.length; i++){
    links[i].addEventListener("click", function(event){
        active.classList.remove("active");
        links[i].classList.add("active");
    }
    )}



    function SomeDeleteRowFunction() {
        // event.target will be the input element.
        var td = event.target.parentNode; 
        var tr = td.parentNode; // the row to be removed
        tr.parentNode.removeChild(tr);
  }