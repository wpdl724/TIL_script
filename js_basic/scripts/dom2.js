//5/22 DOM 이벤트와 함수
// 함수의 매개변수, 익명함수, 화살표함수
// function 함수명(매개변수, 매개변수){실행}
//const 변수명 = function(매개변수){실행}
//const 변수명 =(매개변수) => {실행}
console.log(`=============================== 이벤트와 함수 연습1`)
const bg = document.querySelector('#bg');
const bg1Btn = document.querySelector('#bg1_btn');
console.log(bg, bg1Btn); //기본값 width:100%; ,height:0px;
bg.style.height = '100vh'; // 높이값을 주면 된다 (CSS 속성으로 작성)
bg.style.backgroundColor = 'yellow';

console.log(`=======================버튼에 마우스 올렸을때 배경색 변경제어 알고리즘`)
//이벤트와 함수 생성한 함수를 이벤트 내 콜백함수로 불러오기
bg1Btn.addEventListener('mouseover',bgChangeOver); //이벤트 생성 1 (마우스 커서 올렸을때)
bg1Btn.addEventListener('mouseout',bgChangeOut); //이벤트 생성 2 (마우스 커서 나갔을때)
function bgChangeOver(){ // 함수 생성
    return bg.style.backgroundColor = 'aqua'; //마우스를 올렸을때 1번만 실행되는 것 (마우스 나가도 변경이 안되는것)
}
function bgChangeOut(){
    return bg.style.backgroundColor ='yellow'; // return은 함수의 1번만 사용해야한다 반복사용 불가능
}

console.log(`=======================매개변수 활용한 배경색 변경`)
const bg2Btn = document.querySelector('#bg2_btn');
//const 변수 = function(매개){실행} :익명함수 식 
//const 변수 = () => {} : 화살표 함수 식 -> 이벤트에 많이 사용한다 (이유: 간략하니깐)
console.log(bg2Btn);
//bg2Btn.addEventListener('mouseover',bgChange('coral')); // 이렇게 작성하면 에러가 난다
//(위 에러 해결법) 객체 이벤트에서 매개변수가 있는 함수를 호출하려면 익명함수 또는 화살표함수로 변경해야 호출이 가능하다
bg2Btn.addEventListener('mouseover',function(){
    bgChange('coral'); // "익명함수 내에서 함수를 호출" 이 위치에서 부르고 싶은 것을 작성하면 된다
});
bg2Btn.addEventListener('mouseout',()=>bgChange('brown')); 
// (위) 화살표 함수 내 매개변수가 있는 함수 호출 (이벤트 내에서 한줄일때는 중괄호 생략가능)
// 매개변수 ver 함수 
function bgChange(color){ 
    return bg.style.backgroundColor = color; // <-매개변수 이름을 적은것 / ''따옴표안썼다 왜냐하면 변수이니깐! (따옴표는 문자에 해당할때만 사용한다)
}
