// 연산자 25/05/16
//증감 연산자 (단항)
//let a = 1;
//let b = 10;
//console.log(a,b);
//b = ++a; //1증가하고 1증가를 먼저하고 a를 b에 대입 하겠다 (a를 1증가해서 2가 되었는데 b에 대입하니깐 기존값이 없어지고 오른쪽의 있는 값(++)만 갖게되서 새로운 값이 된것이다 )
//console.log(a,b); // 2 2 가 왜 떴을까 ? 
//b = a++; // 해석)연산을 먼저 수행하고 1 증가시켜라 () 
//console.log(a,b);
//a = --b;
//console.log(a,b);
//=======================예제 2
//let x = 5;
//let y = ++x; //1증가된 x값을 대입받는 y변수 => x는 5 ,y는 6으로 호출하고싶은데 결과값이  6 6 이 나왔다 => 해결방법은 ? (밑에 다시 쓰겠다)
// 해결방법 ) 증감연산은 x변수 자체에 영향을 주기 때문에 일회성 연산으로 +1을 붙여서 계산하고 x에 영향을 주지 않게 y에 대입한다
//let y = x+1;  
//console.log(x,y); // 결과값 5 6

// y = x++;
// console.log(x,y);// 결과값 6 5

// x = ++y;
// console.log(x,y);// 결과값 6 6

// x++; 
// console.log(x,y); // 결과값 7 6

// --y; // 증감연산자는 대입이 없어도 변수에 영향을 준다
// console.log(x,y); // 결과값 7 5

// x+1; // 더하기, 빼기, 곱하기, 나누기 등 일반 산술 연산자는 대입연산자가 없으면 변수에 영향을 주지 않는다
// console.log(x,y); // 결과값 

//증감연산자는 대입없이 썼을때 그 자체에 
//산술연산자로 쓰면 대입을 주지 않는 것이다
// ===================== 증감연산자 연습문제
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
// 예제1) num1, num2, num3, num4의 값은? 11 19 31 39
num1++;
num2--;
num3++;
num4--;
console.log(num1,num2,num3,num4); 

// 예제2) num1, num2, num3, num4의 값은? 21 20  / 31 39
num1 = ++num2;
num2 = num1++; // num1를 먼저 num2에 보내고 num1 계산해라
console.log(num1,num2,num3,num4);

// 예제3) num1, num2, num3, num4의 값은? 21 20 42 42
num3 = num1+num2;// num1과 2 더하고 num3에 대입해라 
num4 = ++num3; //num3을 증가하고 num4에 대입해라
console.log(num1,num2,num3,num4);

// 예제4) num1, num2, num3, num4의 값은? 53 42 43 41
num1 = ++num3 + 10; // num3 1 먼저 증가하고 더하기 10을해서 num1에 대입해라 (53)
num2 = --num4 + 1;
console.log(num1,num2,num3,num4);
// ================================복합대입 연산자
console.log('================')
let number = 10;
// number = 15; // 기존값을 제거하고 단순 새로운 값 삽입 X (지양한다)
// number = 5; // 위와 동일한 형태이다
// number = number + 5; / 기존값을 유지하고 원하는 계산을 추가한다 (10+5를 계산해서 number에 대입하는것) 
number +=5; // 복합대입 활용 (위와 결과 동일)
console.log(number);// 결과값 -> 15 이다
number -= 5; //('빼기 복합' 이라고 한다) //number = nmumber-5; "(해석)넘버-5를 넘버에 대입할것이다"
console.log(number); // 10  

number *= 5; // 곱하기 복합  // number = number*5; "(해석)기존 넘버의 5를 곱해서 대입한다"
console.log(number);// 결과값 50

number /= 5; // 나누기 복합 // number = number/5; "(해석)기존 넘버의 5를 나눠서 대입한다" 
console.log(number);// 결과값 10

number %= 5; // 나머지 복합 // number = number%5; "(해석)기존 넘버의 5를 나머지 값을 대입한다" 
console.log(number);// 결과값 0

