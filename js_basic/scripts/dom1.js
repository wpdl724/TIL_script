//DOM EVENT 
//HTML 태그에서 JS로 동적 제어 하고 싶은 대상만 변수로 만든다. 
// 회원만 주문되는 주문하기 버튼 알고리즘
// 
// (비회원인 경우) 주문하기 버튼을 클릭했을때 '회원만 주문할 수 있습니다' 메세지 출력 하고 싶다면? 
// 이벤트 리스너 -> 리스너(Listener)란?  특정이벤트가 발생했을 때 실행 할 함수를 의미한다
// 주문하기 버튼 == DOM 객체변수 
//클릭했을 때 == 이벤트 (HTML , Javascript)
//회원만 메세지 출력 == 함수
const buytBtn = document.querySelector('#buyBtn'); //해석) id(#) buyBtn을 문서(document)에서 차장서 대입해라 byBtn이라는 상수에다가!  //이벤트 만들때 쓸 부분!
console.log(buytBtn); //변수 정상 확인 꼭 확인해라!!
// 버튼 onclick 이벤트리스너로 호출할 함수 생성
function userOrderMsg(){
    return console.log('회원만 주문가능합니다. 로그인 해주세요.');
}
console.log(`===================== 연습문제1 : 마우스 이벤트 `);
//결제하기 클릭시 '결제 완료되었습니다' 출력 알고리즘
//아이디중복확인 클릭시 '아이디가 중복되지 않습니다. 사용하셔도 좋습니다. 출력 알고리즘 
const payBtn = document.querySelector('#payBtn');
console.log(payBtn);
function payMsg(){
    return console.log('결제가 완료되었습니다');
}
const idBtn = document.querySelector('#idBtn');
console.log(idBtn);
function idChkMsg(){
    return console.log ('아이디가 중복되지 않습니다. 사용하셔도 좋습니다.');
}

console.log(`===================== 연습문제2 : 키보드 이벤트1 `);
// 리뷰 입력창에 키보드를 눌렀을때 '50자 이상 입력하세요' 출력 알고리즘
const userReviewInput = document.querySelector('input[name*=review]');
console.log(userReviewInput);
function review50Msg(){
    return console.log('50자 이상 입력하세요');
} // 1.객체 생성 const 2. 이벤트 생성  onkeydown  3. 함수 function 생성 

console.log(`===================== 연습문제3 : 키보드 이벤트2 `);
// id 입력창 객체 준비후 키보드를 아무키나 입력했을때 '아이디는 영어로 시작해야합니다' 출력 알고리즘
const userId = document.querySelector('input[name*=id]');
console.log(userId);
function idEnMsg(){
    return console.log('아이디는 영어로 시작해야합니다.');
}
//pw 입력창 객체 준비후 키보드를 아무키나 입력했을때 '비밀번호는 특수문자 포함 12글자 이상 입력하세요' 출력 알고리즘
const userPw = document.querySelector('input[name*=pw]');
console.log(userPw);
function pw12Msg(){
    return console.log('비밀번호는 특수문자 포함 12글자 이상 입력하세요.');
}

console.log(`===================== 연습문제4 : 기타 이벤트`);
// focus 특정요소에 포커스(커서 활성화) 됐을 경우
//userId.style.border = '3px solid green'; // 즉시 실행 테스트용
userId.style.outline ='none';
function focusGreen(){
    return userId.style.border = '3px solid green';
}
function blurGray(){
    return userId.style.border = '1px solid gray';
}

console.log(`===================== 연습문제5 : 쇼핑몰 상품 수량 입력 알고리즘`);
// 기본 수량 1
// 사용자가 숫자 입력을 위해서 커서를 두면 배경색 노랑 변경 -> onfocus
// 커서를 빼면 배경색 흰색 -> onblur
const itemNum = document.querySelector('input[name*=item]');
console.log(itemNum); // 정상인지 확인하기
function focusBgYellow(){
    return itemNum.style.backgroundColor = 'yellow';
}
function blurBgWhite(){
    return itemNum.style.backgroundColor = 'white';
}
// 문서가 로딩되었을때 실행함수
function loadMsg(){
    return alert('문서 로딩 완료')
}

console.log(`===================== 이벤트와 콜백 함수`);
// 객 체-> 이름 -> 함수 
const googleJoin = document.querySelector('.google_join');
//자바스크립트에 작성하는 객체 이벤트 문법
// 객체.addEventListener('이벤트' 콜백함수);
//addEventListener이벤트 작성시 'on' 없이 이벤트만 작성한다.
googleJoin.addEventListener('click',googleGo );
function googleGo(){
    return window.open('https://accounts.google.com','_blank');
}

console.log(`===================== 이벤트와 콜백 함수 - 네이버 , 카카오`);
const naverJoin = document.querySelector('.naver_join');
const kakaoJoin = document.querySelector('.kakao_join');
kakaoJoin.addEventListener('click',kakaoGo);
naverJoin.addEventListener('click',naverGo);
function naverGo(){
    return window.open('https://nid.naver.com', '_blank');
}
function kakaoGo(){
    return window.open('https://accounts.kakao.com')
}

console.log(`===================== 이벤트와 콜백 함수 - 현재 페이지 변경방법`);
//1. 객체
const fileLink = document.querySelector('.file_link');
console.log(fileLink);
// 2. 이벤트
fileLink.addEventListener('click',link0520);
// 3. 함수
//Js에서 상대경로 연결시 js파일 기준이 아닌 js 가 연결된 html파일이 저장된  위치를 기준으로 상대 경로를 작성한다
function link0520 (){
    return window.location.href='../bom1.html'; //상대주소 html 기준으로 
}
console.log(`===================== 이벤트와 콜백 함수 -현재 창에서 변경`);
const indexLink = document.querySelector('.index_link');
const readmeLink = document.querySelector('.readme_link');
console.log(indexLink,readmeLink);
indexLink.addEventListener('click',linkIndex); // click  , 함수의 이름을 적는것 
readmeLink.addEventListener('click',readmeGo);
function linkIndex (){
    return window.location.href= 'index.html';
}
function readmeGo (){
    return window.location.href = '../README.md';
}
/* 상품 수량 증가 알고리즘  */
// 1. 수량 초기값 1
const numBtn =  document.querySelector('#num_btn');
const numInput = document.querySelector('input[name=num]') //class가 없으니깐 input 속성선택자 넣기
console.log(numInput,numBtn);
numInput.value = 1;// 초기값이므로 이벤트 없이 바로 작성 

// 2. +버튼 클릭시 수량이 1씩 증가해야 한다
numBtn.addEventListener('click',numPlus);
function numPlus(){
    //수량이 1씩 증가한다
    //기존의 input 값이 항상 1증가 해야한다  -> 기존 input의 값 numInput 이다
    // 1. 증감연산자 활용
    //return numInput.value = ++numInput.value; // 계속 2로 머물러있다
    // 2. 더하기 연산자와 형변환 메서드 활용법
    console.log(typeof numInput.value);
    return numInput.value =  Number(numInput.value)+1;
}
//빼기 연습 
const numBtnMinus = document.querySelector('#num_btn_minus'); 
console.log(numBtnMinus);
numBtnMinus.addEventListener('click',numMinus); // -`버튼 클릭시
function numMinus(){ // 클릭할때 부르려고 썼다 함수 이름작성 
    // 수량이 1씩 감소해야한다
    return numInput.value = Number(numInput.value)-1;
}