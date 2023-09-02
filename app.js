 let hello = "Hello, World"; 
 alert(hello);
 
 //【変数に代入できるコードの例】
 
 // 整数を代入する 
let int1 = 1;
alert(int1);

// 負数を代入する 
let int2 = -10;
alert(int2);

// 小数点を代入する 
let float1 = 3.14;
alert(float1);

//【四則演算の書き方】

// 文字列を代入する 
let str1 = 'JavaScriptを覚えよう';
alert(str1);

// 足し算 
alert(4 + 3);

// 引き算 
alert(8 - 5);

// 掛け算 
alert(2 * 6);

// 割り算 
alert(10 / 2);

//【文字列を結合する】  
alert('Hello' + 'World');

let str2 = 'Hello';
let str3 = 'World!!';
alert(str2 + str3);

//【条件分岐】
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}  
// 条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行

//【繰り返し処理】
//【while文の記述】
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

//【do...while文の記述】
// do{
//   最低1回は行われる処理
// }while(条件式);

//【for文の記述】 
let i;
let num2 = 0;

for(i = 1; i < 11; i++){
  num2 = num2 + i;
}

alert('1から10まで足し算した結果は' + num + 'です');