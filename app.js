"use strict";

//--------------------------------------- global var arry for the object
let allPhoto = [];
// --------------------------  global var array for the name , shown , votes
let productName = [];
let productShown = [];
let productVotes = [];

//------------------------------------ global var for conter


let userCont = 0;//let contForImag=0;
let MaxCont = 25;

// - -----------  -         --      getting element Globaly

let divContiner = document.getElementById("images-div");
let LeftElement = document.getElementById("left-image");
let CenterElement = document.getElementById("Center-image");
let RightElement = document.getElementById("Right-image");

//   ------------------------------------  global for the index

let leftImage;
let CenterImage;
let RightImage;
let round1 = [];

//   ------------------------------- constractor function for the mall----------------------------

function mallImg(name, path) {
  this.name = name;
  this.path = path;
  this.imgshown = 0; //initail value
  this.votes = 0; //initail value

  allPhoto.push(this);
  productName.push(this.name);
   
  
}

new mallImg("bag", "images/bag.jpg");
new mallImg("banana", "images/banana.jpg");
new mallImg("bathroom", "images/bathroom.jpg");
new mallImg("boots", "images/boots.jpg");
new mallImg("breakfast", "images/breakfast.jpg");
new mallImg("bubblegum", "images/bubblegum.jpg");
new mallImg("chair", "images/chair.jpg");
new mallImg("cthulhu", "images/cthulhu.jpg");
new mallImg("dog-duck", "images/dog-duck.jpg");
new mallImg("dragon", "images/dragon.jpg");
new mallImg("pen", "images/pen.jpg");
new mallImg("pet-sweep", "images/pet-sweep.jpg");
new mallImg("scissors", "images/scissors.jpg");
new mallImg("sweep", "images/sweep.png");
new mallImg("shark", "images/shark.jpg");
new mallImg("tauntaun", "images/tauntaun.jpg");
new mallImg("unicorn", "images/unicorn.jpg");
new mallImg("water-can", "images/water-can.jpg");
new mallImg("wine-glass", "images/wine-glass.jpg");

// console.log(allPhoto); // to show the result and check the error


function RandomeleIndex() {
    return Math.floor(Math.random() * allPhoto.length);
  }
  


let form =document.getElementById('form-conter');

form.addEventListener('submit',action);
 function action (event){
    
     event.preventDefault();
     
     let InputMaxCont =event.target.MaxCont.value
     console.log(InputMaxCont);
     if(!InputMaxCont){
         MaxCont=25
     }else{ MaxCont=InputMaxCont ; }

     let parg =document.createElement('p');
     form.appendChild(parg);
     parg.textContent=`your value was saved and its equal ${InputMaxCont}`

     document.getElementById('form-conter').reset();
     
    
    
 }
 // ----------------------------------  setting the item ---------
 function setItems (){
  //  localStorage.setItem('photo',allPhoto);
  //  console.log(localStorage.setItem('photo',allPhoto));
   let storeData = JSON.stringify(allPhoto);
   localStorage.setItem('photo',storeData);

 }

 // -------------------------------- getting the item ------------
 function getItems (){
   let stringObject =localStorage.getItem('photo');
   let objectSt =JSON.parse(stringObject);
   if(objectSt!==null){
    allPhoto=objectSt;
   }
  
   RenderThreeImage()

 }
 getItems ();

// --------------------------------------rander mall image-----------------


leftImage = RandomeleIndex();
CenterImage = RandomeleIndex();
RightImage = RandomeleIndex();


function RenderThreeImage() {
  
  while (
    leftImage === RightImage ||
    leftImage === CenterImage ||
    CenterImage === RightImage ||
    round1.includes(leftImage)||
    round1.includes(CenterImage)|| 
    round1.includes(RightImage)
  ) {
    leftImage = RandomeleIndex();
    CenterImage = RandomeleIndex();
    RightImage = RandomeleIndex();
  }
  

  
  

  console.log(round1)
  round1=[];
  round1.push(leftImage,CenterImage,RightImage)
  
  // -----------------------------  give it source attripute

  LeftElement.src = allPhoto[leftImage].path;
  allPhoto[leftImage].imgshown++;
 

  CenterElement.src = allPhoto[CenterImage].path;
  allPhoto[CenterImage].imgshown++;
  

  RightElement.src = allPhoto[RightImage].path;
  allPhoto[RightImage].imgshown++;
  
} 


// RenderThreeImage();





// -----------------------   for the event --------------
// event listener
divContiner.addEventListener("click", clicker);

function clicker(event) {
 
  if (userCont < MaxCont ) {
    if (event.target.id === "left-image") {
      allPhoto[leftImage].votes++;

    } else if (event.target.id === "Center-image") {
      allPhoto[CenterImage].votes++;
    } else {
      allPhoto[RightImage].votes++;
    }
    userCont++;
    
    RenderThreeImage();

    
    
  } else {
    
    divContiner.removeEventListener("click", clicker);
    
    for (let i = 0; i < allPhoto.length; i++) {
        productVotes.push(allPhoto[i].votes);
        productShown.push(allPhoto[i].imgshown);}

    let list = document.getElementById("result");
    let btn = document.getElementById("btn");
    btn.addEventListener("click", viewResult);
    function viewResult() {
      let liElement;
       for (let i = 0; i < allPhoto.length; i++) {
        liElement = document.createElement('li');
        list.appendChild(liElement);
        liElement.textContent = `${allPhoto[i].name} has ${allPhoto[i].votes}  votes  and has ${allPhoto[i].imgshown} time shown `;
    }
        
            chirtShown ();
            setItems ();
      }
    
      
    
  }
}

// ---------------------------------- function for the chart -------------
function chirtShown() {
  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: productName,
      datasets: [
        {
          label: "# of product  Votes",
          data: productVotes,
          backgroundColor: "red",
          borderColor: "red",
          borderWidth: 1,
        },
        {
          label: "# of product  shown",
          data: productShown,
          backgroundColor: "green",
          borderColor: "green",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
// console.log(productShown);
// console.log(productVotes);


