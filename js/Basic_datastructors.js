
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


function breakFUNK()
{

    function innerFUNK()
    {
        let example = [" Pizza", " Hotdogs" , " hamburgers" , " buritos" , " salads" , " granola"];
        for(var i = 0; i < 6; i++)
        {
        
            while(i < 4) {
            let num = i + 1;
            document.write( "Hangover food option number " + num + example[i] + "<br>");
            break;
        }

            if( i == 4)
            {
            document.write("The rest of the food on the list is not good for hangovers..")
            i = 6;
            }
        }
    }
document.getElementById("kitkat").innerHTML = innerFUNK();

}