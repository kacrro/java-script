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
    if (firstTest.text===firstTest.numer) console.log("Test passed: Text and number are strictly equal");
    else console.log("Test failed: Text and number are not strictly equal");
};

main();
