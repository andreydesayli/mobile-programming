//   1. PROMISE

function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

async function messages() {
  let msg = await helloWorld();
  console.log(msg);
}

messages();


// 2. FETCH
const ambilDataUser = () => {
  fetch("https://reqres.in/api/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      console.log(users);
    });
};

ambilDataUser();


// 3. ASYNC AWAIT
//  const ambilDataUser = async () => {
//   let response = await fetch("https://reqres.in/api/users");
//   users = await response.json();
//   console.log(users);
// };
// ambilDataUser(); 

// 4. CLASS
class Orang1{
  constructor(nama, umur){
    this.nama = nama;
    this.umur = umur;
  }

  bekerja (){
    console.log (`${this.nama} sedang bekerja seperti biasa`);
  }
}

let user1 = new Orang1('Andrey', 20);

user1.bekerja();
  

// 5. INHERITANCE

   class Orang{
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    
    tidur () {
      console.log (`${this.nama} sedang tidur`);
    }
    makan () {
      console.log (`${this.nama} sedang makan`);
    }
  }
  
  class Pelajar extends Orang {
    constructor(nama,umur,namaSekolah) {
      super(nama, umur);
      this.namaSekolah = namaSekolah;
    }
  
    belajar () {
      console.log (`${this.nama} belajar di ${this.namaSekolah}`);
    }
  
  }
  
  let user = new Pelajar('John', 17, 'Unklab');
  
  console.log(user.nama);
  console.log(user.umur);
  console.log(user.namaSekolah);
  
  