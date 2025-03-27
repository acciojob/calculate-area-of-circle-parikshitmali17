 function calculateArea() {
	 let para=document.getElementById("para")
	 let r = prompt("Enter the radius of the circle:");
	 r=parseInt(r)
	 para.innerText=`The area of the circle with radius ${r} is ${((22/7)*r*r).toFixed(2)}`
            // Get the radius from the user using the prompt() function
            
            // write you code here and display the result to the user
           
}
calculateArea();
