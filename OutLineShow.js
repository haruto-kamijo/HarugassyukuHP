const target1 = document.querySelector('.view1');
const target2 = document.querySelector('.view2');
const trigger = document.querySelectorAll(".trigger").forEach(function (trigger) {
trigger.addEventListener('click', () => {
    target1.classList.toggle('hide');  
	target1.classList.toggle('show');
	target2.classList.toggle('hide');  
    target2.classList.toggle('show');
}, false);});