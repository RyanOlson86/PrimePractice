console.log('Test unit 5');

let card0 = {
    suit: 'hearts',
    number: 2
} // end object

let card1 = {
    suit: 'spades',
    number: 1
}

function isRed(cardToCheck){
    console.log('is inRed: ', cardToCheck);
    if(cardToCheck.suit === 'hearts' || cardToCheck.suit === 'diamonds'){
        console.log ('Card is red!');
        return true;
    } else {
        console.log('Card is NOT red!');
        return false;
    }
}

console.log(isRed(card0));
console.log(isRed(card1));