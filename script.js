const quotes = [
    ["Before you marry a person you should first make them use a computer with slow Internet service to see who they really are.","person","computer","marry"],
    ["If you find a good wife you’ll be happy If not you’ll become a philosopher","wife","philosopher","become"],
    ["Adults are always asking children what they want to be when they grow up because they’re looking for ideas","children","ideas","looking"]
];

const nounElem1 = document.getElementById('noun-one');
const nounElem2 = document.getElementById('noun-two');
const verbElem = document.getElementById('verb');
const button = document.getElementById('button');
const sillyQuote = document.getElementById('silly-quote');

button.onclick = function() {
    const randomNum = Math.floor(Math.random() * quotes.length);

    let origSentence = quotes[randomNum][0].split(' ');
    const keyWord1 = quotes[randomNum][1];
    const keyWord2 = quotes[randomNum][2];
    const keyWord3 = quotes[randomNum][3];

    sillyQuote.hidden = false;

    nounOne = nounElem1.value;
    nounTwo = nounElem2.value;
    verb = verbElem.value;

    origSentence = origSentence.map(word => {
        if (word === keyWord1) {
            return nounOne;
        } else if (word === keyWord2) {
            return nounTwo;
        } else if (word === keyWord3) {
            return verb;
        } else {
            return word;
        }
    })

    sillyQuote.innerHTML = origSentence.join(' ');
}


