/* variable.js */
/* 템플릿 문자열 활용 - 월 , 요일 출력 */
//new Date ();
//getFullYear ();
//getMonth ();
//get Date ();
/* 변수생성 시 기존 변수와 같은 위치에 작성하기 */
var test = new Date(); // 컴퓨터 시간 불러오기
var ye = test.getFullYear();
var mon = test.getMonth(); //컴퓨터는 숫자를 0부터 인식하므로 5월을 숫자 4로 인식한다
var day = test.getDate(); //1부터 인식한다
//console.log(ye); // 2025년
//console.log(`${ye}년 ${mon+1}월 ${day}일`) //문제3) 2025년 5월 14일 
//console.log(`${ye} 입니다.`); // 문제1) 2025년 입니다. 를 작성하기 <동적 -2025>
//console.log(`${ye}년 ${mon+1}월`); // 문제2) 2025년 5월 이 나오게 작성 <동적언어 2025 , 5월> 
//객체의 개수를 체크 할때 보토 0부터 숫자를 인식하지만 특정 속성이나 함수는 1부터 인식하는 종류들도 있다. 대표적인 1부터 인식하는 속성은 문자열의 길이를 체크하는 length 속성이다
//hello.length; 결과는 -> 5 가 나온다.

// =================================ES6 새로운 변수 let, const와 기존 변수 var
var num1 = 10;
var nmu1 = 20;
// var는 중복선언이 가능하다. 하지만 실무에서는 이미 생성한 변수명을 또 중복 선언하는 문제를 내면 안되기 때문에 var는 이를 오류로 선언하지 못해서 가능한 사용을 하지 않거나 주의해서 사용해야 한다
let num2 = 30;
//let num2 =40; (오류의 예시)
//console.log(num2); //console은 왜 밑줄이 안생길까 ? -> console로 선언해서 그렇다
//let 변수 생성키워드는 이미 생성한 변수를 중복선언하지 못하도록 체크하기 때문에 개발자의 실수를 방지 할 수 있다
const num3 = 50;
//const num3; 중복 선언 불가
//num3 = 60;  값 변경 불가 (처음 선언된 값을 끝까지 변하지 않고 유지해야 한다!! -> why? "상수"이니깐)
// const num4; 상수는 생성과 대입이 반드시 동시에 진행되야 한다!! (오류의 예시)
const num4 = 60; //생성과 대입이 동시에 된 올바른 경우

//=============================== 객체 연습
/* //1. 도형 정보 저장 (너비, 높이, 좌표, 모서리, 색상)
let rectangle = { //rectangle 객체변수명은 '콜스택'에 저장된다
    width: 300, //width~color 객체 모든 속성은 '메모리힙'에 저장된다
    height:200,
    x:0,
    y:100,
    border:0, //모서리
    color:'red', // 문자는 값으로 되어있때는 반드시 따옴표를 작성해야한다
}
console.log(rectangle.x); // x 좌표를 가지고 오고 싶을경우
console.log(rectangle.x, rectangle.y); // x , y 좌표를 가지고 오고 싶을경우
//2. 회원정보 저장 (이름, 나이, 성별, 지역)
let user_info = {
    name:'홍길동',
    age:20,
    gender:'남성',
    area:'서울'
}
console.log(user_info.gender, user_info) // 앞에서는 성별에 대한 것만 뜰것이고 뒤에서는 user_info 모든 객체속성이 뜰것이다
//3. 쇼핑몰 상품저장 (상품명, 가격, 재고수량, 색상)
let product = {
    name:'가방',
    price:15000,
    quantity:20,
    color:'red'
}
console.log(product.name, product.quantity)
// 문제1) 가방의 재고수량은 20개이다.
var name = '가방';
var quantity = 20;
console.log(`${product.name}의 재고수량은 ${product.quantity}개 이다.`)

//4. 영화관 좌석 지정 (좌석명, 좌석위치, 좌석가격)
let move_theater ={
    name: '일반석',
    pst: 'd26', //position 약어 - pst
    price:20000,
}
console.log(move_theater);
//문제2) 오늘 일반석 d26번 20000원에 예약했다.
console.log(`오늘 ${move_theater.name} ${move_theater.pst}번 ${move_theater.price}에 예약했다.`); */

//===================================== 배열 공부
//배열 작성법 1. (값은 개수 제한 없음, 최소 2개이상)
//let 배열변수명 = [배열값, 배열값, 배열값];
//const 배열변수명 = [배열값, 배열값, 배열값]; 
const yoil = ['월', '화', '수', '목', '금', '토', '일']
console.log(yoil) //test
console.log(yoil[2])//배열변수명[호출인덱스번호] <내가 불러오고 싶은 요일을 [대괄호]안에 '인덱스'번호를 작성하면 된다>

// 템플릿 문자열로 연습해보기
//문제1) 오늘은 ?요일입니다
console.log(`오늘은 ${yoil[2]}요일 입니다`)
//문제2) 내일은 ?요일입니다
console.log(`오늘은 ${yoil[3]}요일 입니다`)


