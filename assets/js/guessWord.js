//setting game name
let gameName = "Guess The Word";
document.title = gameName;
document.querySelector("h1").innerText = gameName;

// setting game option 
const guessWords = [
    { "word": "Apple", "hint": "A fruit that can be red, green, or yellow" },
    { "word": "Chair", "hint": "You sit on it" },
    { "word": "Stone", "hint": "Hard object found in nature" },
    { "word": "Music", "hint": "You can hear it and dance to it" },
    { "word": "Cloud", "hint": "White and fluffy, found in the sky" },
    { "word": "Dream", "hint": "Happens during sleep" },
    { "word": "Light", "hint": "Lets you see in the dark" },
    { "word": "Train", "hint": "Moves on tracks" },
    { "word": "House", "hint": "A place to live" },
    { "word": "Bread", "hint": "Used to make sandwiches" },
    { "word": "Water", "hint": "Essential for life and drinking" },
    { "word": "Smile", "hint": "A facial expression of happiness" },
    { "word": "Tiger", "hint": "A large cat with stripes" },
    { "word": "Flame", "hint": "Hot glowing body of fire" },
    { "word": "Beach", "hint": "Sandy place near the ocean" },
    { "word": "Clock", "hint": "Tells you the time" },
    { "word": "Lemon", "hint": "A sour yellow fruit" },
    { "word": "Horse", "hint": "An animal you can ride" },
    { "word": "Candy", "hint": "Sweet treat often for kids" },
    { "word": "Nurse", "hint": "Helps take care of patients" },
    { "word": "River", "hint": "A stream of flowing water" },
    { "word": "Brush", "hint": "Used to clean or paint" },
    { "word": "Ghost", "hint": "Spirit from beyond the grave" },
    { "word": "Books", "hint": "You read these" },
    { "word": "Juice", "hint": "A drink made from fruit" },
    { "word": "Table", "hint": "You eat or work on it" },
    { "word": "Drink", "hint": "Something you consume when thirsty" },
    { "word": "Plate", "hint": "Holds your food when eating" },
    { "word": "Paint", "hint": "Used to color walls or art" },
    { "word": "Movie", "hint": "Something you watch on a screen" },
    { "word": "Sleep", "hint": "You do this at night" },
    { "word": "Glove", "hint": "Worn on the hand" },
    { "word": "Crown", "hint": "Worn by a king or queen" },
    { "word": "Shell", "hint": "Found on the beach, hard cover" },
    { "word": "Snowy", "hint": "Covered with white frozen flakes" },
    { "word": "Pizza", "hint": "Cheesy flatbread with toppings" },
    { "word": "Sound", "hint": "What you hear" },
    { "word": "Toast", "hint": "Browned bread" },
    { "word": "Sugar", "hint": "Makes things sweet" },
    { "word": "Plant", "hint": "Grows in soil and needs sunlight" },
    { "word": "Paper", "hint": "You write on it" },
    { "word": "Tiger", "hint": "A large cat with orange fur and black stripes" },
    { "word": "River", "hint": "A long stream of water" },
    { "word": "Laugh", "hint": "What you do when something is funny" },
    { "word": "Dance", "hint": "Move your body to music" },
    { "word": "Chair", "hint": "Used for sitting" },
    { "word": "Fruit", "hint": "Sweet and natural food from trees or plants" },
    { "word": "Voice", "hint": "What you hear when someone speaks" },
    { "word": "Alarm", "hint": "Makes noise to wake you up" },
    { "word": "Books", "hint": "Pages with stories or information" },
    { "word": "Board", "hint": "Flat surface used for writing or support" },
    { "word": "Clock", "hint": "Tells time" },
    { "word": "Watch", "hint": "Worn on wrist to tell time" },
    { "word": "Color", "hint": "Describes red, green, blue, etc." },
    { "word": "Brush", "hint": "Used for painting or cleaning" },
    { "word": "Bread", "hint": "Used in sandwiches" },
    { "word": "Train", "hint": "Runs on tracks" },
    { "word": "Honey", "hint": "Sweet and made by bees" },
    { "word": "Beach", "hint": "Sandy shore beside water" },
    { "word": "Grass", "hint": "Green plant that grows in fields" },
    { "word": "Shirt", "hint": "You wear it on your upper body" },
    { "word": "Shoes", "hint": "Worn on your feet" },
    { "word": "Drink", "hint": "You sip this when thirsty" },
    { "word": "Juice", "hint": "Made from fruits" },
    { "word": "Flash", "hint": "Quick burst of light" },
    { "word": "Glass", "hint": "Used for drinking or in windows" },
    { "word": "Water", "hint": "Essential to life, clear liquid" },
    { "word": "Dream", "hint": "Occurs when you sleep" },
    { "word": "Smile", "hint": "Expression of happiness" },
    { "word": "Peace", "hint": "Calm and no conflict" },
    { "word": "Stone", "hint": "Small piece of rock" },
    { "word": "Couch", "hint": "A comfortable seat for more than one" },
    { "word": "Green", "hint": "A color, also related to nature" },
    { "word": "Black", "hint": "Opposite of white" },
    { "word": "White", "hint": "Opposite of black" },
    { "word": "Sweet", "hint": "Tastes like sugar" },
    { "word": "Sugar", "hint": "Sweet substance for cooking" },
    { "word": "Apple", "hint": "Common round fruit" },
    { "word": "Music", "hint": "Sounds that make you want to dance" },
    { "word": "Sound", "hint": "What you hear" },
    { "word": "Fire", "hint": "Hot and burns things" },
    { "word": "Wind", "hint": "Air moving around" },
    { "word": "Storm", "hint": "Bad weather with wind and rain" },
    { "word": "Night", "hint": "Time after sunset" },
    { "word": "Light", "hint": "Makes things visible" },
    { "word": "World", "hint": "Another word for Earth" },
    { "word": "Tiger", "hint": "Big cat with stripes" },
    { "word": "Peace", "hint": "No war or conflict" },
    { "word": "Plant", "hint": "Living thing that grows in soil" },
    { "word": "Brick", "hint": "Used to build walls" },
    { "word": "Flute", "hint": "A musical instrument you blow into" },
    { "word": "Drums", "hint": "Instrument you hit to make rhythm" },
    { "word": "Skate", "hint": "You glide with these on ice or pavement" },
    { "word": "Grass", "hint": "Covers lawns and fields" },
    { "word": "Horse", "hint": "An animal you can ride" },
    { "word": "Sheep", "hint": "Farm animal that gives wool" },
    { "word": "Truck", "hint": "Large vehicle for carrying goods" },
    { "word": "Bread", "hint": "You eat it with butter" },
    { "word": "Candy", "hint": "Sweet treat, kids love it" },
    { "word": "Cheek", "hint": "Part of the face" },
    { "word": "Dance", "hint": "Movement to music" },
    { "word": "Piano", "hint": "Instrument with black and white keys" },
    { "word": "Voice", "hint": "You use it to talk" },
    { "word": "Plant", "hint": "Has roots and leaves" },
    { "word": "Grill", "hint": "Used to cook outdoors" },
    { "word": "Stone", "hint": "Small piece of rock" },
    { "word": "Cloud", "hint": "Seen in the sky" },
    { "word": "Frame", "hint": "Holds a photo or painting" },
    { "word": "Watch", "hint": "Worn on wrist" },
    { "word": "Shoes", "hint": "Protect your feet" },
    { "word": "Chair", "hint": "Sit on it" },
    { "word": "Table", "hint": "You eat meals on it" },
    { "word": "Laser", "hint": "A focused beam of light" },
    { "word": "Flash", "hint": "Quick burst of light" },
    { "word": "Lunch", "hint": "Meal you eat at noon" },
    { "word": "Toast", "hint": "Crispy bread" },
    { "word": "Skirt", "hint": "Clothing worn on the lower body" },
    { "word": "River", "hint": "Water flows in it" },
    { "word": "Beach", "hint": "Sandy area near the sea" },
    { "word": "Ocean", "hint": "Large body of saltwater" },
    { "word": "Shell", "hint": "Found near the sea" },
    { "word": "Drill", "hint": "Tool to make holes" },
    { "word": "Power", "hint": "Another word for strength or electricity" },
    { "word": "Wings", "hint": "Help birds fly" },
    { "word": "Eagle", "hint": "A large bird of prey" },
    { "word": "Lemon", "hint": "Sour yellow fruit" },
    { "word": "Knife", "hint": "Used to cut food" },
    { "word": "Glove", "hint": "Worn on your hand" },
    { "word": "Shirt", "hint": "Upper body clothing" },
    { "word": "Brush", "hint": "Used for hair or painting" },
    { "word": "Paint", "hint": "Color in liquid form" },
    { "word": "Paper", "hint": "Used to write or draw on" },
    { "word": "Books", "hint": "Full of pages to read" },
    { "word": "Pouch", "hint": "Small bag for carrying items" },
    { "word": "Ghost", "hint": "Spirit of the dead" },
    { "word": "Magic", "hint": "Illusion or supernatural power" },
    { "word": "Laugh", "hint": "You do this when amused" },
    { "word": "Smile", "hint": "Friendly face expression" },
    { "word": "Flash", "hint": "A quick burst of light" },
    { "word": "Phone", "hint": "Used for calling people" },
    { "word": "Cloud", "hint": "Found in the sky, can bring rain" },
    { "word": "Heart", "hint": "Organ that pumps blood" },
    { "word": "Drive", "hint": "Operate a vehicle" },
    { "word": "House", "hint": "Where you live" },
    { "word": "Candy", "hint": "Sweet treat" },
    { "word": "Lemon", "hint": "A sour yellow fruit" },
    { "word": "Chalk", "hint": "Used for writing on blackboards" },
    { "word": "Lamps", "hint": "Provide light" },
    { "word": "Piano", "hint": "Instrument with black and white keys" },
    { "word": "Glove", "hint": "Worn on the hands" },
    { "word": "Brush", "hint": "Used for cleaning or painting" },
    { "word": "Crown", "hint": "Worn by royalty" },
    { "word": "Clock", "hint": "Tells the time" },
    { "word": "Room", "hint": "A space in a building" },
    { "word": "Smile", "hint": "Expression of happiness" },
    { "word": "Wind", "hint": "Moving air" },
    { "word": "Paper", "hint": "Used for writing or drawing" },
    { "word": "Flower", "hint": "A colorful bloom" },
    { "word": "Shirt", "hint": "Clothing worn on the upper body" },
    { "word": "Wallet", "hint": "Holds your money" },
    { "word": "Coins", "hint": "Small money" },
    { "word": "Hatch", "hint": "Opening in a door or wall" },
    { "word": "Cloth", "hint": "Material made from fabric" },
    { "word": "Fruits", "hint": "Food from trees or plants" },
    { "word": "Towel", "hint": "Used to dry yourself" },
    { "word": "Lemon", "hint": "A yellow fruit, sour in taste" },
    { "word": "Guitar", "hint": "A musical instrument with strings" },
    { "word": "Movie", "hint": "You watch this for entertainment" },
    { "word": "Sound", "hint": "Something you hear" },
    { "word": "Dust", "hint": "Small particles in the air" },
    { "word": "Knife", "hint": "Used to cut things" },
    { "word": "Basket", "hint": "Used for carrying items" },
    { "word": "Shovel", "hint": "Used for digging" },
    { "word": "Water", "hint": "Essential for life, clear liquid" },
    { "word": "Music", "hint": "Sounds that make melodies" },
    { "word": "Stars", "hint": "Bright objects in the night sky" },
    { "word": "Storm", "hint": "Severe weather with rain and wind" },
    { "word": "Table", "hint": "Surface for eating or working" },
    { "word": "Stone", "hint": "Hard material found in nature" },
    { "word": "Drums", "hint": "Musical instrument you hit" },
    { "word": "Towel", "hint": "Used to dry your body" },
    { "word": "Beads", "hint": "Small round objects used for decoration" },
    { "word": "Rock", "hint": "Solid material found in the ground" },
    { "word": "Shine", "hint": "To glow or reflect light" },
    { "word": "Brush", "hint": "Used for cleaning or painting" },
    { "word": "Glove", "hint": "Worn on the hands to protect them" },
    { "word": "Fence", "hint": "Barrier around a yard or garden" },
    { "word": "Shirt", "hint": "Clothing worn on the upper body" },
    { "word": "Plant", "hint": "Living thing that grows in the soil" },
    { "word": "Table", "hint": "Used for eating or working" },
    { "word": "Cloud", "hint": "Fluffy white formations in the sky" },
    { "word": "Cake", "hint": "A sweet dessert, often with frosting" },
    { "word": "Water", "hint": "Liquid essential for life" },
    { "word": "Crown", "hint": "Worn by royalty" },
    { "word": "House", "hint": "Place where you live" },
    { "word": "Bicycle", "hint": "Two-wheeled vehicle you pedal" },
    { "word": "Hat", "hint": "Worn on your head" },
    { "word": "Paper", "hint": "Flat material for writing" },
    { "word": "Fruit", "hint": "Natural, edible product from a plant" },
    { "word": "Sun", "hint": "Star that provides light and warmth" },
    { "word": "Star", "hint": "A bright object in the night sky" },
    { "word": "Box", "hint": "Used for storing things" },
    { "word": "Fork", "hint": "Used to eat food" },
    { "word": "Lemon", "hint": "A yellow, sour fruit" },
    { "word": "Carrot", "hint": "A crunchy orange vegetable" },
    { "word": "Guitar", "hint": "Musical instrument with strings" },
    { "word": "Key", "hint": "Used to unlock things" },
    { "word": "Bear", "hint": "A large wild animal" },
    { "word": "Lion", "hint": "King of the jungle" },
    { "word": "Fish", "hint": "An aquatic animal" },
    { "word": "Tiger", "hint": "Large cat with stripes" },
    { "word": "Shovel", "hint": "Tool for digging" },
    { "word": "Owl", "hint": "A nocturnal bird of prey" },
    { "word": "Chair", "hint": "A piece of furniture to sit on" },
    { "word": "Stone", "hint": "A solid material found in nature" },
    { "word": "House", "hint": "A building for people to live in" },
    { "word": "Window", "hint": "An opening in the wall for light" },
    { "word": "Brush", "hint": "Used for cleaning or painting" },
    { "word": "Cloud", "hint": "A fluffy mass of water vapor in the sky" },
    { "word": "Honey", "hint": "Sweet substance made by bees" },
    { "word": "Cake", "hint": "A sweet, baked dessert" },
    { "word": "Clock", "hint": "Tells the time" },
    { "word": "Shirt", "hint": "Clothing for the upper body" },
    { "word": "Moon", "hint": "Earth's natural satellite" },
    { "word": "Peach", "hint": "A juicy orange fruit" },
    { "word": "Knife", "hint": "Used for cutting things" },
    { "word": "Shoe", "hint": "Worn on your feet" },
    { "word": "Towel", "hint": "Used to dry your body" },
    { "word": "Fruits", "hint": "Edible products from plants" },
    { "word": "Fork", "hint": "Used to eat food" },
    { "word": "Lemon", "hint": "A sour yellow fruit" },
    { "word": "Bowl", "hint": "Used to hold food or liquids" },
    { "word": "Wings", "hint": "Used by birds and insects to fly" },
    { "word": "Sand", "hint": "Tiny particles of rock, found at beaches" }
];
const IndexRandomWord = Math.floor(Math.random() * guessWords.length);
let theWord = guessWords[IndexRandomWord].word.toLowerCase();
let numOfTries = 5;
let numOfLetter = theWord.length;
let curruntTry = 1;
let message = document.querySelector(".message");
let numOfHints = 3;

