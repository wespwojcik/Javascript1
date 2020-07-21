function kvpFunk() 
{ 

    var person1 = {
        Name:"wes",
        age:"26",
        Weight:"200 Lbs",
        Voice:"Manly"
    };
    delete person1.Name;
    document.getElementById("dictionary").innerHTML = person1.Name;
}