
    function dataFUNK()
{
      let carr = {
        make: "dodge",
        model: "viper",
        year: "2021",
        color: "red",
        descript : function() {
            return "the car is a " + this.year + this.color + this.make + this.model;
        }
      };
      document.getElementById("car").innerHTML = carr.descript();
}

function WhileFUnk(n)
{
while(n < 4) {
    document.write(n);
    n++;
}
}


function breakFUNK()
{
        let example = [" Pizza", " Hotdogs" , " hamburgers" , " buritos" , " salads" , " granola"];
        for(var i = 0; i < 6; i++)
        {
            
            if( i == 4)
            {
            document.write("The rest of the food on the list is not good for hangovers..")
            i = 6;
            break;
            }
            document.write(example[i] + "<br>")
        }

  

}
    
