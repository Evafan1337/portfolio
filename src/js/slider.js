const leftClick = document.getElementById('leftClick'),
rightClick = document.getElementById('rightClick');

let sliderCounter = 0,
sliderElements = document.querySelectorAll('img.slider__image'),
arrayLength = sliderElements.length;

arrayLength--;

rightClick.addEventListener('click', function(){
	if(sliderCounter === arrayLength){
		sliderElements[sliderCounter].classList.add('hidden');
		sliderCounter = 0;
		sliderElements[sliderCounter].classList.remove('hidden');
	}
	else {
		sliderElements[sliderCounter].classList.add('hidden');
		sliderCounter++;
		sliderElements[sliderCounter].classList.remove('hidden');
	}
});

leftClick.addEventListener("click",function(){
	if(sliderCounter === 0){
		sliderElements[sliderCounter].classList.add('hidden');
		sliderCounter = arrayLength;
		//console.log(sliderCounter);
		//console.log(sliderArray[sliderCounter]);
		sliderElements[sliderCounter].classList.remove('hidden');
	}
	else{
		sliderElements[sliderCounter].classList.add('hidden');
		sliderCounter--;
		sliderElements[sliderCounter].classList.remove('hidden');
	}
});