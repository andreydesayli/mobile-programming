//#1 and #2-------------------------------------------------------------------------
// DESTRUCTURING (ARRAY & OBJECT) dan Destructuring dengan mengambil sebagian item (Array and object)

/* Destructuring memungkinkan kita untuk membongkar isi dari array dan object yang terdapat pada beberapa variabel
   Cara ini bisa memungkinkan kita untuk menghemat penulisan code
*/

// Array
    
// No. 1
// Untuk contoh yang pertama, array di create dengan nama opening
let  opening = ["Welcome", "to", "Suvin", "House"];
let [salam, word] = opening;

console.log(salam);  // output : Welcome
console.log(ucapan); // output : to

// No. 2
// Untuk contoh yang kedua, output yang ditampilkan adalah sama tetapi dengan cara yang berbeda
let  [salam, word] = ["Welcome", "to", "Andrey", "House"];

console.log(salam);  // output : Welcome
console.log(ucapan); // output : to

// No. 3
// Sama seperti contoh array sebelumnya, array akan di create dengan nama opening
let  opening = ["Welcome", "to", "Billy", "House"];
/* Lalu, ada variabel yang di deklarasi yaitu salam dan ucapan,
    dimana, didalam variabel tersebut, kita bisa assign masing-masing nilai
    dengan cara memanggil array beserta no index yang kita inginkan
    seperti cara di bawah ini
*/
let salam = opening[0];
let ucapan = opening[2];

// seperti yang kita pelajari sebelumnya kita mulai dari 0,1,2,3 dan seterusnya
// dan untuk menampilkan Welcome dan Billy, kita memanggil index ke 0 dan ke 2

console.log(salam);  // output : Welcome
console.log(ucapan); // output : Billy

// Object 

// Destructing bisa dilakukan terhadap object

// No. 1

// seperti pada contoh dibawah ini kita bisa melakukan destructuring terhadap objek
let vehicle = {nama: 'Car', warna: 'Blue'};

let {nama, warna} = vehicle;

console.log(nama);  // output : Car
console.log(warna); // output : Blue

// NO. 2

//jadi kita juga bisa melakukan destructuring terhadap objek tanpa melakukan deklarasi pada baris yang sama.
let nama, warna;
const vehicle = {nama: 'Car', warna: 'Red'};

({ nama, warna}= vehicle);

// No. 3
let dog = {nama: "Choco", type: "Pomeranian", color: "Black"};

// jadi kita memasukan data dari objek ke dalam variabel yang baru dengan menggunakan dot notation

let nama = dog.nama;
let type = dog.type;
let color = dog.color;

console.log(nama);  // output : Choco
console.log(type);  // output : Pomeranian
console.log(color); // output : Black

//#3-------------------------------------------------------------------------
// DESTRUCTURING ARRAY DENGAN DEFAULT VALUE
/*Default value hanya bekerja jika nilai dari suatu variable itu tidak ada atau undefined*/

let fullName, age, isAlive; // kita membuat 3 variable

// Untuk membuat default value kita mengisikannya di bagian kiri dari destructuring 
[fullName = "Jungkook", age = 25, isAlive] = [,,"true"];
console.log(fullName); // outputnya menjadi Jungkook karena defaultnya adalah Jungkook. 
                    // jadi walaupun tidak diberi value tetap yang akan menjadi output adalah Jungkook sebagai default value
console.log(isAlive); // outputnya menjadi true. Kita tidak harus menaruh default value kepada variable, kita bisa taruh valuenya di sebelah kanan destructuring
                     // bila kita tidak mengisi value di keduanya maka akan muncul output undefined.


// contoh 2
let a, b;

[a=5, b=7] = [,1];
console.log(a); // output = 5
console.log(b); // output = 1

// DESTRUCTURING OBJECT DENGAN DEFAULT VALUE


let student = {
    name : "Cantika" //kita membuat value untuk nama yaitu Cantika
}
// Dibawah ini merupakan default value dari objek student.
// Jadi, ketika objek student tidak diberikan value, maka nilai defaultlah yang akan ditampilkan
let { name = "Bunga", fakultas = "Informatika", tingkat = 3} = student; 

console.log (name); // Output = Cantika
                    // Output tidak bernilai Bunga karena Bunga merupakan default value yang akan muncul ketika value utama tidak diberikan atau undefined
console.log (fakultas); // Output = Informatika.
                        // Disini output yang diberikan merupakan default value karena kita tidak memberikan nilai utama pada variabel fakultas
console.log (tingkat); // Output = 3

// contoh 2
let uang = {
    jajan: 5000,
    spp: 300000
}

let {jajan = 2500, spp = 250000, tabungan = 40000} = uang;
console.log (jajan); // output : 5000 karena kita mengisi valuenya
console.log (spp); // output : 300000 karena kita mengisi valuenya
console.log (tabungan); // output : 40000 karena kita tidak mengisi valuenya sehingga undefined sehingga yang ditarik adalah default value


//#4-----------------------------------------------------------------------------
//Destructuring dengan menggunakan rest operator
// let array1 = ["Apple", "is", "very", "delicious"];
// let [Name,...others] = array1;
// console.log(Name);
// console.log(others);

//we made an array with the name array1, and the arguments inside is "Apple", "is", "very", "delicious".
//then we made 'Name' as the parameter, and 'others' as the rest parameter to be equal to array1.
//then we console log.

// let fruit = {
//     name: "Apple", 
//     color: "Red",
//     taste: "Sweet",
// };

// let {name,...others} = fruit;
// console.log(name);
// console.log(others);

//we created an object with the fruit with the properties (name, color and taste). and we assigned 
//value (Apple, red, and sweet).
//To destruct we made 'Name' as the parameter, and 'others' as the rest parameter to be equal to fruit.
//so name is the 1st parameter = to the 1st property, and Others is the rest of the properties in the array fruit.
//then we console log.

// let array1 = ["Apple", "is", "very", "delicious"];
// array1.push("and", "Orange", "as", "well");
// let [Apple,x ,y, z,a,...orange] = array1;
// console.log(Apple,x,y,z,a);
// console.log(orange);

//we made an array with the name array1, and the arguments inside is "Apple", "is", "very", "delicious".
//and then we push to the array, ("and", "Orange", "as", "well)".
//then we made 'Apple,x,y,z,a' as the parameter, and 'orange' as the rest parameter to be equal to array1.
//then we console log.

let array1 = ["Apple", "is", "very", "delicious"];
array1.shift()
array1.unshift("Watermelon")

let [...Watermelon] = array1;
console.log(Watermelon);

//we made an array with the name array1, and the arguments inside is "Apple", "is", "very", "delicious".
//Then we use shift to remove apple, and then we use unshift to replace 'apple' with 'watermelon'.
//Then we made the rest parameter to be equal to array1.
//then we console log.