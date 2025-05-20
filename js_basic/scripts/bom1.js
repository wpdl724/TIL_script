//BOM(browser object model) 내장함수
/* const msg1 = window.alert('잠시 기다려 주세요'); //변수가 필요 없다

const msg2 = window.alert('잘못 접근하셨습니다'); // 변수가 필요없다
console.log(msg1); */ 

/* const userAge = window.prompt('나이를 입력하세요')
console.log(userAge); */ //변수가 필요하다

/* const userPrint = window.confirm('인쇄 하시겠습니까?') //변수가 필요하다
console.log(userPrint); */ 

//const userInfo = window.open('https://google.com','_blank'); //변수가 필요없다

//const userWrite = window.document.write('hello js');
//window.document.write('안녕하세요 자바스크립트'); // 변수없이 바로 작성해도 된다. // 변수가 필요 없다
//실행함수가 변수에 대입하는 값이 없거나 일회성으로 한번 동작하고 끝나는 경우는 변수를 선언할 필요 없이 바로 내장함수를 작성해도 된다.
//변수선언이 필요한 BOM 내장함수 : prompt() ,confirm() 이다  / 나머지는 필요가 없다고 생각하면 된다.
//window.print();
//사용자에 따른 인쇄 제한이 있는 사이트라면 인쇄내장함수를 변수에 담아야한다

//=====================================DOM - HTML Node
const pTag = document.getElementsByTagName('p'); //내장함수니깐 (괄호)를 작성해야한다 / 문자여서 따옴표를 괄호안에 넣고 p를 작성한다 / 
//태그를 쉽게 변경하지 않으니깐 const로 작성한것 
const h1Tag = document.getElementsByTagName('h1');
const h2Tag = document.getElementsByTagName('h2');
const spanTag = document.getElementsByTagName('span');
const ulCls = document.getElementsByClassName('group');
const liCls = document.getElementsByClassName('list');
const activeCls = document.getElementsByClassName('active');
const wrapId = document.getElementById('wrap');

// 백그라운드 컬러 각각 변경하기 (연습)//
const dlCls = document.getElementsByClassName('define');
const dtId = document.getElementById('title');
const dtTag = document.getElementsByTagName('dt')
const ddCls = document.getElementsByClassName('contents');

/* // (연습) 선생님이 작성한 변수명 + 속성 //
const define = document.getElementsByClassName('define');
console.log(define);
const title = document.getElementById('title');
console.log(title);
const contents = document.getElementsByClassName('contents');
console.log(contents);
const dtTag = document.getElementsByTagsName('dt')[1]; // 이미 선언할때부터 [1]인덱스처리를 하면 style에서 안써도 된다
console.log(dtTag);
// style
define[0].style = '';
title.style = '';
contents[0].style = '';
contents[1].style = '';
dtTag.style = '';// 이미 선언할때부터 [1]인덱스처리를 하면 style에서 안써도 된다  */

console.log(pTag);
console.log(h1Tag);
console.log(h2Tag);
console.log(spanTag);
console.log(ulCls);
console.log(liCls);
console.log(activeCls);
console.log(wrapId);
console.log(dlCls);
console.log(dtId);
console.log(ddCls);
console.log(dtTag);

//==========================================DOM 객체 속성 
//객체.style = 'CSS속성:값';
pTag[0].style = 'background-color:yellow'; //style은 속성이다 , 괄호가 안들어간다 괄호가 들어가면 함수이다
pTag[1].style = 'background-color:pink';
ulCls[0].style = 'border:2px solid red';
liCls[0].style = 'border-bottom:2px solid orange';
liCls[1].style = 'border-bottom:2px solid green';
liCls[2].style = 'border-bottom:2px solid blue';
liCls[3].style = 'border-bottom:2px solid puple';
activeCls[0].style = 'color:orange';
activeCls[1].style = 'color:green';
wrapId.style ='padding:30px';  // Id이니깐 인덱스를 붙일 필요가 없다
func.style = 'color:red';
dlCls[0].style = 'background-color: green';
dtId.style = 'background-color:red';
ddCls[0].style = 'background-color:skyblue';
ddCls[1].style = 'background-color:black';
dtTag[1].style = 'background-color:yellow'; 

// 위와 같이 style속성을 이용한 CSS는 일반 CSS선택자와 다르게 가장 우선순위가높은 개념으로 적용된다. 적용 후 모습은 개발자도구 F12 에서만 확인 가능하다
//CSS 우선순위 : 자바스크립트 style속성 > ID > Class > Tag 순이다

