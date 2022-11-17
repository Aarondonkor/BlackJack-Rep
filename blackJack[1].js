
    var firstCard = 0;
    var secondCard = 0;
    var sum = 0
    var messageEl = document.getElementById("message-el")
    var sumEl = document.getElementById("sum-el")
    var cardEl = document.querySelector("#card-el") //the value of this is not a string, its ana element
    cards = []
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    var alive = false
    var playerEl = document.getElementById("player-el")
    var player = {
        namee: "Aaron",
        chips: 2000
    }
    playerEl.textContent = player.namee + ": $" + player.chips

    function renderGame()
{

    alive=true;
    if(sum < 21)
    {message = "Sorry, your numbers does not sum 21"}
    else if(sum ===21)
    {message = "Hurray, you got it right"}
    else
    {message = "Your numbers sum up more than 21"}
    messageEl.textContent = message;
    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum;
    for(var i = 0; i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    
}
function startGame()
{
    renderGame();
}
function newCard()
{
    if(alive == true && sum < 21)
{
    thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard)
    renderGame();
}
}
 function getRandomCard()
 {
    var random = Math.floor(Math.random() * 10) + 1
    if(random === 1)
    {
        random = 11;
    }
    return random;
 }
