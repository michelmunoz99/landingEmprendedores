/*variables
condicionales
metodos
ciclos
filtros
clases
objetos
arreglos*/
/*
Arrays:
	se definen con [];
	tienen Items
		los items tienen índices que incian en 0
	para acceder a un índice usamos [],
	por ejemplo myArray[0] accede al índice 0 de myArray

Objetos
	se definen con {};
	tienen llaves:valores,
		las llaves son el nombre de alguna característica del objeto
		los valores definen dicha característica del objeto
	para acceder a una llave usamos .
	por ejemplo myObject.name accede al valor de la llave "name" de "myObject"
*/

var database = firebase.database();/*nos conectamos al nodo principal*/
var coffeeReference = database.ref('/coffeeCollection');/*creamos una conexión al nodo 'coffeeCollection'*/

coffeeReference.on('value',(snapshot)=>{/*nos ponemos en escucha de cualquier cambio en ese nodo*/
	console.log(snapshot.val())/*creamos un callback que nos imprime el contenido del nodo*/
	let refContent = snapshot.val();
	printCoffeeCatalog(refContent);
})

const printCoffeeCatalog = (refContent)=>{
	$("#coffee-wrapper").empty();
	$.each(refContent,(key,value)=>{
		console.log(`key ${key}, value ${value}`)
		$("#coffee-wrapper").append(`
			<div class="col-12 col-lg-4">
				<div class="card mt-3">
					<img class="w-100 d-block mx-auto" src="${value.imgSrc}" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${value.name}</h5>
						<ul class="list-group">
						  <li class="list-group-item">${value.description}</li>
						  <li class="list-group-item text-right font-italic font-weight-bold text-success">${value.price}</li>
						</ul>
					</div>
				</div>
			</div>
		`)
	})
}

const uploadCoffee = (name,description,price,imgSrc) => {
    coffeeReference.push({name,description,price,imgSrc})
}

var foo = "Hola de nuevo Koders";
var bar = 29
var coffeeArray = [
	"Capuccino",
	"Latte",
	"Americano"
]
var pricesArray=[
		20,
		30,
		25.5
	]

var productsArray=[
	{
		name:"Capuccino",
		description:"Some Text",
		price:"$20.00"
	},
	{
		name:"Latte",
		description:"Some Text",
		price:"$20.00"
	}
]
var coffeeObject = {
	name:"Capuccino",
	description:"Some Text",
	price:"$20.00"
}

var koderObject = {
	name:"Israel",
	edad:29,
	matrícula:"ASDF5QWE5X",
	sexo:"M",
	intereses:[
		"Ajedrez",
		"Starcraft",
		"Música"
	],
	dirección:{
		calle:"Campo Horcón",
		colonia:"Reynosa",
		numero:"589"
	}
}

const sumaDosNumeros = (datoA,datoB) => {
	console.log(datoA + datoB)
}

const printFullName = (nombre,apaterno,amaterno) => {
	userName = nombre;
	userLastname = apaterno;
	userMothername = amaterno;
	console.log("mi nombre es "+userName+" "+userLastname+" "+userMothername)
}

const printVariables = ()=>{
	console.log(userName);
	console.log(userLastname);
	console.log(userMothername)
	console.log(someArray);
}

const getUserData = () => {
	let userName = $("#user-name").val();
	let userLastName = $("#user-lastname").val();
	let userMotherName = $("#user-mothername").val();
	console.log(userName + " " + userLastName + " " + userMotherName);
	let userObject = {};
	userObject.name = userName;
	userObject.lastName = userLastName;
	userObject.motherName = userMotherName;
	console.log(userObject);
}

$("#save-button").on("click",(event) => {
	getUserData();
})

$("#user-name").on("keypress",(event)=>{
	console.log($(event.target).val())
})

const getCoffeeData = ()=>{
	let coffeeName = $("#coffee-name").val();
	let coffeePrice = $("#coffee-price").val();
	let coffeeDescription = $("#coffee-description").val();
	let coffeeImg = $("#coffee-img").val();

	let coffeeObject = {coffeeName,coffeePrice,coffeeDescription,coffeeImg}
	console.log(coffeeObject)
	coffeeArray.push(coffeeObject)
	console.log(coffeeArray)
	printCoffeeCatalog();
}

$("#save-coffee-btn").on("click",()=>{
	getCoffeeData()
})

var coffeeArray = [{
	coffeeName:"Capuccino Late",
	coffeeDescription:"Some text",
	coffeePrice:"$23.00",
	coffeeImg:"img/cafe1.jfif"
},
{
	coffeeName:"Capuccino ",
	coffeeDescription:"Some text",
	coffeePrice:"$23.00",
	coffeeImg:"img/cafe2.jfif"
},
{
	coffeeName:"Americano",
	coffeeDescription:"Some text",
	coffeePrice:"$23.00",
	coffeeImg:"img/cafe3.jfif"
}];

var petsArray = [];

const addPet = (petName,petBreed,petColor)=>{
	petsArray.push({name:petName,breed:petBreed,color:petColor});
	console.log(petsArray)
	printPets();
}

const printPets = ()=>{
	petsArray.forEach((item)=>{
		console.log(`hola, soy ${item.name}, soy un ${item.breed} y mi color es ${item.color}`)
	})
}