console.log(theWord);


function generateInput() {
    let containerInputs = document.querySelector(".inputs");
    for (let i = 1; i <= numOfTries; i++) {
        let tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try ${i} </span>`;
        if (i !== 1)
            tryDiv.classList.add("disabled-inputs");
        for (let j = 1; j <= numOfLetter; j++) {
            let input = document.createElement("input");
            input.setAttribute("maxlength", 1);
            input.setAttribute("id", `guess-${i}-letter-${j}`);
            input.type = "text";
            tryDiv.appendChild(input);
        }
        containerInputs.appendChild(tryDiv);

        // focus on firsr input 
        containerInputs.children[0].children[1].focus();

        //disabled all input except the current try
        const disabledDiv = document.querySelectorAll(".disabled-inputs input");
        disabledDiv.forEach(input => input.disabled = "true");

        // convert input to uppercase
        const inputs = document.querySelectorAll("input");
        inputs.forEach((inputt, index) => {
            inputt.addEventListener("input", () => {
                inputt.value = inputt.value.toUpperCase();
                // go to next input 
                let nextinput = inputs[index + 1];
                if (inputt.value !== "")
                    if (nextinput) nextinput.focus();
            });

            // move from keys 
            inputt.addEventListener("keydown", (event) => {
                const nextIndex = Array.from(inputs).indexOf(event.target) + 1;
                const prevIndex = Array.from(inputs).indexOf(event.target) - 1;
                if (event.key === "ArrowRight")
                    if (nextIndex < inputs.length) inputs[nextIndex].focus();
                if (event.key === "ArrowLeft")
                    if (prevIndex >= 0) inputs[prevIndex].focus();
                if (event.key === "Backspace") {
                    event.target.value = "";
                    if (prevIndex >= 0) inputs[prevIndex].focus();
                }
            });
        });
    }
}
function checkGuess() {
    let successGuess = true;
    for (let i = 1; i <= numOfLetter; i++) {
        const input = document.querySelector(`#guess-${curruntTry}-letter-${i}`);
        const letter = input.value.toLowerCase();
        const actualLetter = theWord[i - 1];
        // game logic
        if (letter === actualLetter)
            input.classList.add("in-place");
        else if (theWord.includes(letter) && letter != "") {
            input.classList.add("not-place");
            successGuess = false;
        }
        else {
            input.classList.add("no");
            successGuess = false;
        }
    }
    //check if win or lose
    if (successGuess === true) {
        message.innerHTML = `you win !! the word is <span>${theWord}</span>`;
        // add disabled class to all divs 
        let tries = document.querySelectorAll(".inputs >div");
        tries.forEach(ele => ele.classList.add("disabled-inputs"));

        // disabled the check and hint button 
        const check = document.querySelector(".check");
        const hint = document.querySelector(".hint");
        check.disabled = "true";
        hint.disabled = "true";
    } else {
        document.querySelector(`.try-${curruntTry}`).classList.add("disabled-inputs");
        const currentTryInput = document.querySelectorAll(`.try-${curruntTry} input`);
        currentTryInput.forEach(ele => ele.disabled = true);
        curruntTry++;
        const nextTryInput = document.querySelectorAll(`.try-${curruntTry} input`);
        nextTryInput.forEach(ele => ele.disabled = false);
        const currentElement = document.querySelector(`.try-${curruntTry}`);
        if (currentElement) {
            currentElement.classList.remove("disabled-inputs");
            currentElement.children[1].focus();
        }
        else {
            message.innerHTML = `you Lose !! the word is <span style="color:#ff6060">${theWord}</span>`;
            checkButton.disabled = true;
            hintButton.disabled = true;
        }
    }
}
window.onload = generateInput();
const checkButton = document.querySelector(".check");
checkButton.addEventListener("click", checkGuess);
//manage hint game
const hintButton = document.querySelector(".hint");
hintButton.addEventListener("click", getHint);
document.querySelector(".hint span").innerHTML = numOfHints;
function getHint() {
    if (numOfHints > 0) {
        if (numOfHints === 1)
            document.querySelector(".hint-message").innerHTML = guessWords[IndexRandomWord].hint;
        else {
            const enableInputs = document.querySelectorAll(`input:not([disabled])`);
            const emptyInput = Array.from(enableInputs).filter(ele => ele.value === "");
            const randomIndex = Math.floor(Math.random() * emptyInput.length);
            const randomInput = emptyInput[randomIndex];
            const indexToFill = Array.from(enableInputs).indexOf(randomInput);
            enableInputs[indexToFill].value = theWord[indexToFill].toUpperCase();
        }
        numOfHints--;
        document.querySelector(".hint span").innerHTML = numOfHints;
    }
    if (numOfHints === 0) {
        hintButton.disabled = true;
        return;
    }

}
