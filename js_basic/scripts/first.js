//======================================================== 1일차 25/05/12
// 변수
// var 변수명 = 대입 값;  ->  기본 형태
// var 변수선언키워드
// = 대입연산자(오른쪽에서 왼쪽으로 값 대입)

// 생성과 대입을 별도로 나눠서 처리함//
var num;  //num 변수를 생성 한다 //var -> 생성 키워드  
num = 1; //`(변수에 값을 대입)` 이미 생성된 ver 는 제거하고 num부터 쓰기 // 1을 num에 대입힌다 // ver생성 했으니깐 또 적을 필요가 없어서 제거한 것이다

//(해석) var 생성할 것 이다 num이름의 변수로 생성하겠다. 그리고 ;생성이 여기서 끝났다 . num1;를 대입할 것이다
// (해석 순서)- 위에서부터 해석
// 1. var 생성한다   2. num 이름의 변수로 생성하겠다   3. 생성이 여기서 끝났다.   
// 4. num 이름의 변수로 생성하겠다. 6. 1; 값을 num의  변수에 5. 대입할것 이다.

//(가정)새로 만들고 싶다면//
var num2 = 2; //`(생성과 대입)`생성과 대입이 동시에 작성한 것 
// (해석) var 생성할것이다 num2 변수로, 2;를 대입할 것이다

// 콘솔 실행 함수
// console.log(num2);
//객체.함수(실행하는 값);
//콘솔창(객체)에 num2변수값(실행값)을 log로 출력(실행함수)하겠다.
// console.log(num); 
// ========================================================= 2일차 25/05/13
var bowl;
bowl = "쌀";
// console.log(bowl); //쌀
bowl = "콩";
// console.log(bowl); //콩
// 자바 스크립트는 절차적 언어이기 때문에 CSS처럼 우선순위에 따라 최종 결과 값만 인식하는 것이 아닌 실행 함수의 작성 위치에 따라 다른 변수값을 인식할 수 있다
var a = 1;
var b = 5; // 문자 a,b,c 가 아니라 변수 b를 a에 대입하는 것이다 (변수를 대입한다는 것은 변수값을 대입한다는 의미)
var c = 10;
c = a; // a를 c에 대입한다
console.log(a); // b의 값을 받기 전 'a의 기존 값'을 출력한것이다. -> 1 이다.
a = b; // a를 b에 대입한다
console.log(b);
b = c; // c를 b에 대입한다.
console.log(c);
// ========================================================= 자료형 구분 내장 함수 typeof (내장함수 ->  내외에 함수가 있다는의미 )
// console .log(typeof a)  // 뒤에 공백있는 이유는 그 데이터를 알고 싶다는 것 (a의 데이터는 무엇이냐?)
// console.log(typeof (b));
// console.log('===========데이터 공부')
// var d; 
// console.log(typeof d) // 값이 할당되지 않은 상태 undefined (오류점검용으로 사용한다)
// d = a;
// console.log('d의 값은'+ d); //'d의 값은' + d (앞에 'd의 값은'(따옴표있는 d) 문자로 처리 뒤에 d는 변수로 처리한다)
// console.log('a의 값은 => ' + a); 
// console.log('b의 값은 => '+ b); 
// console.log('c의 값은'+ c); 

// console.log('------------데이터 공부 2')
// console.log(1+1) // (숫자+숫자) = 더하기 결과 (2)
// console.log('1'+1) // 문자+숫자 = 연결 결과 1과 1 (1 1)

// console.log('------------데이터 공부 3')
// var box1 = 10; // 박스1에 10을 대입한다  <box1=10 , box1은 Number타입이다 라고 출력하고 싶으면? => >
// var box2 = 'hello';
// var box3 = 'javascript';
// var box4; 
// console.log('box1='+box1+', box1은 ' +typeof box1 +'타입이다.'); //(해석) box1=10 , box1은 Number타입이다.
// console.log(box2+' '+box3+'는 '+typeof(box2+box3)+'입니다!'); //hello javascirpt는 String 입니다!
// console.log(box4); //undefined 정의 안된 상태 (오류)
// box4 = box2+box3; // box4는 box2,3을 대입하겠다
// console.log(box4); //hellojavascript
// // box4 = null; // 값을 제거 한다
// // box4 = 0; // 숫자 초기화 (데이터 타입 유지)
// box4 = ''; // 문자 초기화 (데이터 타입 유지)
// console.log(box4); 
// console.log(box3.length); // hello의 문자 개수는 ? => 5글자  / javascirpt의 문자 개수는 ? => 10글자 / box4의 문자 개수는 ? => 0 이다
// // 속성이면 -> 객체.속성;
// //함수면 -> 객체.함수();

