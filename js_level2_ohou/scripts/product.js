// 11. 상품 옵션 선택 시 색상 선택 후 (클릭 (x) 변경(0)) 사이즈 선택 가능, 색상 미선택시 사이즈 선택 불가
// 색상, 사이즈 select태그 변수 선언 
const colorSelect = document.querySelector('select[name=color]');
const sizeSelect = document.querySelector('select[name=size]');
const orderColor = document.querySelector('.order_select .color');
const orderSize = document.querySelector('.order_select .size');
console.log(colorSelect, sizeSelect, orderColor, orderSize);
sizeSelect.disabled = 'true'; // 사이즈 비활성화 초기값 설정
// 색상 select를 변경했을때 이벤트 생성
colorSelect.addEventListener('change', changeFunc)
function changeFunc(){ // 색상이 변경되었을때 호출하는 함수
    return sizeSelect.disabled = false; //색상을 변경했을때 사이즈가 활성화된다 (변경시 사이즈 재활성화된다)  => 해석 ) 비활성화가 아니다
} 
console.log(`-------- 12번 CSSMathProduct.js --------`);
// 12. 색상 -> 사이즈 선택시 선택한 정보가 아래 새롭게 수량 가격과 함께 출력
// 12-1. 위 (12)번 진행 전 새로운 요소 (.oredr_select) 숨기기
const oredrSelect = document.querySelector('.order_select');
console.log(oredrSelect);
oredrSelect.style.display = 'none';
// 12-2. 위 (12)번  색상 -> 사이즈 선택시 새로운 요소 (.order_select)보이기
// 색상 -> 사이즈 선택시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderFunc)
sizeSelect.addEventListener('change',orderFunc)
function orderFunc(){
    //console.log(0) //작동되는지 정상 확인 
    //console.log(colorSelect.value); // 선택한 색상 값 확인 
    //console.log(sizeSelect.value);
    sizeSelect.disabled = false; // 사이즈 활성화 
    //특정 상황에서 아래 orderSelect 를 출력하고 싶다면? -> 상황을 조건문으로 작성해야 한다
    // orderSelect 출력 조건 -> color의 value 값이 존재하는 option 선택 후 size의 value 값이 존재하는 option을 추가로 선택했을 경우
    oredrSelect.style.display ='block' // 동시에 진행되는 것 
    // 조건문 연습
    // if (조건식){조건식이 참일  경우 실행되는 명령}
    //if('블랙'){console.log('조건실행테스트')} 
    console.log(Boolean(colorSelect.value)) // colorSelect.value 애서 거짓이냐 참이냐 검사하는 것 
    // 사용자가 선택한 color, size의 값 (value)이 모두 참일때 조건 실행 (value="" 빈문자열이면 거짓)
    if(colorSelect.value && sizeSelect.value){
        oredrSelect.style.display = 'block'; // 주문영역보이기
    }
    //order_select의 color안에 선택한 colorSelect 값 대입하기 
    orderColor.textContent = colorSelect.value;
    //order_select의 size안에 선택한 sizeSelect 값 대입하기 
    orderSize.textContent = sizeSelect.value;
}

console.log(`-------- 13번 CSSMathProduct.js --------`);
// 13. 수량  조정시 1~9999개까지 선택 가능 기능
//13-1.  `-` 버튼 클릭시 수량값이 1보다 작으면 1~ 9999개 까지 선택 가능합니다 메세지 출력
//13-2.  `+` 버튼 클릭시 수량값이 1보다 크면 1~ 9999개 까지 선택 가능합니다 메세지 출력
// 13-3. `-`,`+` 버튼 클릭시 수량이 범위값 안에서 1씩 감소 또는 증가 (범위값 : 1~9999개)
const minusBtn = document.querySelector('#minus'); 
const plusBtn = document.querySelector('#plus');
const orderNum = document.querySelector('input[name=user_num]');
const totalPrice = document.querySelector('.order_select .price em');
let num = 9999; // 초기수량 
let price = 39900; // 초기가격
let total = 0; // 수량에 따라 가격 계산하는 최종변수
console.log(minusBtn, plusBtn, orderNum, totalPrice);

// 초기설정 (변수를 최대한 이용해서 작성하기)
orderNum.value = num ; // 오더넘버 value에 넘버를 대입한다
// 증가 +버튼 클릭시 수량이 1씩 증가되서 orderNum 출력
plusBtn.addEventListener('click', () =>{
    num++;
    // 증가 후에 계산 해야한다 -> 그러므로 이부분에 작성해야한다! (작성위치 주의하기)
    //total = num*price; 
    //console.log(total);
    //orderNum.value = num ;
    //totalPrice.textContent = total.toLocaleString('ko-kr'); //객체.함수 로 작성하는 것
    // 증가 수량이 9999개 보다 큰 경우 경고메세지 출력
    if(num > 9999){alert('1~9999개까지 선택가능합니다.')}
    if(num >= 1 && num <= 9999){
    total = num*price; 
    console.log(total);
    orderNum.value = num ;
    totalPrice.textContent = total.toLocaleString('ko-kr');
    }

})
// 감소 -버튼 클릭시 수량이 1씩 감소되서 orderNum 출력
minusBtn.addEventListener('click', () => {
    num--;
    // 감소 후에 계산 해야한다 -> 그러므로 이부분에 작성해야한다! (작성위치 주의하기)
    //total = num*price;
    //orderNum.value = num;
    //totalPrice.textContent = total.toLocaleString('ko-kr');//객체.함수 로 작성하는 것
    // 감소 수량이 1보다 작은 경우 경고메세지 출력
    if(num < 1){alert('1~9999개까지 선택가능합니다.')}
    if(num >= 1){
        total = num*price;
        orderNum.value = num;
        totalPrice.textContent = total.toLocaleString('ko-kr'); // 위에 있던걸 잘라서 여기다가 넣기
    }
})
console.log(`-------- 15번 CSSMathProduct.js --------`);
// 15. 위 (12)번에서 나온 박스의 x 클릭 시 주문 정보 모두 삭제
const closeBtn = document.querySelector('.order_select .close');
console.log(closeBtn);
closeBtn.addEventListener('click',()=>{
    oredrSelect.style.display = 'none';
})
// 장바구니 클릭시 '장바구니 담겼습니다' 메세지 출력 alert ()
const cartBtn = document.querySelector ('#cart_btn'); // 아이디는 1개 -> 굳이 부모를 작성안해도 혼자작성했기 때문에 간단하게 작성해도 된다
console.log(cartBtn);
cartBtn.addEventListener('click', () =>{
    alert('장바구니 담겼습니다');
})

// const btnGroup = document.querySelector('.btn_group');-'내가 작성한것 '
//const cartBtn = document.querySelector('.btn_group #cart_btn'); -'내가 작성한것 '
//console.log(btnGroup, cartBtn);- '내가 작성한것 '
/* cartBtn.addEventListener('click', () =>{
    //if(cartBtn){alert('장바구니 담겼습니다')} => -'내가 작성한것 '
}) */

// 바로구매 클릭시 '로그인이 필요합니다' 메세지 출력 alert ()
const buyBtn = document.querySelector('#buy_btn')
console.log(buyBtn);
/* buyBtn.addEventListener('click', ()=>{
    alert('로그인이 필요합니다');
}) */
buyBtn.addEventListener('click',buyFunc) // 함수 호출로 하는 방법 -> 반복 시킬경우 함수호출로 설정한다
function buyFunc(){
    return alert('로그인이 필요합니다');
}
