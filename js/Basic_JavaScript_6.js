function coffeeShop(typebeans, typecreamer)
{
    this.beans = typebeans;
    this.creamer = typecreamer;
}

var customer1 = new coffeeShop("Light Roast" , "Oat Milk");



function MyFunction()  { // main function
 coffeedis(); //call to 1st nested function
            function coffeedis() {  //1st nested function
                function plus_one() //2nd nested function
                {
                    var example1 = prompt("Would you like to find out what our coffee shop offers? yes/no")

                    var outcome = example1 == "yes" ?
                    "We offer " + customer1.beans + " beans " + " and home made " + customer1.creamer : "Sorry we couldn't help you.";
                   
                   
                    document.getElementById("keywords_constructors").innerHTML = outcome;

                }

                plus_one();// call to nested function
                
            }
        }