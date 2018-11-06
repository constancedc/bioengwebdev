let h1= document.querySelector('h1');

h1.addEventlistener('click',()=> {
	h1.style.color='red';
	//event.preventDefault(); we want it to do somehting else prevent it from executing what it normally does
});
