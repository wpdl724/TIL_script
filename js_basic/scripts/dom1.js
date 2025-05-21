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
