// define variables

const categorySelector = document.getElementById('category-selector');
const categorySwitch = document.getElementById('category-switch');
const category = document.querySelectorAll('.category');


categorySelector.addEventListener('click', () => {
	if (category[0].classList.contains('active')) {
		category[0].classList.remove('active');
		category[1].classList.add('active');
		categorySwitch.classList.add('moved');
	} else {
		category[1].classList.remove('active');
		category[0].classList.add('active');
		categorySwitch.classList.remove('moved');
	}
});
