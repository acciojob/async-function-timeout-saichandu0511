//your JS code here. If required.
let text = document.getElementbyId("text");
let delay = document.getElementbyId("delay");
let button = document.getElementbyId("btn");
let output = document.getElementbyId("output");


function wait(ms){
	return new promise (function (resolve)){
		setTimeout (resolve,ms);
	});
}

Async function showMessage(){
	let message = text.value;
	let time = Number(delay.value);

	
	await wait(time);

	output.textcontent = meaasge;
}
btn.addEventListner("click",showMessage);