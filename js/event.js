document.addEventListener("DOMContentLoaded",function(event){

  	function hello(event){
  	// console.log(this);
  	this.textContent="leave me";
  	var n="hello "+document.getElementById("name").value
  	document.querySelector("#cnt").innerHTML=n;
  	  	 
  }
  document.querySelector("button").addEventListener("click",hello)
   document.querySelector("body").addEventListener("mousemove",function(event){
  	     function posi(event){
  	     	console.log(document.getElementById('ya').value);
  		if(document.getElementById('ya').value==true)
  		
   	console.log("X: "+ event.clientX +"  Y: "+event.clientY);
   	else 
   		document.getElementById("reply").innerHTML="okeyyyyy...."
   }
   document.querySelector("#ya").addEventListener("click",posi);
   });
}
);
