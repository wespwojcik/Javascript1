function myFunkadd()
{

    var example =  2 + 2;
    document.getElementById("demo").innerHTML = "2 + 2 = " + example;
}

function myFunkminus()
{

    var example2 = 2 - 2;
    document.getElementById("demo2").innerHTML = " 2 - 2 = " + example2; 
}

function myFunkmult()
{

    var example3 = 2 * 2;
    document.getElementById("demo3").innerHTML = " 2 * 2 = " + example3;
}

function myFunkdiv()
{

    var example4 = 2 / 2;
    document.getElementById("demo4").innerHTML = " 2 / 2 = " + example4;
}

function myFunkinc()
{

    var example5 = 75;
    example5 ++;
    document.getElementById("demo5").innerHTML = example5;
}
function myFunkdec()
{
    var example6 = 75;
    example6 --;
    document.getElementById("demo6").innerHTML = example6;

}

function myFunkRand()
{

    var x = Math.random();
    document.getElementById("demo7").innerHTML = x;


}

function myFunkmod()
{

    var zee = 20 % 5;
    document.getElementById("demo8").innerHTML = zee;


}