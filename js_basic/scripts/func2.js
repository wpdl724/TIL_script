/* func2.js */
//let b = 20; //(해석)b라는 변수를 만들어서 b에 20을 대입했다 // 전역변수 (블록{}밖)
//let c = 30; // 전역변수 (블록{}밖)
//function test (){ //블록 선언 (여기부터 지역 시작이다!)
    //let a = 10; //지역 변수 (블록 {} 안) <블록{}안이여서 지역변수이다>
    //console.log(a+b); //지역안이여서 오류가 없고 , b는 전역 변수여서 지역,전역 상관없기때문에 오류가 나지 않는다. }//블록종료 (지역종료)
//test(); //함수 호출(함수밖에서 함수 호출을 해야한다)
//console.log(a); //지역변수는 전역에서 호출하면 에러 => "오류 내용"
//console.log(a+b); //(위) 동일 에러 사항
//console.log(a+c); //전역변수이기 때문에 전역스코프 위치 실행 가능함

//console.log(`--------------------------------------------`)
//let d = 5; //전역변수
//let e = 15;//전역변수
//let f; //전역변수 생성 (값 선언 안된 상태 undefined)
//let g; //전역변수 생성 (값 선언 안된 상태 undefined)
//scopeTest(); //호출(함수실행)
//console.log(f); //호츨후 f의 결과를 실행하는 함수기 때문에 25가 실행된다
//25 => 밑에 있었을땐 undefined였다가 호출이 위로 올라오니깐 결과값이 나타났음
//함수 대기상태는 절대 실행되지 않는다. 호출을 해야만 실행된다!
/* function scopeTest(){
    f = 25; //지역변수
    g = 35; //지역변수
    console.log(d+f); //d는 전역변수 + f는 지역변수 , 결과값 -> ok 5+25=30
    console.log(e+g); // 결과값 -> ok , 결과값15+35=50
} */
//console.log(f);//결과값 -> 에러 , 결과값 25
//console.log(g+d);//결과값 -> 에러 , 결과값 40
//console.log(d+e);//결과값 -> ok ,결과값 5+15=20

console.log(`--------------------------------------------연습2`)
let x = 1; // 전역변수
let y; //y를   '전역변수'로 만든다. 
function func1() { //함수 대기상태 func1
    y = 5; // 전역변수 값에 대입
    // 지역변수 -> let y;라고 전역변수로 선언했으니깐 여기서는 y = 5;라고 작성해야한다.
    console.log(x+y); //함수의 대기 상태이다 (실행되지않고 있음 ) => 에러가 안남 결과값 ->
}
function func2(){ //함수 대기 상태 func2
    let z = 10;
    func1(); //호출 //6
    console.log(x+y+z); //x는 전역이여서 문제 없음 ,y는 func1의 지역변수 이여서 안됨 ,z는 func2의 지역변수이다. 결론은 에러 난다. 그래서 func1을 func2 에 호출해야 위에 y값을 불러올수 있음 
}
func2(); // func2 대기상태인것을 호출하고 싶으면 블록 밖에서 호출을 해야 결과값이 나온다 //결과값 -> 16

console.log(`------------------------------------------헨젤과 그레텔 알고리즘`)
function stroyFunc1(){
    let person = ['헨젤', '그레텔'];
    let src = '조약돌';
    //문제 1) 헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다 
    console.log(`${person[0]}과${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다`);
}
function stroyFunc2(){
    let person = ['헨젤', '그레텔'];
    let src = '빵부스러기';
    //문제 1) 헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다 
    console.log(`${person[0]}과${person[1]}이 ${src}를 이용해서 집을 찾아갔습니다`);
}
stroyFunc1(); // 함수 호출! 
stroyFunc2(); // 함수 호출! 

console.log(`------------------------------------------헨젤과 그레텔 알고리즘 - 매개변수`)
function stroyFunc(src){ //여기서 src -> '생성' 
    let person = ['헨젤', '그레텔'];
    //let src = '빵부스러기'; 
    //문제 1) 헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다 
    console.log(`${person[0]}과${person[1]}이 ${src}를(을) 이용해서 집을 찾아갔습니다`); //여기서 src -> '실행'
}
stroyFunc('조약돌'); // 대입
stroyFunc('빵부스러기'); // 대입

console.log(`------------------------------------------커피 레시피 (기본값 포함)`)
//function coffeeFunc1(){} 함수를 생성한다. 실행결과가 항상 같으므로 매개변수는 선언하지 않는다.
//function coffeeFunc1(data1){} 함수를 생성한다. 결과 실행시 매번 달라지는 데이터가 1개 있기 때문에 매개변수를 1개 생성한다.
//function coffeeFunc1(data1,data2){} 함수를 생성한다. 결과 실행시 매번 달라지는 데이터가 2개 있기때문에 매개변수를 2개 생성한다
//function coffeeFunc1(data1){실행함수 + 매개변수data1활용}
//coffeeFunc1(10);
//(위) 프로그래밍 해석 : 함수를 생성 후 달라지는 데이터 1개에 맞춘 매개변수 1개 생성완료. 이후 함수를 호출하고 매개변수에 대입할 10값을 입력한다\
//매개변수를 생성하고 매개변수에 값을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야 한다
//매개변수 사용시 호출할 때 매개변수에 전달할 대입값을 작성 안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야 한다 function 함수명 (매개변수= 기본값){}
function coffeeFunc1(data1=1, data2=0.5){ //매개변수명 생성 (2개이상이면 ,(콤마)를 사용한다)
    let water = data1+'컵 물을 채운다';
    let espresso = `${data2}샷 에스프레소를 넣는다`;
    console.log(water, espresso);
}
coffeeFunc1(2,1);
coffeeFunc1(3,0.5);
coffeeFunc1(); //기본값 설정

