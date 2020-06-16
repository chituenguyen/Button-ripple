document.addEventListener("DOMContentLoaded",function(){
	var btn1=document.querySelector(".button1")
	var btn2=document.querySelector(".button2")
	var hover=true;
	function createbt1(btn1,event){
		var x,y;
		var save=document.createElement("div")
		save.classList.add("ripple")
		x=event.clientX - btn1.offsetLeft;
		y=event.clientY - btn1.offsetTop;
		
		save.style.top=y + "px";
		save.style.left=x + "px";
		btn1.appendChild(save)
		setTimeout(()=>{save.remove()},1000);
	}
	btn1.addEventListener("click",function(event){
		createbt1(btn1,event)

	})
	btn1.addEventListener("mouseover",function(event){
		if(hover){
			hover=false;
			createbt1(btn1,event)
			 setTimeout(function(){hover=true;},100);
		
	}
})

	function createbt2(btn2,event){
		var x,y;
		var save1=document.createElement("div")
		save1.classList.add("ripple2")
		x=event.clientX - btn2.offsetLeft;
		y=event.clientY - btn2.offsetTop;
		
		save1.style.top=y + "px";
		save1.style.left=x + "px";
		btn2.appendChild(save1)
		setTimeout(()=>{save1.remove()},1000);
	}
	btn2.addEventListener("click",function(event){
		createbt2(btn2,event)

	})
	btn2.addEventListener("mouseover",function(event){
		if(hover){
			hover=false;
			createbt2(btn2,event)
			 setTimeout(function(){hover=true;},100);
		
	}

})
})

