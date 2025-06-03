/* 
참과 거짓 조건문 문법
if(조건식){\
    조건식이 참일때 실행문
}else{
    조건식이 거짓일때 실행문
}
*/
// 아이디가 admin이면 관리자님 어서오세요
// admin이 아니라면 관리자 페이지접근불가 출력
const userId = 'admin';
if(userId == 'admin') /* userId가 admin과 같냐?라고 질문 */ {
    console.log ('관리자님 어서오세요.'); 
}else{
    console.log('관리자페이지 접근불가');
}

//사용자 로그인 유무 판단 프로그램
// 로그인 유 isLogin 값 true 아니면 false
const isLogin = true;
if(isLogin){
    console.log('사용자가 로그인되어있습니다');
}else{
    console.log('사용자가 로그아웃되어있습니다');
}

//어떤 수를 2로 나눴을때 나머지 값이 0과 같으면 모두 짝수, 아니면 홀수 
const userNum = Number(prompt('좋아하는 숫자를 입력하세요.'))
console.log(userNum);
if(userNum%2 === 0){
    console.log('당신이 좋아하는 숫자는 짝수입니다.');
}else{
    console.log('당신이 좋아하는 숫자는 홀수입니다.');
}