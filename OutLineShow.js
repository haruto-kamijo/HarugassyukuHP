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

let namelist=["おにごっこしたい","満漢全席食べたい","ギネス挑戦したい","じゃんけん列車したい"];
let outline=["100人でふえおにがしたい。どろけいもしてみたい","みんなで1品ずつ料理を作って全員で食べたい","けん玉の皿に乗せるやつを100人でやってギネス挑戦したい","100人でじゃんけん列車をしてじゃんけん最強を決めたい"];
const wishname=document.getElementById("WishName");
const wishdetail=document.getElementById("WishDetail");

const target1 = document.querySelector('.view1');
const target2 = document.querySelector('.view2');
const trigger = document.querySelectorAll(".trigger").forEach(function (trigger) {
trigger.addEventListener('click', () => {
    target1.classList.toggle('hide');  
    target1.classList.toggle('show');
	target2.classList.toggle('hide');  
    target2.classList.toggle('show');
}, false);});
const button = document.querySelectorAll(".WishList").forEach(function (button) {
	button.addEventListener('click', {value: `${button.value}`, handleEvent: onClickButton});
})
function onClickButton() {
	wishname.innerHTML=namelist[this.value];
	wishdetail.innerHTML=outline[this.value];
}