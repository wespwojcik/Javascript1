
function mouseFunction() 
{
    var ex = " hello "; //asigns a string
    ex += " world "; //concatnates the string 
    var result = ex.fontcolor("blue"); //asigns the string variable "ex" to a variable named "result" and changes the color of the string to blue
        document.getElementById("buttonId").innerHTML = result; //returns the value of the string to the paragraphs id on the HTML document
 }

