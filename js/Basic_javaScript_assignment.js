
var example1;
var timeexample;
var returnanswer;

//example1 = document.getElementById("pizza").value;

function get_Example() 
{
   // timeexample = document.getElementById("timeee").value;
    example1 = document.getElementById("pizza").value;
    //alert(example1);

  if ( example1 <= 10 )
  {
    returnanswer = "Your pizza's will be done in 20 minutes";
  }
  else
  {
    returnanswer = "You can't order more than 10 pizza's";      
  }
  document.getElementById("pizzaanswer").innerHTML = returnanswer;
}

function time_function()
{
  var time = new Date().getHours();
  var reply;
  console.log(time);
    if(time < 12 == time > 0)
    {
      reply = "its morning , we are closed";
    }
    else if (time > 12 == time < 20)
    {
        reply = "we are open till 8";
    }
    else
    {
        reply = " we are closed now "

    }
  document.getElementById("time_of_day").innerHTML = reply;


}