/* 1) Napišite funkciju koja, s obzirom na datum (u formatu MM/DD/YYYY), vraća dan u tjednu. 
Svaki naziv dana mora biti jedan od sljedećih stringova: "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota" ili "Nedjelja".:
*/
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function isValidDate(date) {
    // First check for the MM/DD/YYYY format
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date))
        return false;

    // Parse the date parts to integers
    let parts = date.split("/");
    let day = parseInt(parts[1], 10);
    let month = parseInt(parts[0], 10);
    let year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};
let dateInput = prompt('Enter a date with MM/DD/YYYY format').trim();
const date = dateInput,

    getWeekDay = s => {
        const [MM, DD, YYYY] = s.split('/'),
            date = new Date(YYYY, MM - 1, DD)
        return date.toLocaleDateString('hr-HR', { weekday: 'long' });
    }

isValidDate(dateInput) ? console.log(date + ' je ' + capitalizeFirstLetter(getWeekDay(date))) : alert('Unos nije valjani datum, ispravan format : MM/DD/YYYY');

/* 2) Napravite funkciju koja prima ime kao string i provjerava koliko je dobro dano ime. 
Prethodno učitani objekt abecednih rezultata dostupan ispod. Zbrojite slova imena da dobijete ukupan rezultat.
*/
const scores = {
    "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
    "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25, "N": 450,
    "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405, "U": 11, "V": 10,
    "W": 10, "X": 3, "Y": 210, "Z": 23
};

let nameInput = prompt('Enter a name to score').trim();

function nameScore(scores, name) {
    let sum = 0;
    for (const c of name.toUpperCase()) {
        if (Object.keys(scores).includes(c)) {
            sum += scores[c];
        }
    }
    switch (true) {
        case (sum <= 60):
            console.log("NOT TOO GOOD", sum);
            break;
        case (61 <= sum && sum <= 300):
            console.log("PRETTY GOOD", sum);
            break;
        case (301 <= sum && sum <= 599):
            console.log("VERY GOOD", sum);
            break;
        case (600 <= sum):
            console.log("THE BEST", sum);
            break;
        default:
            console.log("BAD NAME");
            break;
    }
}
nameScore(scores, nameInput);

/*3) Napravite funkciju koja određuje ispunjava li narudžbu za kupnju besplatnu dostavu. 
Narudžba je prihvatljiva za besplatnu dostavu ako ukupni trošak kupljenih artikala prelazi 50,00 USD.*/

function freeShipping(order) {
    const sum = Object.values(order).reduce((sum, price) => sum + price);
    return (sum > 50);
}
const order = {
    'Shampoo': 5.99,
    'Rubber Ducks': 15.99,
    'TV': 300
};

console.log(freeShipping(order));

/* 4) Napišite funkciju koja preokreće sve riječi u rečenici koje počinju određenim slovom (pripaziti na velika i mala slova). */
let sentenceInput = prompt('Enter a sentence to reverse words starting with given letter').trim();
let letterInput = prompt('Enter the letter');

function reverseStartingWith(str, char) {
    var words = [];
    words = str.toLowerCase().match(/\S+/g);
    var result = "";
    for (var i = 0; i < words.length; i++) {
        (words[i].startsWith(char.toLowerCase())) ? result += words[i].split('').reverse().join('') + " " : result += words[i].split('').join('') + " ";

    }
    return result
}

console.log(reverseStartingWith(sentenceInput, letterInput));
