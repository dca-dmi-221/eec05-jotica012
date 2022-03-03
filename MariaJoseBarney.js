'use strict'
//1
/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";

function wordCutter(word) {
    word = word.split("");
    console.log(word);

    /* let random = word
        .map(item => ({item, sort: Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)
    
    console.log(random)*/

    function wordCutter(word) {
        word = word.split("");
        console.log(word);

        let random = word
            .map(item => ({
                item,
                sort: Math.random()
            }))
            .sort((a, b) => a.sort - b.sort)
            .map(({
                item
            }) => item)

        console.log(random)

    }

    wordCutter(testWord);
    /*     const wordLength = word.length;
        const indexes = [];
        for (let i = 0; i < word.length; i++) {
            let isIndex = true;

            while (isIndex) {
                let random = Math.random()*(wordLength-1);
                let randomIndex = Math.round(random);
                if (indexes.includes(randomIndex)){
                     random = Math.random()*(wordLength-1)
                     randomIndex = Math.round(random);
                }
                else {
                    indexes.push(randomIndex);
                    isIndex = false;
                }
                
            }
            
        } */


}
/*testWord = testWord.split("")
    console.log (testWord);
   // :)*/


//2
/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    let minusList = wordsList.map(element => element.toLowerCase());
    targetWord = targetWord.toLowerCase();
    targetWord = normalizeString(targetWord);
    console.log(minusList)
    console.log(minusList.some(element => targetWord.toLowerCase() === element))
}

function normalizeString(targetWord) {
    return targetWord = targetWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
wordSearcherIgnoreCase(testTargetWordA, testWordsList);
wordSearcherIgnoreCase(testTargetWordB, testWordsList);
wordSearcherIgnoreCase(testTargetWordC, testWordsList);


//3
/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let totalLetters = 0;
    wordsList.forEach(word => totalLetters += word.length);
    const averageSize = totalLetters / wordsList.length;

    const sortedWords = wordsList.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
    })

    return {
        averageSize,
        shortest: sortedWords[0],
        longest: sortedWords[sortedWords.length - 1],
    }
    // :)
}
console.log(wordLengthClassifier(testSampleList))
//4
/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

/*console.log("";
console.log("");
console.log("EX4");*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(palabra) {
    let poliWord = palabra.toLowerCase().split("").reverse().join("");
    if (poliWord === palabra) {
        console.log("The Word" + palabra + "is polidrome")
    } else {
        console.log("The Word" + palabra + "in not polindrome")
    }
}

palindromeVerifier (onVerificationWordA);
palindromeVerifier (onVerificationWordB);
palindromeVerifier (onVerificationWordC);
palindromeVerifier (onVerificationWordD);

// ;)


//5
/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/

let containerTestObject = {
    list: ["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function lettersCounter(objectContainer) {
    let vocal = 0;
    let consonant = 0;

    for (let letterTest = 0; letterTest < objectContainer.list.length; letterTest++) {
        for (let i = 0; i < objectContainer.list[letterTest].length; i++) {
            let sameLetter = objectContainer.list[letterTeste][i].toLowerCase();

            if ("a" == sameLetter||"e" == sameLetter||"i" == sameLetter||"o" == sameLetter||"u" == sameLetter){
                vocal++
            }
            else if ("b"== equalLetter||"c"== equalLetter||"d"== equalLetter||"f"== equalLetter||"g"== equalLetter||"h"== equalLetter||"j"== equalLetter||"k"== equalLetter||"l"== equalLetter||"m"== equalLetter||"n"== equalLetter||"p"== equalLetter||"q"== equalLetter||"r"== equalLetter||"s"== equalLetter||"t"== equalLetter||"v"== equalLetter||"w"== equalLetter||"x"== equalLetter||"y"== equalLetter||"z"== equalLetter){
                consonant++;
            }
            
        }
        
    }
    let output = [vocal, consonant];
    return output;


}

lettersCounter(containerTestObject);

//6
/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿", "cómo", "estás", "?"];
let wordArrayB = ["te", "ves", "igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
    const lists = listA.concat(listB);
    console.log(lists);
}
arrayJoiner(wordArrayA, wordArrayB);

//7
/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana", "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
    let posAnagrama = []
    listOfWords.forEach((word,number) => {
        const arrayWordsOrganized = word.split("").sort().join("")
        const arrayMethodsOrganized = wordExplore.split("").sort().join("")
        if (arrayWordsOrganized === arrayMethodsOrganized) {
            posAnagrama.push(number)
        }
    })
}


//8
/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA: ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB: ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    // :)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

//9
/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    // :)
}

//10
/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor", "firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}