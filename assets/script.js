const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener("DOMContentLoaded", function () {
	const arrowRight = document.querySelector(".arrow_right")
	const bannerImage = document.querySelector(".banner-img")
	const arrowLeft = document.querySelector(".arrow_left")
	const SliderText = document.querySelector("#banner p")

	// Ajout des bullet points sur la partie basse du slider
	const Points = document.querySelector('.dots')
	slides.forEach(function (slide, slideIndex) {
		const Point = document.createElement('span')
		Point.classList.add('dot')
		if (slideIndex === 0) {
			Point.classList.add('dot_selected')
		}
		Points.appendChild(Point)

	})
	//Création de la fonction qui gère le changement d'images, du texte, et du dot_selected
	function Cliccarousel(index, previusIndex) {
		bannerImage.src = './assets/images/slideshow/' + slides[index]['image']
		SliderText.innerHTML = slides[index].tagLine

		ArrayDot[previusIndex].classList.remove('dot_selected')
		ArrayDot[index].classList.add('dot_selected')

	}
	const ArrayDot = document.querySelectorAll(".dot")
	let index = 0
	let previusIndex = 0

	arrowRight.addEventListener('click', function () { //todo faire la même chose pour l'arrowLeft
		previusIndex = index;
		index++
		if (index >= slides.length) index = 0
		Cliccarousel(index, previusIndex)
	})

	arrowLeft.addEventListener('click', function () {
		previusIndex = index;
		index--
		if (index < 0) index = slides.length - 1
		Cliccarousel(index, previusIndex)
	})
})
