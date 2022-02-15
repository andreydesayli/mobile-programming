let people = ["Greg", "Mary", "Devon", "James"];

//Number 1
for(let a = 0; a<people.length; a++){
    console.log(people[a]);
}
console.log(" ");

//Number 2
people.forEach(function (data) {
    console.log(data)
});
console.log(" ");

// Number 3
people.shift();
console.log(people);
console.log(" ");

//number 4
people.pop();
console.log(people);
console.log(" ");

//number 5
people.unshift("Matt");
console.log(people);
console.log(" ");

// number 6
people.push("Andrey");
console.log(people);
console.log(" ");

//number 7
for(let i=0; i<9; i++){
    console.log(people[i])
    
    if (people[i] === "Mary") {
        break;
    }
}

//Number 8
// console.log(people)
// let people1 = people.slice(2);
// console.log(people1)

//Number9
// console.log(people);
// let people2 = people.splice(2,1,"Elizabeth","Artie");
// console.log(people)

//Number 10
// console.log(people);
// let withbob = ["Bob"]
// let people3 = people.concat(withbob);
// console.log(people3);

//--------------------------
//Part 2
let programming = {
    languages: ["Javascript", "Python", "PHP"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 5,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// number 1
// programming.languages.push("GO");
// console.log (programming.languages);

// number 2
// programming.difficulty = 7;
// console.log (programming.difficulty);


// number 3
// delete programming.jokes;
// console.log (programming);

// number 4
// programming.isFun= true;
// console.log (programming);

//number 5
console.log("no. 5");
let num = -1;
programming.languages.map(funcNo5);

function funcNo5(inp) {
    num++;
    return console.log(num + " - " + inp);
}