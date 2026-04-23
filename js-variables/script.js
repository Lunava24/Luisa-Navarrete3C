function function1() {
    const firstName = "Luisa";
    const favoriteColor = "Blue";
    let currentLocation = "México";
    let mood = "Lazy";
    console.log(`I'm ${firstName}, I live in ${currentLocation}, my favorite color is ${favoriteColor}, and right now I feel ${mood}.`);
    currentLocation = "casas grandes";
    mood = "Happy"
    console.log(`I'm ${firstName}, I live in ${currentLocation}, my favorite color is ${favoriteColor}, and right now I feel ${mood}.`);
}

function function2() {
    const companyName = "Dairy Queen";
    const foundingYear = "1940";
    let isActive = true;
    let fundingAmount = undefined;
    console.log(`I work in ${companyName}, it was found at ${foundingYear}, I'm actually ${isActive} and ${fundingAmount}`);
}

function function3() {
    let number = 5;
    number = (((number * 2) + 10) / 2) - number;
    alert(number);
}
