// function Person(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
// }

// Person.prototype.greet = function(other) {
//     return 'Hello ' + other.name + ', I am ' + this.name + '!';
// };




// const sonny = new Person('Sonny','sonny@hotmail.com', '483-485-4948');
// const jordan = new Person('Jordan','jordan@aol.com', '495-586-3456');

// // console.log(sonny.greet(jordan))
// // console.log(jordan.greet(sonny))

// Person.prototype.contact = function (){
//     return 'Hello my name is ' + this.name + ',and you can reach me at ' +  this.phone + ' or my email at ' + this.email + '!';
// }

// // console.log(jordan.contact())
// // console.log(sonny.contact())

// const people = [
//     new Person('Sonny','sonny@hotmail.com', '483-485-4948'),
//     new Person('Jordan','jordan@aol.com', '495-586-3456')
// ]

// people.forEach(function(person){
//     console.log(person.contact())
// })



// CARD INSTANCE

function Card (face, suit){
    this.face = face;
    this.suit = suit;
}
const myCard = new Card(5, 'diamonds');



Card.prototype.getImageUrl = function (){
    return `images/${this.point}_of_${this.suit}.png`
}

// console.log(myCard.suit)
// console.log(myCard.point)
// console.log(myCard.getImageUrl())

function Hand(){
    this.cards = []
}

Hand.prototype.addCard =function (newCard){
    this.cards.push(newCard);
}
Hand.prototype.getPoints =function (){
    points = 0
    this.cards.forEach(function(elem){
        if(elem.face == 'jack' || elem.face == 'queen' || elem.face == 'king' ){
            points += 10
        }
        else if(elem.face == 'ace'){
            points += 1
        }
        else{
            points += element.face
        }
    })
    this.cards.forEach(function(elem){
    if(elem.face == 'ace' && points < 12){
        points += 10
        }}
    )
    return points;
}

function Deck() {
    this.cards = [];
    const  suits = ['diamonds','hearts','spades','clubs']
    suits.forEach(function(suit){
        for(let i = 1; i<13;i++){
            this.cards.push(new Card(i, suit))
        }

    })
    this.shuffle()
}

Deck.prototype.draw = function() {
  // remove and return a card from the deck
  return this.cards.pop();
}
Deck.prototype.shuffle = function() {
  // shuffle the deck
  for (let i = 0; i < this,cards.length; i++) {
    const randIndex = Math.floor(Math.random() * i);
    const temporary = this.cards[i]
    this.cards[i] = this.cards[randIndex];
    this.cards[randIndex] = temporary;
  }
}
Deck.prototype.numCardsLeft = function() {
  // return the total number of cards left in the deck
  return this.deck.length 
}


const myHand = new Hand();
myHand.addCard(new Card('ace', 'diamonds'))
myHand.addCard(new Card('jack', 'spades'))
// myHand.getPoints()

const mainDeck = new Deck();
const playerHand = new Hand();
const dealerHand = new Hand();
playerHand.addCard(mainDeck.draw());
dealerHand.addCard(mainDeck.draw());
playerHand.addCard(mainDeck.draw());
dealerHand.addCard(mainDeck.draw());
console.log(`Player has ${playerHand.getPoints()}`);
console.log(`Dealer has ${dealerHand.getPoints()}`);
console.log(`There are ${mainDeck.numCardsLeft()} cards left`)