console.log(`------------------------------------------커피 레시피 연습 2(기본값 포함)`)
// Q. 함수 1개로 만들어보기 
//문제1) 카페라떼 1잔 주문완료되었습니다 // 매개변수는 2개이다 
//문제2) 아메리카노 2잔 주문완료되었습니다
//문제3) 녹차라떼 1잔 주문완료되었습니다
//문제4) 아메리카노 4잔 주문완료되었습니다
function coffeeKiosk(menu,num=1){
    const msg = '잔 주문완료되었습니다.'
console.log(menu,num,msg);
}
coffeeKiosk('카페라떼'); //기본값이 아니라 매개변수 생략
coffeeKiosk('아메리카노',2); //기본값이 아니라 매개변수 모두 작성
coffeeKiosk('녹차라때'); //기본값이 아니라 매개변수 생략
coffeeKiosk('아메리카노',4); //기본값이 아니라 매개변수 생략

console.log(`------------------------------------------커피 레시피 연습 3(기본값 포함)`)
// 문제1) 따뜻한 카페라떼 2잔 주문완료되었습니다.
// 문제2) 차가운 아메리카노 1잔 주문완료되었습니다.
// 문제3) 따뜻한 녹차라떼 2잔 주문완료되었습니다.
// 문제4) 차가운 아메리카노 1잔 주문완료되었습니다.
function coffeeKiosk2 (hotIce=['따뜻한','차가운'],menu1,num1=1){
    const msg1 = '잔 주문완료되었습니다.'
    const type = ['따뜻한','차가운'];
    console.log(type[hotIce],menu1,num1,msg1);
}
coffeeKiosk2(0,'카페라떼',2);
coffeeKiosk2(1,'아메리카노');
coffeeKiosk2(0,'녹차라떼',2);
coffeeKiosk2(1,'아메리카노');

console.log(`------------------------------------------함수의 리턴(return)`)
// 더하기 알고리즘
// 함수 내부 {}는 대기장소로 호출하지 않는 한 절대 실행되지 않는다. 
// 함수 외부는 {}가 끝난 위치로 함수를 호출해서 실행 할수 있는 위치다
// 함수 내에서  return을 작성하면 내부의 데이터를 함수 외부로 반환해서 실행시키거나 데이터를 전달하는 것을 말한다
function plusFunc(num){ //대기 장소
    let total = num+1; //1+ 얼마일까?라고 가정하에 작성한 값
    //return console.log(total);
    return total; // return으로 실행 함수가 아닌 값만 보냈다면? 
}
plusFunc(2); //함수 호출
// 호출할때  return이 보낸 반환값을 묶어주는 실행함수를 별도로 작성한다
console.log(plusFunc(2));

console.log(`------------------------------------------함수의 리턴(return) 구구단 알고리즘`)
//문제 ) 1~9까지 식을 한번에 내보내주기 
let dan99 =''; //전역변수 (초기값) 앞으로 문자데이터가 들어올 예정으로 빈문자 초기값으로 설정한것이다// 여기다가 초기값을 작성하는 것이다 -> 초기값이 숫자면 0 문자면 
function dan99Func(num){
    dan99 =`${num}x1=${num*1} ` // let을 안쓰는 이유는 전역 변수에다가 만들었으니깐 작성하지 않는다
    dan99 +=`${num}x2=${num*2} ` // (해석)기존 dan99변수에 우측데이터를 더해서 대입해라
    dan99 +=`${num}x3=${num*3} ` 
    dan99 +=`${num}x4=${num*4} ` 
    dan99 +=`${num}x5=${num*5} ` 
    dan99 +=`${num}x6=${num*6} ` 
    dan99 +=`${num}x7=${num*7} ` 
    dan99 +=`${num}x8=${num*8} ` 
    dan99 +=`${num}x9=${num*9}` 
    return dan99; // 아무것도 안보이는 이유는 값만 작성해서 그런것 (외부로 보내라는 것이지 실행하라는 것은 아님)
}
dan99Func(2); // 구구단 2단  -> 매개변수를 받을 변수를 준비하는 과정이다 .
console.log(dan99Func(2)); //호출
console.log(dan99Func(7)); //호출

console.log(`------------------------------------------함수의 리턴(return) 할인율 계산기`)
//27500원을 입력했을때 (가격은 달라질 수 있음)
//입력한 가격에 대한 5%, 10%, 20%, 30%, 40%, 50% 할인율을 동시에 출력해라.
// 10% 할일율 계산법 : 가격 * 09
// 4% 할일율 계산법 : 100-4 = 96 -> 가격 * 0.96
//결과 예시 ) 5% 할인율 결과 : ???원
let discountResult = ''; // 기본값 설정 (빈문자)
function discount (price){
    discountResult = `5% 할인율 결과 : ${price * 0.95}원`
    discountResult += `10% 할인율 결과 : ${price * 0.9}원 `
    discountResult += `20% 할인율 결과 : ${price * 0.8}원 `
    discountResult += `30% 할인율 결과 : ${price * 0.7}원 `
    discountResult += `40% 할인율 결과 : ${price * 0.6}원 `
    discountResult += `50% 할인율 결과 : ${price * 0.5}원`
    return discountResult;
}
discount(27500);
console.log(discount(27500));