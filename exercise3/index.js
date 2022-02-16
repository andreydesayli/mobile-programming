/* Module merupakan sebuah cara bagi dengan cara mengisolasi
kode dari suatu file ke dalam sebuah file terpisah sehingga kode
tersebut dapat kita export dan import berulang kali
*/

// Export & Import
// --------------------------
// Export
export let name = "Hanbin"; //export menggunakan kata kunci 'export'

// Export pada Object
export let mhs = {
    nama : "John",
    umur : 21,
    alamat : "Jl. Sejahtera",
};

// Export Function
export function salam(mahasiswa) {
    console.log (`Hello, ${mahasiswa}`);
} 

// Export secara terpisah
let nama = "Doe John"; // deklarasi variable

let student = {       // deklarasi objek
    nama : "Doe",
    umur : 20,
    alamat : "Jl. Serta",
};

function greetings(user) {  // deklarasi function
    console.log (`Hy Welcome to the Open House in Snowdrop, ${user}`);
}
// meng-export seluruh code secara bersamaan
export {nama, student, greetings};


// Import
// Import variabel
import {name} from "./index.js";

// Import objek
import {mhs} from "./index.js"

// Import function
import {salam} from "./index.js";

// Import variabel, objek, dan function secara bersamaan
import {name, mhs, salam} from "/index.js";

//====================================

// ini isi file mobil.js
// Export As variabel
const merek = "Honda";
export {merek as brand};

// Export As objek
let mobil = {
    merek : "BMW",
    warna : "Putih",
    nomorPolisi : "DB 1423 B",
    harga : 500000000,
    pajak : true,
};
export {mobil as car};

// Export As function
function pemberitahuan(a) {
    console.log(`Mobil anda ${a}`);
};
export {pemberitahuan as notice};

// Jika ingin meng-import variabel
// maka harus menggunakan alias bukan nama variabel yang lama

// Import
// Import As - Kita akan mengimport file mobil.js
import {
    merek as merekMobil,
    mobil as kendaraanBaru,
    pemberitahuan as notice,
}   from "./mobil.js";

console.log (merekMobil); // Output: Honda
console.log (kendaraanBaru); // Output: {merek: "BMW", warna : "putih", nomorPolisi : "DB 1423 B", harga : 500000000, pajak : true}
notice (kendaraanBaru.merek); // Output: Mobil anda BMW 


//==============================
// Export Default
// Export Default function
// ini isi file perkenalan.js
function intro(name, age){
    console.log(`Perkenalkan nama saya ${name} dan saya berumur ${age} tahun.`);
};
export default intro;

// Bisa juga seperti ini
export default function perkenalan(nama, umur){
    console.log(`Perkenalkan nama saya ${nama} dan saya berumur ${umur} tahun.`);
}

// Export 
export let alamat = "Asrama Crystal";
// Import function yang menggunakan export default
// Meng-import intro dari file perkenalan.js tanpa menggunakan kurung kurawal
import intro from "./perkenalan.js";
intro("Billy",21);

// Meng-import module yang menggunakan export dan export default secara bersamaan
import intro, {alamat} from "./perkenalan.js"



// Asynchronous JS
// ---------------------

// -- setTimeout()

// Proses asynchronous yang sedang/sudah selesai dijalankan, bisa dipanggil kembali menggunakan setTimeout 
/* Code di execute bukan berdasarkan inputnya,
    tetapi cara kerja asynchronous adalah berdasarkan waktu proses
    jika ada satu proses execute membutuhkan waktu yang lama
    maka sambil menunggu proses tersebut, javascript akan meng-execute perintah selanjutnya
*/

// Contoh sederhana asyncronous JS menggunakan setTimeout()
// No 1
setTimeout(() => {
  console.log("Bermain Badminton"); // proses asynchronous
  }, 5000); // tunda selama 5000 milisecond
  console.log("Berjalan");
  console.log("Berlari");
  console.log("Berenang");
  console.log("Bersepeda");
    
  /* Output :
      Berjalan
      Berlari
      Berenang
      Bersepeda
  
      Bermain Badminton
  */
  
  // No 2 
  console.log('Welcome to');
  setTimeout(() => { console.log('Open House')},100) // tunda selama 100 miliseconds
  console.log('Snowdrop');
  
  /* Output :
      Welcome to
      Snowdrop
      Open House
  */
  
  // Promise
  
  /* Penggunaan promise untuk memecahkan masalah pada callback
      Karena, pada callback, semakin banyak callback digunakan
      akan semakin kompleks proses asynchronous begitu juga pada code
  */
  
  // No 1
  let janjian = new Promise((resolve, reject) => {
    if (true) {
      // apa yang dilakukan jika promise fulfilled
      resolve("Berhasil");
    } else {
      // apa yang dilakukan jika promise rejected
      reject("Janji di batalkan");
    }
  });
  
  // No 2
  let progress = 100;
  let download = new Promise((resolve, reject) => {
    if (progress === 100) {
      resolve('Download selesai');
    } else {
      reject('Download gagal');
    }
  });

  // Menggunakan Promise then()

