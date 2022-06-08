console.log("heyo");

const input_box = document.getElementById("input-text");
const output_box = document.getElementById("output-text");
const word_count = document.getElementById("word-count");


input_box.addEventListener('input', processString);

function processString(e){
	
	//console.log(this.value);	
	let input_string = this.value;
	let count = input_string.length;

	word_count.innerHTML = count;
	output_box.innerHTML = this.value;
}
