//main .lang_group기준
//초기 설정 : 한국어 ~ 중국어 옵션 숨기기
// #lang_select 클릭시 .lang_open 보이기
// lang_open이 보이는 상태라면 #lang_select 클릭시 .lang_open 숨기기
// 변수 생성 -> 이벤트 제작 -> 이벤트 만족시 실행함수 (중간중간 콘솔 자주 체크)
const langOpen = document.querySelector('.lang_open');
const langSelect = document.querySelector('#lang_select');
console.log(langSelect,langOpen);
langOpen.style.display = 'none'; //초기 숨기기 설정
//참(보이기), 거짓(숨기기)상태 
let openif = false; // 초기 거짓 (숨겨진)상태
langSelect.addEventListener('click', () =>{
    //langOpen 숨겨진 상태면 보이기
    if(openif==false){
        langOpen.style.display = 'flex';
        openif = true // 상태값 변경
    }else if(openif == true){
        //langOpen 보이는 상태면 숨기기
        langOpen.style.display = 'none';
        openif = false; // 상태값 변경
    }
})
//네이버 로그인 에러 메세지 알고리즘
/* 
조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭시 
조건1 결과) 아이디 또는 전화번호를 입력해주세요.
조건2) 아이디를 입력하고 비밀번호를 입력하지 않고 로그인 클릭시 
조건2 결과) 비밀번호를 입력해주세요.
조건3) 아이디, 비밀번호 모두 입력하고 로그인 클릭시 정보가 틀렸을때 
조건3 결과) 아이디, 비밀번호 입력정보가 잘못되었습니다. 다시 입력해주세요. 
조건4) 조건 3 상황에서 로그인실패가 3회 이상일때 영수증퀴즈와 '아이디(로그인 전화번호, 로그인 전용 아이디), 비밀번호 또는 자동입력방지 문자를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.' 메세지 출력
*/

//조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭시 
// 변수는 총 4개 만들어야 한다 
const userId = document.querySelector('input[name=user_id]');
const userPw = document.querySelector('input[name=user_pw]')
const errorMsg = document.querySelector('.error_msg');
const loginBtn = document.querySelector('#login_btn');
console.log(userId, userPw, errorMsg, loginBtn );

loginBtn.addEventListener('click',()=>{
    /*if(userId.value == '' && userPw.value == ''){
        errorMsg.textContent = '아이디 또는 전화번호를 입력해주세요.'//p태그니깐 textContent로 작성한다. 속성값은 value
    }*/ //userId의 값(value)이 빈문자열과 같다

    // 삼항조건활용 조건1 (리액트 React 할때 많이 쓰이는 조건식이다)
    // 조건식 ? 조건식 참 결과 : 조건식 거짓결과
    //조건결과대입 변수 = 조건식 ? 조건식 참결과 : 조건식거짓결과
    errorMsg.textContent= userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해주세요' : '';
}) 
