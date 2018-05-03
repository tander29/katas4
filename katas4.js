let test = document.createElement("h1");
test.textContent = "Hello Katas4";
document.body.appendChild(test);

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function kataArray(question, callFunction) {

    let headElement = document.createElement("h3");
    document.body.appendChild(headElement);
    headElement.textContent = question;

    let returnQuestion = document.createElement("div");
    document.body.appendChild(returnQuestion);
    returnQuestion.textContent = JSON.stringify(callFunction);
}

function kataString(question, callFunction) {

    let headElement = document.createElement("h3");
    document.body.appendChild(headElement);
    headElement.textContent = question;

    let returnQuestion = document.createElement("div");
    document.body.appendChild(returnQuestion);
    returnQuestion.textContent = callFunction;
}

function kata1() {
    let array = gotCitiesCSV.split(",");
    return array;
}
kataArray("1. Display gotCitiesCSV as array", kata1());

function kata2() {
    let array = bestThing.split(" ");
    return array;
}
kataArray("2. Display an array of words from the sentence in bestThing", kata2());

function kata3() {
    let newstring = gotCitiesCSV.replace(/,/g, ";");
    return newstring;
}
kataString('3. Display gotCitiesCSV as string, replace "," with ";"', kata3());

function kata4() {
    let newstring = lotrCitiesArray.join(" ");
    return newstring;
}
kataString("4. Display a CSV string from lotrCities", kata4());

function kata5() {
    let newarray = lotrCitiesArray
    let answer = newarray.slice(0, 5);
    return answer;
}
kataArray("5. Display the first 5 cities in lotrArray (didn't say as string or array)", kata5());

function kata6() {
    let newarray = lotrCitiesArray
    newarray.slice(-5);
    return newarray;
}
kataArray("6. Display the last 5 cities in lotr Array", kata6());

function kata7() {
    let newarray = lotrCitiesArray.slice(2, 5);
    return newarray;
}
kataArray("7. Display cities 3rd to 5(including 5? or up to 5?)", kata7());

function kata8() {
    let newarray = lotrCitiesArray.splice(2, 1);
    return lotrCitiesArray;
}
kataArray("8. Like the Orcs, use splice remove Rohan lotrArray", kata8());

function kata9() {
    //since it is a small array could have just counted, but figured this is better practice
    const myindex = lotrCitiesArray.findIndex(lotrCitiesArray => lotrCitiesArray === "Dead Marshes");
    lotrCitiesArray.splice(myindex+1);
    return lotrCitiesArray;
}
kataArray("9. Using Splice, remove all cities after Dead Masrshes in lotr", kata9());


function kata10() {
    lotrCitiesArray.splice(2, 0, "Rohan");
    return lotrCitiesArray;
}
kataArray("10. Use splice to add Rohan after Gondor, thanks Gandolf", kata10());
//realized at this point i I altered my original array with the slices and maybe a few other things, made a new array for a quick fix for display, need to move on with katas
function kata11() {
    let removed = lotrCitiesArray.splice(5, 1);
    lotrCitiesArray.splice(5, 1, "Deadest Marshes");
    return lotrCitiesArray;
}
kataArray("11. Using splicerename Dead Marshes to Deadest Marshes", kata11());

function kata12() {
    let removed = bestThing.slice(0, 14);
    return removed;

}
kataString("12. Use slice, display the first 14 characters from the best Thing", kata12());

function kata13() {
    let removed = bestThing.slice(-12);
    return removed;

}
kataString("13. Use slice display the last 12 characters of bestThing", kata13());

function kata14() {
    let removed = bestThing.slice(23, 38);
    return removed;
}
kataString("14. Display the 23rd-38th character bestThing", kata14());

function kata15() {
    let removed = bestThing.substring(23, 38);
    return removed;

}
kataString("15. Repeat 14 but with substring", kata15());

function kata16() {
    let removed = bestThing.substr(23, 15);
    return removed;
}
kataString("16. Repeat 14 but with substr", kata16());

function kata17() {
    let onlyindex = bestThing.indexOf("only");
    return onlyindex;
}
kataString("17. Display index of 'only'", kata17());

//does this mean to put in array, find last element name, and use as index, or just look at the array? and then display it
//not sure what find and display means, does find mean use methods/tools to find, or just look up to question 13 answer?
function kata18() {
    //I am using the easy method, as # 13 above returned the last word
    //could put into an array, get the last name, turn into string, then do the below, or could just do it
    let findLast = bestThing.lastIndexOf("bit");
    let show = bestThing.substring(findLast);
    return show;
}
kataString("18. Find and display last word", kata18());


function kata19() {
    //this one is a doozy, look up regex later, and arrow functions
    let newArray = gotCitiesCSV.split(",");
    let vowelCities = newArray.filter(words => /aa|ee|ii|oo|uu/.test(words));
    return vowelCities; 
}
kataArray("19. Display lotr cities with double Vowell's", kata19());

function kata20(){
    let newArray = lotrCitiesArray.filter(words => /(or)\b/.test(words));
    return newArray;
}
kataArray("20. display all lotr cities that end in or",kata20());

function kata21(){
    let newArray = bestThing.split(" ")
    console.log(newArray)
    let answer = newArray.filter(words => /^b/.test(words)); //this is regex
    console.log
    return answer; 
    // this works too-let answer = newArray.filter(words => words.startsWith("b"));
}
kataArray("21. come back later to hard questions",kata21());

function kata22(){
    let trueResult= "Yes";
    let noResult = "No";
    if(lotrCitiesArray.includes("Mirkwood")) {
        return trueResult;
    }else{
        return noResult;
    }
}
kataString("22. Return Yes/No if Mirkwood is in lotrArray",kata22());;

function kata23(){
    let trueResult= "Yes";
    let noResult = "No";
    if(lotrCitiesArray.includes("Hollywood")) {
        return trueResult;
    }else{
        return noResult;
    }
}
kataString("23. Return Yes/No if Hollywood is in lotr cities", kata23());

function kata24(){
    newIndex = lotrCitiesArray.findIndex(city => city ==="Mirkwood");
    return newIndex;

}
kataString("24. Display index of Mirkwood in lotr",kata24());


function kata25(){
    let newArray = lotrCitiesArray.filter(words => /([" "])/.test(words));
    return newArray;
   
}
kataString("25. Find and display the first lotr city with more than 1 word", kata25());

function kata26(){
    lotrCitiesArray.reverse();
    return lotrCitiesArray;
}
kataArray("26. Display lotr array in reverse order",kata26());

function kata27(){
    lotrCitiesArray.sort();
    return lotrCitiesArray;
}
kataArray("27. Display lotr array alphabetically",kata27());

function kata28(){
    lotrCitiesArray.sort(function(a,b){
       return (a.length - b.length);     
    });
    return lotrCitiesArray;
}
kataArray("28. Sort by # Characters in city",kata28());

function kata29(){
    lotrCitiesArray.pop();
    return lotrCitiesArray;
}
kataArray("29. Remove thatlast city from lotr using pop",kata29());

function kata30(){
    lotrCitiesArray.push("Deadest Marshes");
    return lotrCitiesArray;
}
kataArray("30. Use push to add back popped from 29",kata30());

function kata31(){
    lotrCitiesArray.shift();
    return lotrCitiesArray;
}
kataArray("31. Use shift to remove first item in lotr cities, like what the Dark lord intended",kata31());

function kata32(){
    lotrCitiesArray.unshift("Rohan");
    return lotrCitiesArray;
}
kataArray("32. Put back the city of manflesh using unshift", kata32());








