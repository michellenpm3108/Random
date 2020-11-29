// MATH.RANDOM()
//is a js method/function that return a floating-point, 
//pseudo-random number in a range from 0 to less than 1(inclusive of 0, but not 1) 
//It's userful for getting a random number quickly 

// MATH.FLOOR()

// CHALLENGE: Random choose an item from the pet shop for your dog
const shopItems = ['collar', 'bone','toys','biscuit']

let randomNumber = Math.random() * shopItems.length
console.log(randomNumber)
let newNumber = Math.floor(randomNumber)
console.log(newNumber)
let randomItem = shopItems[newNumber]
console.log(randomItem)


let quote = document.querySelector('.quotes')
let button = document.querySelector('.quote-btn')

const quotes = [
    '“The best revenge is not to be like your enemy.” – Marcus Aurelius',
    '“If it is not right, do not do it, if it is not true, do not say it.” – Marcus Aurelius',
    '“Choose not to be harmed — and you won’t feel harmed. Don’t feel harmed — and you haven’t been.” – Marcus Aurelius',
    '“You could leave life right now. Let that determine what you do and say and think.” – Marcus Aurelius',
    '“Be tolerant with others and strict with yourself.” – Marcus Aurelius',
    '“We are more often frightened than hurt; and we suffer more in imagination than in reality.” – Seneca',
    '“If a man knows not which port he sails, no wind is favorable.” – Seneca',
    '“No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.” – Seneca',
    '“This is our big mistake: to think we look forward to death. Most of death is already gone. Whatever time has passed is owned by death.” – Seneca',
    '“Life is very short and anxious for those who forget the past, neglect the present, and fear the future.” – Seneca',
    '“Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.” – Epictetus',
    '“First say to yourself what you would be; and then do what you have to do.” – Epictetus',
    '“Curb your desire—don’t set your heart on so many things and you will get what you need.” – Epictetus',
    '“Don’t explain your philosophy. Embody it.”- Epictetus',
    '“I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.” – Cato',
    '“When we are no longer able to change a situation, we are challenged to change ourselves.” – Viktor Frankl',
    '"No great thing is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig, I answer that there must be time. Let it first blossom, then bear fruit, then ripen." - Epictetus',
    '"A gem cannot be polished without friction, nor a man without trials." ― Seneca',
    '"Because a thing seems difficult for you, do not think it impossible for anyone to accomplish." – Marcus Aurelius',
    '"If you hear that someone is speaking ill of you, instead of trying to defend yourself you should say: ‘He obviously does not know me very well, since there are so many other faults he could have mentioned’.” ― Epictetus',
    '"Wealth consists not in having great possessions, but in having few wants." — Epictetus',
    '“You have power over your mind—not outside events. Realize this, and you will find strength.” – Marcus Aurelius',
    '"We should always be asking ourselves: “Is this something that is, or is not, in my control?” — Epictetus',
    '"It is the quality rather than the quantity that matters." — Seneca',
    '"Difficulties strengthen the mind, as labor does the body." ― Seneca',
    '"The mind that is anxious about future events is miserable." — Seneca',
    '"It’s not what happens to you, but how you react to it that matters." — Epictetus',
    '"Look back over the past, with its changing empires that rose and fell, and you can foresee the future too." — Marcus Aurelius',
    '"The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are." ― Marcus Aurelius',
    '"Whatever happens to you has been waiting to happen since the beginning of time. The twining strands of fate wove both of them together." — Marcus Aurelius',
    '"Remember: Matter. How tiny your share of it. Time. How brief and fleeting your allotment of it. Fate. How small a role you play in it." — Marcus Aurelius'
]
 function showQuote(){
    let randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
    quote.innerHTML=randomQuote
 }

 button.addEventListener('click',showQuote)

