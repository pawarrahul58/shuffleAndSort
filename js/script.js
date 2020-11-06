shuffle(); // default call when script will get loaded

function shuffleArray(list) {
    for (var i = 0, shuffled = [], randomNumber = 0; i < list.length; i++) {
        randomNumber = Math.floor(Math.random() * list.length);
        while (shuffled.indexOf(list[randomNumber]) !== -1) {
            randomNumber = Math.floor(Math.random() * list.length);
        }
       shuffled.push(list[randomNumber]);
    }
	return shuffled;
}

function shuffle(flag) {
	let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"], divElement = "", shuffledArray = [];
	shuffledArray = flag === "Shuffle" ? shuffleArray(arr) : flag === "Desc" ? arr.reverse() : arr;
	shuffledArray.forEach(function(item) {
		var color = "color" + item;
		divElement += '<div class="card '+color+'">' + item + '</div>';
	})
	divElement += "<br style='clear:both;'/>";
	document.getElementById('result').innerHTML = divElement;
}
