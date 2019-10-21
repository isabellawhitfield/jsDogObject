console.log('Array of objects');

var dogs = [
 {
     name : "Stacey Lane Mathews",
     id : "ch001",
     breed : "Chiwhawha",
     color : "White and tan",
     height: 20,
     age : 7,
     photo: "images/chiwhawha.jpeg"


 },
 {
    name : "Susan Brittany",
    id : "fr001",
    breed : "French Bulldog",
    color : "Black",
    height: 30,
    age : 4,
    photo: "images/frenchBull.jpg"


},
{
    name : "Vincent Peters",
    id : "hu001",
    breed : "Husky",
    color : "White and grey",
    height: 60,
    age : 2,
    photo: "images/husky.jpeg"


},
{
    name : "Friedrich Heinz",
    id : "ge001",
    breed : "German Sheppard",
    color : "Black and brown",
    height: 50,
    age : 9,
    photo: "images/germanSheppard.jpg"


},
{
    name : "George Thomas",
    id : "pu001",
    breed : "Pug",
    color : "Black and tan",
    height: 15,
    age : 5,
    photo: "images/pug.jpg"


},
];
//all dogs

function allDogs(){
    document.getElementById('dogs').innerHTML = " "; //to clear the container
for(var i=0; i < dogs.length; i++){
    document.getElementById('dogs').innerHTML 
    + '<br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
    +'<div class="row">'
    + '<div class="col">'
    + '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + '" alt="dog"/>'
    + '</div>'
    + '<br><br> Breed : <br> <h5 class="text-danger">' + dogs[i].breed + '</h5>'
    + '<br><br> Age : <br> <h5 class="text-danger">' + dogs[i].age + '</h5>'
    +'<br><br> Height : <br> <h5 class="text-danger">' + dogs[i].height + '</h5>'
    + '</div>'
    + '</div>';
}

document.getElementById('pugs').addEventListener('click', function(){
    document.getElementById('dogs').innerHTML = " "; //to clear the container
    for(var i=0; i < dogs.length; i++){
        if (dogs[i].height <= 25){
        document.getElementById('dogs').innerHTML 
        + '<br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>'
        +'<div class="row">'
        + '<div class="col">'
        + '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + '" alt="dog"/>'
        + '</div>'
        + '<br><br> Breed : <br> <h5 class="text-danger">' + dogs[i].breed + '</h5>'
        + '<br><br> Age : <br> <h5 class="text-danger">' + dogs[i].age + '</h5>'
        +'<br><br> Height : <br> <h5 class="text-danger">' + dogs[i].height + '</h5>'
        + '</div>'
        + '</div>';
    }
    }

});

document.getElementById('changeName').addEventListener('click', function(){
    var oldName = document.getElementById('oldName').value;
    var newName = document.getElementById('newName').value;
    for(var i=0; i < dogs.length; i++){
        if(oldName === dogs[i].name){
            dogs[i].name = newName;
        }
    }
 console.log(dogs);
  allDogs();
});

document.getElementById('all').addEventListener('click', function(){
    allDogs();
});