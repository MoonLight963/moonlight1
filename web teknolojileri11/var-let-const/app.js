// Var - Let - Const

/*
    -------------------------- SCOPE (KAPSAM) -----------------------

    -> Global Scope: Her yerden erişebilirsin.
    -> Function Scope: Süslü parantez içindedir.
    -> Block Scope

*/

// var sayi = 10;
// console.log(sayi);

// var a = 5;
// global scope
//her yerden erişebilirsin

// if (true) {
//   var b = 6;
// }
// function method1() {
//     console.log(a);
// }
// method1();

// function method1() {
//     var sayi = 10; //Function Scope
// }
// method1();

// function BlockScope() {
//     var a = 5; //Function Scope
//     if (true) {
//         var b = 6; //Block Scope
//     }
//      while (true) {

//     }

// }

// ---------------------------------------------------------

// Var - Let - Const

// var : function scope -- ram de çok yer kaplar.
//let/const : block scope özelliğine sahiptir.
// function selamVer() {
//     var selam = "Herkese selam"; // function scop
//     if (true) {
//         let b = 10;
//         console.log(b);
//     }

//     console.log(selam);
// }

// selamVer();

// var a = 5;
// var a = 10;
// console.log(a);

// let a = 5;
// var a = 10; // bir kere daha tanımlayamazsın
// console.log(a);

// if (true) {
//     var sehir = "İstanbul";
//     let ilce = "Pendik";
//     console.log(ilce);
// }

// console.log(sehir);

// LET & CONST ARASINDAKİ FARK?

// const (constant) : sabit, değişmez.

// const a = 10;
// a = 15; //değiştiremezsin sabittir
// console.log(a);

// let b = 15;
// b = 7;
// b = 12;
// console.log(b);

// const user = {
//   username: "fatma",
//   password: "12345",
// }
// user = { age: 17 }; //değiştiremezsin hata verir
// user.username = "fatmacakir";
// console.log(user);
