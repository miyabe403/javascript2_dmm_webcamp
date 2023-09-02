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