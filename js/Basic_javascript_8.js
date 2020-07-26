function full_sentence() 
{
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence. ";
    var whole = part1.concat( part2 , part3, part4);
    var sliceExample = whole.slice(10, 15);
    sliceExample = sliceExample.toUpperCase();
    document.getElementById("concatenate").innerHTML = sliceExample;
}


function string_method()
{
    var Ex = 200;
    document.getElementById("numbers_to_strings").innerHTML = Ex.toString();
}


function SpecifiedLEN()
{
    var x = 1234554433988888;
    document.getElementById("Method").innerHTML = x.toPrecision(5);
}


function myFunction() 
  {
    var num = 5.56789;
    var n = num.toFixed(10);
    document.getElementById("Fixed").innerHTML = n;
  }

  function myFunctionexample() 
  {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("demo").innerHTML = res;
  }