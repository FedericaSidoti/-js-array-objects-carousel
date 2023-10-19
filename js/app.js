//array di oggetti
const images = [
	{
		image: './img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: './img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: './img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: './img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: './img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

// - PER OGNI immagine, creare un div che la contenga e inserirlo nell'html
const imgContainerDomElement = document.querySelector('.img-container');
//console.log (imgContainerDomElement)


for(let i = 0; i < images.length; i++) {
    //console.log(currentIMG)
    let currentFigure = images[i];
    const htmlString = `
        <div class="figure">
            <img src="${currentFigure.image}">
            <div class="text-wrapper">
                <h3 class="figure-title">${currentFigure.title}</h3>
                <p>${currentFigure.text}</p>
            </div>
        </div>
    `
    //console.log(htmlString)
    imgContainerDomElement.innerHTML += htmlString
    //console.log(imgContainerDomElement.innerHTML)
}

const imgElements = document.querySelectorAll('.figure')
//console.log(imgElements)
let indexSelectedImage = 0; 
//let firstIMG = imgElements[0]
let selectedIMG = imgElements[indexSelectedImage]
selectedIMG.classList.add('active')

//aggiungere alle frecce un eventlistener
btndownDOMElement = document.getElementById('btn-down')
btndownDOMElement.addEventListener ('click', function (){
// AL CLICK la classe active viene aggiunta all'immagine successiva a quella mostrata. 
    if (indexSelectedImage === images.length - 1) {
        indexSelectedImage = 0 ;
    } else {

    selectedIMG.classList.remove('active')
    selectedIMG = imgElements[indexSelectedImage++]
    selectedIMG.classList.add('active')
    console.log(selectedIMG.classList)
    console.log(indexSelectedImage)
    }
})    

btnUpElement = document.getElementById('btn-up')
btnUpElement.addEventListener('click', function(){

    if (indexSelectedImage === 0 ) {
        indexSelectedImage = (images.length -1)
    } else {

    selectedIMG.classList.remove('active')
    selectedIMG = imgElements[indexSelectedImage --]
    selectedIMG.classList.add('active')
    console.log(selectedIMG.classList)
    console.log(indexSelectedImage)
    }
    
})

