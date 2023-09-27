/*import firebase from "firebase/app";
import "firebase/compat/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};
const dbRef = firebase.database().ref();
dbRef.child("users").child(userId).get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
*/


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