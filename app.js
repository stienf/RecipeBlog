const shoppingItem = document.querySelector('#item');
const shoppingForm = document.querySelector('#shopping-form');
const ingredientList = document.querySelector('.list-group');
const deleteBtn = document.querySelector('#clear-list');
const addBtn = document.querySelector('#add-ingredient');

const tomatoBtn = document.querySelector('#tomato-btn');
const curryBtn = document.querySelector('#curry-btn');
const burgerBtn = document.querySelector('#burger-btn');
const ramenBtn = document.querySelector('#ramen-btn');

const tomatoBtn2= document.querySelector('#tomato-btn2');
const curryBtn2 = document.querySelector('#curry-btn2');
const burgerBtn2 = document.querySelector('#burger-btn2');
const ramenBtn2 = document.querySelector('#ramen-btn2');



eventListeners();
function eventListeners() {
    // button for adding tomato ingredients
    tomatoBtn.addEventListener('click', makeTomatoIngredients); 
    tomatoBtn2.addEventListener('click', makeTomatoIngredients);
    // button for adding curry ingredients
    curryBtn.addEventListener('click', makeCurryIngredients);
    curryBtn2.addEventListener('click', makeCurryIngredients);
    // button for burger ingredients
    burgerBtn.addEventListener('click', makeBurgerIngredients);
    burgerBtn2.addEventListener('click', makeBurgerIngredients);
    // button for ramen ingredients
    ramenBtn.addEventListener('click', makeRamenIngredients);
    ramenBtn2.addEventListener('click', makeRamenIngredients);
    // button to add own ingredient
    shoppingForm.addEventListener('click', addOwnIngredient);
    // remove single ingredients
    ingredientList.addEventListener('click', removeElement);
    // remove all ingredients
    deleteBtn.addEventListener("click", removeAllElements);
    //load all ing from local storage at page startup
    document.addEventListener('DOMContentLoaded', loadAllIng); // to load all the todos you inserted before
}

function loadAllIng() {
    let localIngredients = getIngFromStorage();
    localIngredients.forEach(function(ingredient){
    console.log(ingredient);
    makeExtraIngredient(ingredient); 
})
} 



function getIngFromStorage() {
    let ingredients;
    if (localStorage.getItem('ing') === null) {
        ingredients = [];
    } else {
        ingredients = JSON.parse(localStorage.getItem('ing'));
    }
    return ingredients;
}


function addIngToStorage(newIng) {
    let ingredients = getIngFromStorage(); 
    ingredients.push(newIng);
    localStorage.setItem('ing', JSON.stringify(ingredients));

} 


// create element with only function
function CreateElement(tagName) {
    return document.createElement(tagName);
}


// add ingredients tomato pasta 

var listTomato = ["Cherry tomatoes", "Basil", "Mascarpone", "Shell pasta", "Thyme and rosemary", "Breadcrumbs", "Balsamic glaze", "Garlic", "Chilli flakes"];

function makeTomatoIngredients(event) {
    listTomato.forEach(function (ingIn) {
        console.log(ingIn);
        const li = CreateElement('li');
        li.className = "list-group-item d-flex justify-content-between";

        const delItem = CreateElement('a');
        delItem.href = "#";
        delItem.className = "delete-item";
        delItem.innerHTML = "<i class = 'fa fa-remove text-info'  ></i>";

        var liText = document.createTextNode(ingIn);

        li.appendChild(liText);
        li.appendChild(delItem);

        ingredientList.append(li);
        addIngToStorage(ingIn);
    }
    );
    
}

// add curry ingredients 

var listCurry = ["Halloumi", "Chilli powder", "Tumeric", "Garam masala", "1 cauliflower", "Fresh coriander", "Rice", "Coconut milk", "Tomatoes", "Onions", "Tomato puree", "Garlic", "Ginger"];

function makeCurryIngredients(event) {
    listCurry.forEach(function (ingIn) {
        console.log(ingIn);
        const li = CreateElement('li');
        li.className = "list-group-item d-flex justify-content-between";

        const delItem = CreateElement('a');
        delItem.href = "#";
        delItem.className = "delete-item";
        delItem.innerHTML = "<i class = 'fa fa-remove text-info'  ></i>";

        var liText = document.createTextNode(ingIn);

        li.appendChild(liText);
        li.appendChild(delItem);

        ingredientList.append(li);
        addIngToStorage(ingIn);
    }
    );
}

// add burger ingredients 

var listBurger = ["Onions", "Cumin seeds", "Ground Coriander", "Garam masala", "Fresh mint", "Coconut yogurt", "Burger buns", "Gram Flour", "Baking Powder", "Ginger", "Mango chutney", "Cucumber"];

function makeBurgerIngredients(event) {
    listBurger.forEach(function (ingIn) {
        console.log(ingIn);
        const li = CreateElement('li');
        li.className = "list-group-item d-flex justify-content-between";

        const delItem = CreateElement('a');
        delItem.href = "#";
        delItem.className = "delete-item";
        delItem.innerHTML = "<i class = 'fa fa-remove text-info'  ></i>";

        var liText = document.createTextNode(ingIn);

        li.appendChild(liText);
        li.appendChild(delItem);

        ingredientList.append(li);
        addIngToStorage(ingIn);
        
    }
    );
}

// add ramen ingredients 

var listRamen = ["Beef mince", "4 eggs", "Pak choi", "Chilli flakes", "Olive oil", "Sesame oil", "Garlic", "Ginger", "Spring onions", "Chicken stock", "Soy sauce", "Egg noodles"];

function makeRamenIngredients(event) {
    listRamen.forEach(function (ingIn) {
        makeExtraIngredient(ingIn);
        addIngToStorage(ingIn);
    }
    );
    event.preventDefault();
}

// add own ingredients

function makeExtraIngredient(newIngredient) {
    const listItem = CreateElement('li');
    listItem.className = "list-group-item d-flex justify-content-between";
    const link = CreateElement('a');
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove text-info'></i>"
    listItem.appendChild(document.createTextNode(newIngredient.trim()))
    listItem.appendChild(link);

    ingredientList.appendChild(listItem);
    console.log(listItem);
    event.preventDefault();
}

function spaceRemover(a) {
    return a.split(' ').join('');
}

function addOwnIngredient(event) {
    if (event.target.className == 'btn btn-info') {
        var add = shoppingItem.value;
        console.log(add);
        var newAdd = spaceRemover(add);
        makeExtraIngredient(newAdd);
        addIngToStorage(newAdd);

    }
}


// remove single element

function removeElement(event) {
    if (event.target.className == 'fa fa-remove text-info') {
        
        var findParentElement = event.target.parentElement.parentElement;
        console.log(findParentElement);
        findParentElement.remove();
        deleteIngFromStorage(event.target.parentElement.parentElement.textContent); // will select the todo input


    }
    event.preventDefault();
}


    

// remove all elements

function removeAllElements(){
    while (ingredientList.firstElementChild != null){
        ingredientList.removeChild(ingredientList.firstElementChild);
    }
    localStorage.clear();
    event.preventDefault();
}


// delete from local storage 

function deleteIngFromStorage(deleteIng){
    let ingredients = getIngFromStorage(); 
    var index = 0;
    ingredients.forEach(function(ingredient){
        if(ingredient === deleteIng){ 
            ingredients.splice(index,1);
            console.log(index);
            console.log(ingredient);
           
        }
        index++;
        
    });
    localStorage.setItem('ing', JSON.stringify(ingredients)); 
    } 


