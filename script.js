//your JS code here. If required.
let text = document.getElementById("text");
let delay = document.getElementById("delay");
let btn = document.getElementById("btn");
let output = document.getElementById("output");


function wait(ms){
	return new promise (function (resolve)){
		setTimeout (resolve,ms);
	});
}

async function showMessage(){
	let message = text.value;
	let time = Number(delay.value);

	
	await wait(time);

	output.textcontent = message;
}
btn.addEventListener("click",showMessage);