// console.log('------------데이터 공부 4')
// var num1 = 10;
// var num2 = 20;
// var num3 = 0;
// var total; // 결과 변수 (위 데이터 변수들이 최종 대입 될 대상)
// console.log(num1, num2, num3); // (해석) 10 과 20 과 0
// console.log(num1 + num2 + num3); // (해석) 10+20+0 = 30 <숫자로 안나오게 하는 해결방법은 '' 문자를 넣으면 된다/ 하지만 사용하지는 말자>
// total = num1 + num2; //30이라는 결과값을 내고 싶으면? 계산식을 오른쪽 대입값을 작성하자 (토탈 해석 -> num1과 num2을 total에 대입한다)
// console.log(total); // 30
// console.log("she's gone") // she's gone 을 작성하고 싶다면? -> ""(큰 따옴표)를 앞에 작성해서 구분 해주기

// console.log('------------데이터 공부 5')
// console.log() // 1+1은 2입니다. 1+1 은 정적 언어 / 2인 동적 언어
// console.log('1+1은 '+(1+1)+'입니다.')
// //일반 문자와 프로그램식을 쉽게 작성할 수 있게 하는 템플릿문자열 활용 (1+1은 , 입니다. 는 문자식이고 (1+1)은 숫자식)
// console.log(`1+1은 ${1+1}입니다.`); // 백틱기호 사용  ${프로그래밍식을 작성하는 곳 (동적으로 처리되는 부분)}

// console.log('------------데이터 공부 템플릿연습 -백틱기호 사용하기')
// var num4 = 1;
// var num5 = 2;
// console.log(`변수 num4의 값은 ${num4} 입니다.`); // (문제 1)
// console.log(`num4와 num5의 더한 결과값은 ${num4+num5} 입니다.`); // (문제 2)
// // 문제1) 변수 num4의 값은 1입니다  <1이 동적 언어> <변수 num4의 값은 입니다 부분이 정적언어>
// // 문제2) num4와 num5의 더한 결과값은 3입니다  <3이 동적언어> <num4와 num5의 더한 결과값은 입니다 부분이 정적언어>

console.log('------------데이터 공부 템플릿연습 2')
var subway = 1000;
var coffee = 6500;
var result = subway+coffee; 
// 문제1) 오늘 총 지출액은 ?원 입니다.
console.log(`오늘 총 지출액은 ${(result)}원 입니다.`) // < result는 동적언어> <오늘 총 지출액은 원 입니다. 부분이 정적언어>
console.log('------------ 구구단')
var dan99 = 2;
// 문제2)2x1=2 이런식으로 나타나야한다 <정적언어 -> x1= 이다.> <동적언어 -> 앞에 2 , 뒤에2 >
//       ...
//      2x9=18
// dan99 변수에 어떤 데이터가 들어오든 고정되는 부분은 정적인 데이터로 입력
// dan99 변수에 데이터가 변경될때 함께 달라지는 결과는 ${}으로 프로그래밍식으로 처리
console.log (`${dan99} x 1 = ${dan99*1}`);
console.log (`${dan99} x 2 = ${dan99*2}`);
console.log (`${dan99} x 3 = ${dan99*3}`);
console.log (`${dan99} x 4 = ${dan99*4}`);
console.log (`${dan99} x 5 = ${dan99*5}`);
console.log (`${dan99} x 6 = ${dan99*6}`);
console.log (`${dan99} x 7 = ${dan99*7}`);
console.log (`${dan99} x 8 = ${dan99*8}`);
console.log (`${dan99} x 9 = ${dan99*9}`);