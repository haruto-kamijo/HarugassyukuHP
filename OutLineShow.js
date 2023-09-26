/*const button = document.querySelectorAll(".WishList").forEach(function (button) {
	button.addEventListener('click', {value: `${button.value}`, handleEvent: onClickButton});
})
const VisibleMain=document.getElementById("WishMain");
const VisibleContent=document.getElementById("WishContent");

function onClickButton() {
	console.log(`${this.value}がクリックされました`)
	if(VisibleMain.style.visibility=="visible"){
		// hiddenで非表示
		VisibleMain.style.visibility ="hidden";
		VisibleContent.style.visibility ="visible";
		
	}else{
		// visibleで表示
		VisibleContent.style.visibility ="hidden";
		VisibleMain.style.visibility ="visible";
	}
}*/

  
  
  const target1 = document.querySelector('.view1');
  const target2 = document.querySelector('.view2');
  const trigger = document.querySelectorAll(".trigger").forEach(function (trigger) {
  trigger.addEventListener('click', () => {
    target1.classList.toggle('hide');  
    target1.classList.toggle('show');
	target2.classList.toggle('hide');  
    target2.classList.toggle('show');
  }, false);});
  