console.log('============================================== 연습 2');
//ES6 querySelector 이용 DOM 선택하기
const orderOl = document.querySelector('.order');
const orderLi = document.querySelectorAll('.order li'); //중복되지않게 이름명을 앞에 이름명과 비슷하게 추가해서 작성하는 것이 좋다
const orderToday = document.querySelector('#today');
const orderItem = document.querySelector('.order .item'); //부모를 쓰고 item을 작성해야지 안전하다
console.log(orderOl);
console.log(orderLi);
console.log(orderToday); // 인덱스가 나오지 않음 -> 1개여서 
console.log(orderItem);
orderLi[0].style = 'font-size: 2rem';
orderToday.style ='font-weight :700';
orderItem.style = 'font-size:2rem';

console.log(`=================================연습 문제 3`)
// 문제 3) 
// 1.모든 a의 글자색 검정 
// 2. nav 배경색 설정 
// 3.gnb의 자식 li 테두리 두께 1, lnb의 자식 li테두리 두께 2로 설정
// 4. gnb, lnb 각각 다른 배경색
const aMenu= document.querySelectorAll('nav a');
const nav = document.querySelector('nav');
const gnbLi= document.querySelectorAll('.gnb>li'); //CSS 랑 비슷하게 쓰면된다 
const lnbLi= document.querySelectorAll('.lnb>li'); //CSS 랑 비슷하게 쓰면된다 
const gnb= document.querySelector('.gnb'); 
const lnb= document.querySelector('.lnb'); 

console.log(aMenu, nav, gnbLi, lnbLi, gnb, lnb ); 


aMenu[0].style = 'color:#000';
aMenu[1].style = 'color:#000';
aMenu[2].style = 'color:#000';
aMenu[3].style = 'color:#000';
nav.style = 'background-color : pink';
gnbLi[0].style='border:1px solid red';
gnbLi[1].style='border:1px solid red';
lnbLi[0].style='border:2px solid blue';
lnbLi[1].style='border:2px solid blue';
gnb.style='background-color:green';
//lnb.style ='background-color:yellow';
// 객체.속성 = '값';
// 객체.속성.속성 = '값'; 
lnb.style.backgroundColor = 'lime';
lnb.style.padding = '30px';
lnb.style.padding = '30px';
lnb.style.borderTop = '2px solid pink'; 

console.log(`=================================형변환 메서드`)
let a = 10;
let b = "10";
console.log(a, typeof a); // 데이터 타입이 뭔지 알려달라! -> 10 Number
console.log(b, typeof b); // 데이터 타입이 뭔지 알려달라! -> 10 String
//let age = prompt('당신의 나이는?');
//alert(age);
//alert(typeof age);
//prompt로 사용자가 입력하는 값은 무조건 문자(String)으로 처리된다. (암시적 형변환)

//자동으로 형변환 된 데이터타입이 문자인 경우 숫자로 바꾸고 싶다면 명식적형변환 중 숫자로 변환해주는 Number()내장함수를 사용한다.
//Number(숫자로 변환하고 싶은 데이터 또는 함수)
//const age = prompt('당신의 나이는?');

//const age = Number(prompt('당신의 나이는?'));
//(위) 프로그래밍 동작 순서
//1. prompt('당신의 나이는?') : 사용자가 입력한 값을 문자로 자동변환
//2.Number(): prompt가 문자로 변환한 값을 숫자로 명시적 변환 
//3.age = : 변수 age에 숫자로 변환한 값을 대입
//console.log(`올해 당신의 나이는 ${age}세 입니다.`); // age 자체는 문자인데 
//console.log(`내년 당신의 나이는 ${Number(age)+1}세 입니다.`); // 여기서 잠깐 Number로 바꾼 것이다

console.log(`=================================응용 문제 - 쇼핑몰 구입 알고리즘 `)
//상품 1개 가격 기준 15700원
//현재 이벤트 중 1+1 
// 1. 사용자가 구입 할 물건 개수 정하기 
// 2. 개수에 따라 최종 가격 구하기
// 결과값 예 ) 구입할 물건은 ?개이고, 이벤트 상품 ?개가 추가됩니다. 총 결제 가격은 ?원 입니다.
let price = 15700;
const productQa = Number(prompt('구입할 개수를 입력하세요.'));
const eventNum = productQa; // 이벤트 증정개수
const total = price*productQa; // 최종 결제 가격
console.log(`구입할 물건은 ${productQa}개이고, 이벤트 상품${eventNum}개가 추가됩니다. 총 결제 가격은 ${total}입니다.`);