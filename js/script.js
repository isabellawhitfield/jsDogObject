

var dogs = [
 {
     name : "Stacey Lane Mathews",
     id : "D001",
     breed : "Chiwhawha",
     color : "White and tan",
     height: 20,
     age : 7,
     photo1: "images/chiwhawha.jpeg",
     photo2: "images/chiwhawha2.jpg",
     photo2: "images/chiwhawha3.jpeg"


 },
 {
    name : "Susan Brittany",
    id : "D002",
    breed : "French Bulldog",
    color : "Black",
    height: 30,
    age : 4,
    photo1: "images/frenchBull.jpg",
    photo2: "images/frenchBull2.jpg",
    photo3: "images/frenchBull3.jpeg"




},
{
    name : "Vincent Peters",
    id : "D003",
    breed : "Husky",
    color : "White and grey",
    height: 60,
    age : 2,
    photo1: "images/husky.jpeg",
    photo2: "images/husky2.jpg",
    photo3: "images/husky3.jpeg"


},
{
    name : "Friedrich Heinz",
    id : "D004",
    breed : "German Sheppard",
    color : "Black and brown",
    height: 50,
    age : 9,
    photo1: "images/germanSheppard.jpg",
    photo2: "images/germanSheppard2.jpg",
    photo3: "images/germanSheppard3.jpg"


},
{
    name : "George Thomas",
    id : "D005",
    breed : "Pug",
    color : "Black and tan",
    height: 15,
    age : 5,
    photo1: "images/pug.jpg",
    photo2: "images/pug2.jpg",
    photo3: "images/pug3.jpeg"


}
];
//all dogs

//all dogs
var id=1;
function allDogs(){
    document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    document.getElementById('dogs').innerHTML
    += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
    + '<div class="row">'
    +'<div class="col">'
    + '<img id="D00' + id.toString() + '" class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
    + '</div>'
    + '<div class="col">'
    + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
    + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
    + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
    + '</div>'
    + '</div>';
    id++;
  }
  }
  

  
  //height >40
  document.getElementById('height40').addEventListener('click', function(){
    console.log(dogs);
    document.getElementById('dogs').innerHTML = " "; //to clear the container
    for(var i = 0; i < dogs.length; i++) {
      if (dogs[i].height >= 40) {
        document.getElementById('dogs').innerHTML
        += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
        + '<div class="row">'
        +'<div class="col">'
        + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
        + '</div>'
        + '<div class="col">'
        + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
        + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
        + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
        + '</div>'
        + '</div>';
     }
    }
  });
  
  
  //bulldog
  document.getElementById('bullDog').addEventListener('click', function(){
    console.log(dogs);
    document.getElementById('dogs').innerHTML = " "; //to clear the container
  
  
    for(var i = 0; i < dogs.length; i++) {
      if (dogs[i].breed.indexOf("Bulldog") > (-1) ) {
        document.getElementById('dogs').innerHTML
        += '</br><h1 class="jumbotron text-danger myHeading">' + dogs[i].name + '</h1>'
        + '<div class="row">'
        +'<div class="col">'
        + '<img class="img-thumbnail mt-5 myDogs" src="' + dogs[i].photo1 + ' "  alt="Dog"/>'
        + '</div>'
        + '<div class="col">'
        + '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>'
        + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>'
        + '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>'
        + '</div>'
        + '</div>';
     }
    }
  });
  
   document.getElementById('changeName').addEventListener('click', function(){
     var oldName = document.getElementById('oldName').value;
     var newName = document.getElementById('newName').value;
     console.log(oldName, newName);
     for(var i = 0; i < dogs.length; i++) {
       if (oldName === dogs[i].name){
         dogs[i].name = newName;
       }
     }
     console.log(dogs);
     allDogs();
   });
  
  // document.getElementById('all').addEventListener('click', function(){
    allDogs();
  // });
  
  
  $('.myDogs').on('click', function(){
    console.log('dogs');
    console.log(this.id);
    document.getElementById('modalContent').innerHTML =' ';
    $('.myModal').show();
    for (var i=0; i< dogs.length ; i ++){
        console.log(typeof(dogs[i].id));
        console.log(i);
    console.log(dogs[i].id === this.id);
        if(this.id.trim() === dogs[i].id.trim()){
            console.log(dogs[i].name);
            console.log(dogs[i].breed);
            console.log(dogs[i].height);
            console.log(dogs[i].age);
            console.log(dogs[i].color);
            document.getElementById('modalContent').innerHTML += '<div class="jumbotron">'
            + dogs[i].name + dogs[i].breed + 'height ' + dogs[i].height + 'cm' + dogs[i].age + dogs[i].color + '</div>'
            // + '<img class="card-thumbnail mt-5 myDogs modalDog" src="' + dogs[i].photo + '" alt="Dog"/>'
            + '<div id="carouselExampleIndicators" class="carousel slide myCarousel" data-ride="carousel">'
            + '<ol class="carousel-indicators">'
            + '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
            + '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
            + '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
            + '</ol> <div class="carousel-inner"><div class="carousel-item active">'
            + '<img class="card-img-top myDogs modalDog" src="' + dogs[i].photo1 + '"  alt="Dog"/>'
            + '</div> <div class="carousel-item">'
            + '<img class="card-img-top myDogs modalDog" src="' + dogs[i].photo2 + '"  alt="Dog"/>'
            + '</div><div class="carousel-item">'
            + '<img class="card-img-top myDogs modalDog" src="' + dogs[i].photo3 + '"  alt="Dog"/>'
            + '</div> </div>'
            + '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
            + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
            + '<span class="sr-only">Previous</span> </a>'
            + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
            + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
            + '<span class="sr-only">Next</span> </a></div>';


        }
    }
  });
 
  $('.closeBar').on('click', function(){
    $('.myModal').hide();
  });
  