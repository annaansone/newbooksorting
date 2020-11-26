var items = [
  {all:"all",genre:"Biography",title:"Bossypants" ,author:"Tina Fey"},
  {all:"all",genre:"Biography",title:"Becoming" ,author:"Michelle Obama"},
  {all:"all",genre:"Biography",title:"Steave Jobs" ,author:"Walter Isaccson"},
  {all:"all",genre:"Fiction",title:"Tweet Cute" ,author:"Emma Lord"},
  {all:"all",genre:"Fiction",title:"Flipped",author:"Wendelin Van Drannen"},
  {all:"all",genre:"Fiction",title:"Turtles All The Way Down" ,author:"John Green"},
  {all:"all",genre:"Poetry",title:"Milk And Honey" ,author:"Rupi Kaur"},
  {all:"all",genre:"Poetry",title:"Deeper Than The Ocean",author:"Emma Rose"},
  {all:"all",genre:"Poetry",title:"Pillow Thoughts" ,author:"Courtney Peppernell"},
];

//add default value
//default:  statemnet ; in swich statement don't forget the break;

//grabbing the item object values by genre
var bio = items
.filter(item => item.genre == "Biography")

var fic = items
.filter(item => item.genre == "Fiction")

var poe = items
.filter(item => item.genre == "Poetry")

var all = items
.filter(item => item.all == "all")

//sorting each categorie in alfabetical order by the title

all.sort((a, b) => {
  if(a.title > b.title){
    return 1
  } else {
    return -1
  }
});

fic.sort((a, b) => {
  if(a.title > b.title){
    return 1
  } else {
    return -1
  }
});

poe.sort((a, b) => {
  if(a.title > b.title){
    return 1
  } else {
    return -1
  }
});

bio.sort((a, b) => {
  if(a.title > b.title){
    return 1
  } else {
    return -1
  }
});

function allbtn() {

document.getElementById("All").addEventListener("click", all);
document.getElementById("display").innerHTML = (`${all.map(item => item.title + " by " + item.author).join(',')}`);

}
allbtn();

//gets all the elements with biography genre
function biobtn() {

document.getElementById("Biography").addEventListener("click", bio);
document.getElementById("display").innerHTML = (`${bio.map(item => item.title + " by " + item.author).join(', ')}`);

}
biobtn();

//gets all the elements with fiction genre
function ficbtn() {
document.getElementById("Fiction").addEventListener("click", fic);
document.getElementById("display").innerHTML = (`${fic.map(item => item.title + " by " + item.author).join(', ')}`);

}
ficbtn();

//gets all the elemnts with poetry genre
function poebtn() {
  //display the values in html div
document.getElementById("display").innerHTML = (`${poe.map(item => item.title + " by " + item.author).join(', ')}`);
document.getElementById("Poetry").addEventListener("click", poe)
}
poebtn();


//sorting each categorie in alfabetical order by the author


all.sort((a, b) => {
  if(a.author > b.author){
    return 1
  } else {
    return -1
  }
});

poe.sort((a, b) => {
  if(a.author > b.author){
    return 1
  } else {
    return -1
  }
});

fic.sort((a, b) => {
  if(a.author > b.author){
    return 1
  } else {
    return -1
  }
});

bio.sort((a, b) => {
  if(a.author > b.author){
    return 1
  } else {
    return -1
  }
});


function authorBtn() {
document.getElementById("authors").addEventListener("click", all)
//displaying a-z author + the book title
//--> + " '" + item.title + "'" <-- refares to adding the title next to author
document.getElementById("displayAuthors").innerHTML = (`${all.map(item => item.author + " '" + item.title + "'").join(', ')}`);
}
authorBtn();


function poeAut() {
document.getElementById("poeAut").addEventListener("click", all)
//displaying a-z author + the book title
//--> + " '" + item.title + "'" <-- refares to adding the title next to author
document.getElementById("displayAuthors").innerHTML = (`${poe.map(item => item.author + " '" + item.title + "'").join(', ')}`);
}
authorBtn();

function ficAut() {
document.getElementById("ficAut").addEventListener("click", all)
//displaying a-z author + the book title
//--> + " '" + item.title + "'" <-- refares to adding the title next to author
document.getElementById("displayAuthors").innerHTML = (`${fic.map(item => item.author+ " '" + item.title + "'").join(', ')}`);
}
ficAut();

function bioAut() {
document.getElementById("ficAut").addEventListener("click", all)
//displaying a-z author + the book title
//--> + " '" + item.title + "'" <-- refares to adding the title next to author
document.getElementById("displayAuthors").innerHTML = (`${bio.map(item => item.author + " '" + item.title + "' ").join(', ')}`);
}
bioAut();
