// Creates a function which is returning a random joke as output

const getRandomJoke = () => {

// Creates an array of random jokes
 const jokesArray = ["Why can't your nose be 12 inches long? Because then it'd be a foot.", "What's the best time to go to the dentist? Tooth hurty.", "What does a nut say when it sneezes? Cashew.", "When is a door not a door? When it's a-jar.", "What do you call a group of disorganized cats? A cat-tastrophe.", "How do you make a Swiss roll? Push him down a mountain.", "What do you call a person who tells dad jokes but has no kids? A faux pa.", "Why was the math book sad? Because it had so many problems.", "What did one toilet say to the other toilet? You look flushed.", "Why was the sand wet? Because the sea weed.", "What kind of dinosaur loves to sleep? A stega-snore-us.", "What's a snake's favorite subject? Hisstory.", "What do prisoners use to call each other? Cell phones.", "How does a squid go into battle? Well armed."];


// creates randomJoke variable, which randomizes an element from jokes array
 const randomJoke = jokesArray[Math.floor(Math.random() * 14)];

//  returns a random joke
 return randomJoke;
};

// generates random joke as page paragraph

document.getElementById('random-joke').innerHTML = getRandomJoke();

document.getElementById('generate').addEventListener('click', function() {
    document.getElementById('random-joke').innerHTML = getRandomJoke();
});