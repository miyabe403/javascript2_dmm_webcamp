//【再宣言】
// varによる再宣言  
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letによる再宣言 
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// constによる再宣言 
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

//【再代入】  
// varによる再代入 
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// letによる再代入 
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// constによる再代入 
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

//【スコープ】   
// varのスコープ 
// varでは関数スコープ（ローカルスコープ）、グローバルスコープの変数を宣言できます。
// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)

// letのスコープ (例1)
// letではブロックスコープ（ローカルスコープ）の変数を宣言
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// letのスコープ (例2)
// for (let i = 0; i < 10; i++) {     
//   console.log(i) 
// }

// console.log(i)

// constのスコープ 
// constではブロックスコープ（ローカルスコープ）の変数を宣言
//【巻き上げ】  
// JavaScriptには変数の巻き上げ（ホイスティング） があります。
// var str = "webcamp"

// function foo() { 
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo()

// さきほどのコードは次のように記述したものと同じになります。
// 初めのコードでは5行目にvar str = "dmm webcamp"とありましたが、
// 内部的にはvar strの変数宣言の部分が巻き上げられます。 
// var str = "webcamp"

// function foo() { 
//   var str
//   console.log(str)
//   str = "dmm webcamp"
//   console.log(str)
// }

// foo()

//【変数宣言の使い分け】
// letは再代入をする場面において、使用すべきものとなります。
// ０~9までをループによってコンソールに出力するコードです。
// この場合、iをletで宣言する理由はループするたびにiに再代入を行うためです。
for (let i = 0; i < 10; i++) {
  console.log(i);
}