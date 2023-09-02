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

// letのスコープ 
// letではブロックスコープ（ローカルスコープ）の変数を宣言
function foo() {
  let x = "webcamp"
  {
    let y = "hello webcamp"
  }
  console.log(x)
  console.log(y)
}

foo()