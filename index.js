/*
<!--
Most of the times, even the most expert of designers needs inspiration.
Spend 30 minutes surfing the web and searching for the way of rapresenting album that you like the most.
Could be the Amazon way, the Spotify or Apple music way or some other blog out there.
-->


    <!-- IMPORT ALL THE BOOTSTRAP RELATED CSS & SCRIPTS-->

    <style>
       EXERCISE 1
            For all Albums we'd like to have a consistent style.
            Create a class for:
            - The album container
            - The album cover
            - The album title
            - The album group / singer / dj
            - The album genre
            - The album duration
            - etc
         
    </style>
  </head>
  <body>
    <!-- EXERCISE 2 
            Implement a navigation bar using the bootstrap component
            This navigation bar must be linked to every section in your page
        -->

    <!-- EXERCISE 3
            Create a responsive section for your favourite albums.
            In this section you should have:
            - 4 albums per row when the screen is very large
            - 3 albums per row when you are on a tablet (or a smaller window)
            - 2 albums per row when you are on a small screen
        -->

    <!-- EXERCISE 4
            Create a section for the album review.
            Pick one of your fav albums, and create a section with:
            - Cover
            - Title
            - Band
            - Lenght
            - Genre
            - Tracklist
            - ... And whatever you think it's interesting about it!
        -->

    <!-- EXERCISE 5
            Worst album list! Find out the music you don't really like or you find overrated and list it
            in this "hall of shame" chart!
        -->

    <!-- EXERCISE 6
            Do you have any musician / band you admire or you are fan of?
            This section is dedicated to him / her / them!
            Feel free to experiment in this part of the page.
        -->

    <!-- EXERCISE 7
            Just covers!
            Create a tapestry of album pictures. Every album picture must be "square" (use CSS to do that).
            Put at least 20 covers (also repeated) to have a nice effect and see how Bootstrap handles it.
        -->

    <!-- EXERCISE 8
            Implement a footer with some information / social links
        -->

    <!-- EXTRA:
         EXERCISE 9
            Create album details that are going to be toggled on and off by clicking on the album image
        -->

    <!-- EXERCISE 10
            Add a button to each section. By clicking on it the section body appears (if hidden) or disappears (if visible)
        -->

    <!--
            EXERCISE 11
            Add in the footer a field that counts, on page load, how many ALBUMS are on the page 
        -->
*/

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