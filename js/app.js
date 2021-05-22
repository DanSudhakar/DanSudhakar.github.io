$(document).ready(function(){
	var pbars = document.querySelectorAll('.progress_bar');;
	pbars.forEach(function(bar){
		let percentage = bar.dataset.percent;
		let tooltip = bar.children[0];
		tooltip.innerText = percentage + '%';
		bar.style.width = percentage+'%';
	})
});