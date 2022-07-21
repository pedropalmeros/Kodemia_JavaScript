let liBlock = document.querySelectorAll("li");
console.log(liBlock);
liBlock.forEach((liElement)=>{
    liElement.setAttribute("class", "item");
    liElement.setAttribute("id","lista");
    liElement.setAttribute("class","list__item");
    liElement.removeAttribute("item");
})
console.log(liBlock);

let body = document.querySelector('body');


let ulElement = document.createElement("ul");
ulElement.setAttribute("id","menu");
ulElement.setAttribute("class","menu");
body.appendChild(ulElement);


for(let i = 0; i<3 ; i++){
    let text = '';
    let liItem = document.createElement("li");
    liItem.setAttribute("class","item__menu");
    switch(i){
        case 0:
            text = 'Home';
            break;
        case 1:
            text = 'Products';
            break;
        case 2:
            text = 'About Us';
            break;
    }
    liItem.textContent = text;

    ulElement.appendChild(liItem);
}


/****************************************
1. Generar una lista con la clase "koders"
2. Agregar a cada koder en esa lista
3. A todos los koders agregarles la clase "item koder"
let koders =  [
   {
       name: 'Ferdinand',
       lastName: 'Bracho',
       age: 30,
       generation: 2,
       modulos: ['js','python', 'git'],
   },
   {
       name: 'Alfredo',
       lastName: 'Pi',
       age: 20,
       generation: 10,
       modulos: ['Node', 'Cloud'],
   },
   {
       name: 'Ale',
       lastName: 'Pa',
       age: 30,
       generation: 1,
       modulos: ['React'],
   }
]
*****************************************/

let koders =  [
   {
       name: 'Ferdinand',
       lastName: 'Bracho',
       age: 30,
       generation: 2,
       modulos: ['js','python', 'git'],
   },
   {
       name: 'Alfredo',
       lastName: 'Pi',
       age: 20,
       generation: 10,
       modulos: ['Node', 'Cloud'],
   },
   {
       name: 'Ale',
       lastName: 'Pa',
       age: 30,
       generation: 1,
       modulos: ['React'],
   }
]

let ulKoders = document.createElement("ul");
ulKoders.setAttribute("class","koders");
body.appendChild(ulKoders);

koders.forEach((koder)=>{
    let koderItem = document.createElement("li");
    koderItem.textContent = `${koder.name} ${koder.lastName} es de la generación ${koder.generation}`;
    ulKoders.appendChild(koderItem)
});