// method then untuk mengetest Promise yang telah dibuat. 
// then akan menghandle hasil eksekusi baik itu berhasil maupun gagal.
// terdapat juga method catch dimana method itu akan menghandle bila terdapat error pada kode
// a
let promise1 = new Promise((resolve, reject) => {
  // resolve berarti Promise telah sukses dijalankan dan mengembalikan sebuah nilai
  // reject berarti promise ditolak dengan alasan yang telah diberikan
  resolve('Berhasil!!');
});

promise1.then((value) => {
  console.log(value);
  // Output = Berhasil!!
});


// b
// ketika menggunakan method then, kita dapat mengembalikan sebuah Promise yang mengizinkan penggunaan method chaining
let janji = "belajar"

let p = new Promise((resolve, reject) => {


  // masukkan promise apa yang ingin dibuat
  setTimeout(() => {
      if (janji === "belajar") { //  jika janji belajar berhasil
          resolve("Nilai bagus") // akan muncul nilai bagus. berarti promise berhasil dijalankan
      }  else {
          reject("Tidak belajar") // karena tidak belajar berarti promise gagal dan menampilkan Tidak Belajar sebagai alasan
      }
  }, 2000)
})

p.then((result) => { // hasil eksekusi baik berhasil atau gagal
  alert(result)
}).catch((error) => { // handle error
  alert(error)
})

// -----------------------------------------------------------------------------
// Promise  Async/Wait

// Async/Await digunakan untuk menangani Promise agar penulisan code lebih efisien dan rapih
// Async membuat sebuah fungsi mengembalikan sebuah Promise
// Await membuat sebuah fungsi menunggu sebuah Promise

// fungsi sebelum mengembalikan sebuah promise
async function myFunction() {
  return "Annyeong";
}
// fungsi yang mengembalikan sebuah promise
function myFunction() {
  return Promise.resolve("Annyeong");
}
// code untuk memanggil fungsi Promsie
myFunction().then(
  function(value) { /* jika promise berhasil dijalankan */ },
  function(error) { /* jika promise terdapat error*/ }
);

// await hanya dapat digunakan didalam fungsi async
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Berhasil!"), 1000)
  });

  let result = await promise; // menunggu sampai Promise resolve atau berhasil dijalankan

  alert(result); // jika berhasil maka akan memberikan output "Berhasil!"
}

f();

// kita tidak dapat menggunakan await pada fungsi biasa tanpa async
function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}



//Class in Javascript
//---------------------------------
//Number 1 ...................................
//first we made a class named Motor, then we defined the Motor with
//an expression named Vario. the variables we use is speed and color. 
// which we call with the keyword 'this'. and then when we want to output the motor
// we call it with the keyword 'name'

let Motor = class Vario {
  constructor(speed, color) {
    this.speed = speed;
    this.color = color;
  }
};
console.log(Motor.name);
// output: "Vario"

//..................................................

//Number 2 ...................................
// Dalam contoh nomor 2 ini kita membuat class dengan nama kotak
// Dan variabelnya ada tinggi dan lebar
class kotak {
  constructor(tinggi, lebar) {
    this.tinggi = tinggi;
    this.lebar = lebar;
  }
// Dalam contoh ini kita akan menghitung luas dari kotak
// jadi ketika kita ingin menghitung luas kita harus menggunakan keywoard "this"
  get luas() {
    return this.hitungluas();
  }
  // untuk menghitung luas kita return tinggi dikalikan dengan lebar 
  hitungluas() {
    return this.tinggi * this.lebar;
  }
}
// disini kita memasukan kotak dengan angka 5 untuk tinggi dan angka 5 untuk lebarnya
const square = new kotak(5, 5);

console.log(square.luas); // jadi outputnya adalah 25

//....................................................

//Number 3............................................
//For this program we will search the number of sides in 
//a polygon. so first we create a class name Polygon, and
//since the number of sides depends on the polygon we use 
//rest parameter for the sides, and then we call it with 'this'.
//we then made a function named 'getsides' and we use for and gave
// the # of sides as a constant and link to this.sides
//then we use yield to output the # of sides. after that we use octagon
//as the polygon and gave its # of sides as 8. after that we console.log it.
class Polygon 
{
  constructor(...sides) 
  {
    this.sides = sides;
  }
  
  *getSides() {
    for(const side of this.sides)
    {
      yield side;
    }
  }
}

const octagon = new Polygon(1,2,3,4,5,6,7,8);

console.log([...octagon.getSides()]); // [1,2,3,4,5,6,7,8]

//....................................................

//Number 4...........................................
// di contoh nomor 4 kita membuat class manusia
// dan kemudian kita meberikan variabel dengan nama berbicara dan makan
// jadi sejak kita menggunakan static, value "return this" outputnya akan selalu undefined
class manusia 
{
  berbicara() 
  {
    return this;
  }
  static makan() 
  {
    return this;
  }
}

let obj = new manusia();
obj.berbicara(); // objek manusia
let berbicara = obj.berbicara;
speak(); // undefined

manusia.makan() // class manusia
let makan = manusia.makan;
makan(); // undefined
console.log(manusia.name); // di bagian ini kita tidak bisa console.log karena static membuat "this" makan dan berbicara undefined