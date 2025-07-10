// 🔹 Tytuł testu
console.log("=== Test: Symbole ===");

// 🔸 Twój kod testowy:
const main = () => {


    class Dog {
        constructor(id,name, age, breed, isAdopted) {
            this.id=Symbol(`dog-${id}`); // Unikalny identyfikator dla każdego psa
            this.name = name;
            this.age = age;
            this.breed = breed;
            this.isAdopted = isAdopted || false; // Domyślnie false, jeśli nie podano
        }
        bark() {
            console.log(`${this.name} says Woof! Woof!`);
        }
        getAge() {
            return this.age;
        }
        getBreed() {
            return this.breed;
        }
        getIsAdopted() {
            return this.isAdopted;
        }
        getId() {
            return this.id;
        }
    }
    const myDog = new Dog(1,"muma", 3, "Lablador", true);
    // myDog.bark();
    // console.log("My dog's age is:", myDog.getAge());
    // console.log("My dog's breed is:", myDog.getBreed());
    // console.log("Is my dog adopted ?:", myDog.getIsAdopted() ? "Yes" : "No");
    console.log(`myDog's id is:`, myDog.getId());

    class Test {
        constructor(text, number) {
            this.text = text;
            this.number = number;
        }
    }

    const firstTest = new Test("1", 1);
    if (firstTest.text==firstTest.number) console.log("Test passed: Text and number are equal");
    if (firstTest.text===firstTest.number) console.log("Test passed: Text and number are strictly equal");
    else console.log("Test failed: Text and number are not strictly equal");

    console.log("--------------------------------------------------------------------------------------")

    let age=10;
    let canVote = age >= 18 ?"Yes, you can vote!" : "No, you cannot vote yet.";
    console.log(canVote);

    console.log("--------------------------------------------------------------------------------------")
    let i =0;
    while (i<5){
        console.log(i);
        i++;
    }
    console.log("--------------------------------------------------------------------------------------")

    let games = ["Football", "Basketball", "Tennis"];
    for (let i of games) {
        console.log(games);
    }
    console.log("--------------------------------------------------------------------------------------")
    let obj ={
        a: 1,
        b: 2,
        c: 3
    }
    for (let key in obj) {console.log(`key: ${key} value: ${obj[key]}`);}

    console.log("--------------------------------------------------------------------------------------")

    let score = 85;
    if (score >= 90) {
        console.log("You got an A!");
    } else if (score >= 80) {
        console.log("Great job! You got a B!");
    } else if (score >= 70) {
        console.log("Good effort! You got a C!");
    } else {
        console.log("Keep trying! You can do better!");
    }



};

main();
