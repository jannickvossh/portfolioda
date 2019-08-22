// define variables

const categorySelector = document.getElementById('category-selector');
const categorySwitch = document.getElementById('category-switch');
const category = document.querySelectorAll('.category');
const postCategories = document.querySelectorAll('.post-grid');
const personalPosts = postCategories[0];
const clientsPosts = postCategories[1];


categorySelector.addEventListener('click', () => {
	if (category[0].classList.contains('active')) {
		category[0].classList.remove('active');
		category[1].classList.add('active');
		categorySwitch.classList.add('moved');
		personalPosts.style.display = "none";
		clientsPosts.style.display = "flex";
	} else {
		category[1].classList.remove('active');
		category[0].classList.add('active');
		categorySwitch.classList.remove('moved');
		clientsPosts.style.display = "none";
		personalPosts.style.display = "flex";
	}
});
