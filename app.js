'use strict';    

//global var arry 
let allPhoto =[];

// global var for conter
// let contForImag=0;
let userCont =0 ; 
let MaxCont =25;
// getting element Globaly 

let LeftElement =document.getElementById('left-image');
let CenterElement =document.getElementById('Center-image');
let RightElement =document.getElementById('Right-image');

// 
let leftImage ;
let CenterImage;
let RightImage ;





// constractor function for the mall
function mallImg (name ,path ){
    this.name =name ;
    this.path =path ;
    this.imgshown =0;//initail value 
    this.votes =0 //initail value 

    allPhoto.push(this);
}


new mallImg ('bag','images/bag.jpg');
new mallImg ('banana','images/banana.jpg');
new mallImg ('bathroom','images/bathroom.jpg');
new mallImg ('boots','images/boots.jpg');
new mallImg ('breakfast','images/breakfast.jpg');
new mallImg ('bubblegum','images/bubblegum.jpg');
new mallImg ('chair','images/chair.jpg');
new mallImg ('cthulhu','images/cthulhu.jpg');
new mallImg ('dog-duck','images/dog-duck.jpg');
new mallImg ('dragon','images/dragon.jpg');
new mallImg ('pen','images/pen.jpg');
new mallImg ('pet-sweep','images/pet-sweep.jpg');
new mallImg ('scissors','images/scissors.jpg');
new mallImg ('sweep','images/sweep.png');
new mallImg ('shark','images/shark.jpg');
new mallImg ('tauntaun','images/tauntaun.jpg');
new mallImg ('unicorn','images/unicorn.jpg');
new mallImg ('water-can','images/water-can.jpg');
new mallImg ('wine-glass','images/wine-glass.jpg');


console.log(allPhoto)// to show the result and check the error 

function RandomeleIndex (){
    return Math.floor(Math.random() *allPhoto.length);
}


// rander mall image 
function RenderThreeImage (){
     leftImage =RandomeleIndex();
     CenterImage =RandomeleIndex();
     RightImage =RandomeleIndex();


    while(leftImage===RightImage || leftImage===CenterImage || CenterImage===RightImage){
        leftImage=RandomeleIndex();
        CenterImage=RandomeleIndex();
    }
    // console.log(leftImage);
    // console.log(CenterImage);
    // console.log(RightImage);
    // console.log(allPhoto[leftImage])

    // give it source attripute 
    LeftElement.src = allPhoto[leftImage].path;
    allPhoto[leftImage].imgshown++;

    CenterElement.src=allPhoto[CenterImage].path;
    allPhoto[CenterImage].imgshown++;

    RightElement.src=allPhoto[RightImage].path;
    allPhoto[RightImage].imgshown++;

}
RenderThreeImage ();


// event listener 
LeftElement.addEventListener('click',clicker );
CenterElement.addEventListener('click',clicker );
RightElement.addEventListener('click',clicker );

function clicker (event){
    if(userCont<MaxCont){
        if(event.target.id==='left-image'){
            allPhoto[leftImage ].votes++
        }
        else if (event.target.id==='Center-image'){
            allPhoto[CenterImage ].votes++
        }
        else {
            allPhoto[RightImage ].votes++
        }
        userCont++;
        RenderThreeImage ();
    }
    else {
        LeftElement.removeEventListener('click', clicker);
        CenterElement.removeEventListener('click', clicker);
        RightElement.removeEventListener('click', clicker);


        

    let list = document.getElementById('result');
    let btn =document.getElementById('btn');
        btn.addEventListener('click', sskla)
        function sskla (){
    let liElement;
    for (let i = 0; i < allPhoto.length; i++) {
        liElement = document.createElement('li');
        list.appendChild(liElement);
        liElement.textContent = `${allPhoto[i].name} has ${allPhoto[i].votes}  votes  and has ${allPhoto[i].imgshown} time shown `;
    }
 }
 }
}

