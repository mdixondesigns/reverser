const input_box = document.getElementById("input-text");
const output_box = document.getElementById("output-text");
const word_count = document.getElementById("word-count");
const max_word_count = document.getElementById("max-word-count");
const clear_btn = document.getElementById("clear-btn");

let word_min = 2;
let word_max = 300;


max_word_count.innerHTML = word_max;


input_box.addEventListener('input', updateString);
clear_btn.addEventListener('click', clearInput);

function updateString(e){

	let input_string = input_box.value;
	let count = input_string.length;
	updateCount(count);

	let reverse_string = reverseString(input_string);

	if( count == 0 ) {
		clear_btn.className = "disabled";
	} else {
		clear_btn.classList.remove("disabled");
	}

	if( count < word_min ){
		output_box.innerHTML = "Your input must have " + word_min + " or more characters.";
	} else if( count > word_max ){
		output_box.innerHTML = "<h2 class='err'>Sorry</h2> Your input must be " + word_max + " characters or less."
	} else {
		output_box.innerHTML = reverse_string;
	}
}
updateString();

function updateCount(c){
	word_count.innerHTML = c;

	if( c > word_max){
		word_count.style.color = "#F32424";
	} else {
		word_count.style.color = "inherit";
	}
}

function reverseString(s) {
    var newString = "";
    for (var i = s.length - 1; i >= 0; i--) {
        newString += s[i];
    }
    return newString;
}

function clearInput(){

	if(input_box.value != ""){
		
		input_box.value = "";
		updateString();
	}
}