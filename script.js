//creating variables using Let; Var; and cnst
//used let in stopwatch and will use cnst in this
//will need 3 variables: hold the output, the result to display, and the keys that are pressed
/*these are the 3 variables we will declare both the calc (=) and ans are strings but AC is a boolean, either yes or no*/
//selector. A query selector returns the first element in the code that has the class output, result, or can also select all the buttons to one class "buttons" and sets these to the following variables. 
const output = document.querySelector(".output"); //selects tthe elements with class output and stores in a var
const result = document.querySelector(".result");//same thing
const keys = document.querySelectorAll("button");

//eventlistener. For each is a loop, we are looping over the keys, the loop is that each key has an event listener which waits for the click and starts the function calculate
keys.forEach(key=>{
	key.addEventListener("click",calculate);
});

function calculate(){
//We first declared a variable, and made the innertext of the button that has been selected from the query selector be equal to it.        
//The first if statement is the AC button then it changes the following variables. Return means: breaks the function and goes out the function
let buttonText = this.innerText;
	if(buttonText==="AC"){
    	output.innerText = "";
    	result.innerText = "0";
    	result.style.animation = "";
    	output.style.animation = "";
    	return;
	}
  if(buttonText==="DEL"){
    output.textContent = output.textContent.substr(0,output.textContent.length-1);
    	return;
	}
 ////The equal if statement: The inner text of the result, the eval function, takes the mathematical equation in a string and executes it. And then executes the following CSS animation. Find a link for the following animation below.
 
 if(buttonText === "="){
    	result.innerText = eval(output.innerText);
    	result.style.animation = "big 0.5s ease-in-out";
    	output.style.animation = "small 0.5s ease-in-out";
    	result.style.animationFillMode = "forwards";
    	output.style.animationFillMode = "forwards";
	}
  //lastly if the button clicked was not the delete, equal, or ac button then it has to be a number button. So the else statement takes the text of the "output" then concatenates it. For example, if there was a 1 and I pressed a 2, the string would become 12... this would have been a problem if it weren't for the eval function because we can't form a mathematical operation on strings unless they are turned to numbers.
else{
    	output.textContent += buttonText;
    	return;
	}
}


