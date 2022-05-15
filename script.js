const quotes = [
    ["Before you marry a person you should first make them use a computer with slow Internet service to see who they really are.","person","computer","marry"],
    ["If you find a good wife you’ll be happy If not you’ll become a philosopher.","wife","philosopher","become"],
    ["Adults are always asking children what they want to be when they grow up because they’re looking for ideas.","children","ideas","looking"]
];

const randomNum = Math.floor(Math.random() * quotes.length);

let testSentence = quotes[randomNum][0].split(' ');
const keyWord1 = quotes[randomNum][1];
const keyWord2 = quotes[randomNum][2];
const keyWord3 = quotes[randomNum][3];

const nounOne = document.getElementById(noun-one);
const nounTwo = document.getElementById(noun-two);
const verb = document.getElementById(verb);
const button = document.getElementById(button);


testSentence = testSentence.map(word => {
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

console.log(testSentence);

