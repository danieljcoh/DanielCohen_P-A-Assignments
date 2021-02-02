//#1 RemoveBlanks || Create a function that, given a string, returns all of that string’s contents, but without blanks.

function removeBlanks(myString){

    //how does the comp know wordArray is an array?
    const wordArray = myString.split(" "); 

    return wordArray.join("-");
    //console.log(wordArray.join("-")); 
}

removeBlanks("yo what is up my dude");



//#2 GetDigits || Create a JavaScript function that given a string, returns the integer made from the string’s digits. 

function getDigits(givenString){

    const wordArray = givenString.split("");
    var tempString = "";
    for(var i = 0; i < wordArray.length; i++){
        if(wordArray[i] === '1'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '2'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '3'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '4'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '5'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '6'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '7'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '8'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '9'){
            tempString += wordArray[i];
        }
        if(wordArray[i] === '0'){
            tempString += wordArray[i];
        }
        givenString = tempString;
    }

    return givenString;
}
getDigits("1h2m3n");

//#3 Acronym || Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

function acronym(acroString){
    const wordArray = acroString.split(" "); 
    const firstLetterArray = [];

    for (let i = 0; i < wordArray.length; i++){
        if (wordArray[i] != null){
            firstLetterArray.push(wordArray[i].charAt(0).toUpperCase());
        }
    }
    acroString = firstLetterArray.join("");
    return acroString;
}

//#4 Count Non-Spaces || Accept a string and return the number of non-space characters found in the string. 

function countNonSpaces(nonSpacesString){
    var charCount = 0;
    const wordsToCharArray = nonSpacesString.split("");
    for(let i = 0; i < wordsToCharArray.length; i++){
        if(wordsToCharArray[i] != " "){
            charCount++;
        } else{
            continue;
        }
    }
    return charCount;
}

//#5 Remove Shorter Strings || Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShortStrings(givenArr, lengthValue){

    for(let i = 0; i < givenArr.length; i++){
        if(givenArr[i].length < lengthValue){
            givenArr.splice(i, 1)
            i--;
        } else{
            continue;
        }
    }
    return givenArr;
}


