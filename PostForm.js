if(document.getElementById("SubmitButton")){
	document.getElementById("SubmitButton").addEventListener('click', (e) =>{
		e.preventDefault();
		console.log("1");
		const db = getDatabase();
		const newPostKey = push(child(ref(db), 'number')).key;
		const WishName=WishForm.WishName.value;
		const WishDetail=WishForm.OutLine.value;
        push(ref(db, 'numbers/' + newPostKey), {
        title: WishName,
        detail:WishDetail,
		});
	},false);
}