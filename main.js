const quotes = [
    ["Before you marry a person you should first make them use a computer with slow Internet service to see who they really are.","person","computer","marry"],
    ["If you find a good wife you’ll be happy If not you’ll become a philosopher.","wife","philosopher","become"],
    ["Adults are always asking children what they want to be when they grow up because they’re looking for ideas.","children","ideas","looking"]
];

const randomNum = Math.floor(Math.random() * quotes.length);

let testSentence = quotes[0][0].split(' ');
const keyWord1 = quotes[0][1];
const keyWord2 = quotes[0][2];
const keyWord3 = quotes[0][3];

/*
const nounOne = document.getElementById(noun-one);
const nounTwo = document.getElementById(noun-two);
const verb = document.getElementById(verb);
const button = document.getElementById(button);
*/

testSentence = testSentence.map(word => {
    if (word === keyWord) {
        console.log(keyWord);
        return 'frog';
    }
    return word;
})


console.log(testSentence);

