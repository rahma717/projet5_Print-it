const arrowRightElement = document.querySelector(".arrow_right");
const arrowLeftElement = document.querySelector(".arrow_left");
const divDotsElement = document.querySelector(".dots");
const bannerimg =document.querySelector(".banner-img");
const bannertext =document.querySelector("#banner p");
const alldot =document.getElementsByClassName("dot");
var selectedImage=1;
var selectedText="";
var slectedscr="";
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];


arrowRightElement.addEventListener("click", myFunctionRight);

function myFunctionRight() {

	selectedImage=selectedImage+1;
	if(selectedImage==slides.length+1){
		selectedImage=1;
	}
	selectedText=slides[selectedImage-1].tagLine;
	slectedscr=slides[selectedImage-1].image;
	changeImageAndText();
	addAndRemoveSelectedDot();


}
arrowLeftElement.addEventListener("click", myFunctionLeft);

function myFunctionLeft() {
	selectedImage=selectedImage-1;
	if(selectedImage==0){
		selectedImage=slides.length;
	}
	selectedText=slides[selectedImage-1].tagLine;
	slectedscr=slides[selectedImage-1].image;
	changeImageAndText();
	addAndRemoveSelectedDot();

}
// changement des images avec les textes
function changeImageAndText() {
	bannerimg.src="./assets/images/slideshow/"+slectedscr;
	bannertext.innerHTML=selectedText;
}
// ajout et suppression du SelectedDot
function addAndRemoveSelectedDot() {
	for (let i = 0; i < alldot.length; i++) {
		alldot[i].classList.remove("dot_selected");
	}
	alldot[selectedImage-1].classList.add("dot_selected");
}
// ajout des dots
for (let i = 0; i < slides.length; i++) {
	var dottoadded= document.createElement("span");
	dottoadded.classList.add("dot");
	if(i==selectedImage-1){
		dottoadded.classList.add("dot_selected");
	}
	divDotsElement.appendChild(dottoadded);
  }



