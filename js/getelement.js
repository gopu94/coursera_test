function hello() {
  var n= document.getElementById('name').value;
  n ="<h1> hello " + n + "<h1>";
  document.getElementById('cnt').textContent=n;
	
  document.getElementById('cnt').innerHTML=n;
	
}