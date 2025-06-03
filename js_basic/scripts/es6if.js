//삼항조건연산자기본문법
//조건 ? 조건이 참일때 결과 : 조건이 거짓일때 결과;
let x = 5;
let y = x+10;
//삼항조건의 결과가 콘솔로그에 출력되는 형태 
console.log(y==15 ? 'o':'x')
let total = x >10 ? 'o':'x';
//alert(y==15 ? 'o':'x')
console.log(total);
// alert(total);S

// 연습2 . 성인/미성년자 구분하기
// 18살 이상이면 '성인입니다' 아니면 '미성년자입니다'
/* const useAge = prompt('당신의 나이는?');
total = useAge>18 ? '성인입니다':'미성년자입니다';
console.log(total) */

console.log (`=========연습 3==========`)
// 봄이 500점 , 여름이 600점
const game_score = [{
    name: '봄', // game_score[0].name 으로 들어가야 찾을수 있다
    score:500, // game_score[0].score 으로 들어가야 찾을수 있다
},{
    name:'여름',// game_score[1].name 으로 들어가야 찾을수 있다
    score:600,// game_score[1].score 으로 들어가야 찾을수 있다
}]
console.log(game_score);
// 오늘의 1등은 00누구이고 점수는 000입니다! 라고 출력
// 조건예시) 봄이가 여름보다 점수가 큰가?
// 크면 봄이가 1등
// 작으면 여름이가 1등
//total = 조건 ? 참 : 거짓;

total = game_score[0].score > game_score[1].score ? game_score[0] : game_score[1];
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다!`) // 백틱기호를 사용한이유는 템플릿으로 변경하라는 의미이다

console.log(`=== 삼항 조건 + 리뷰 JS ===`);
// 삼항 조건 + 리뷰 JS
const re = document.querySelector ('textarea[name=re]');
const reBtn = document.querySelector ('#re_btn');
console.log(re,reBtn);
reBtn.addEventListener('click',()=> {
    // 콘솔테스트 : 리뷰내용 출력
    console.log(re.value)
    // 콘솔테스트 : 리뷰 글자 수 출력
    console.log(re.value.length)
    //result = 조건 ? 참 : 거짓;
    //리뷰내용이 100자 이상인가?
    //100자 이상이면 '등록 완료'
    //아니면 '100자 이상 입력하세요'
    result = re.value.length >= 100 ? '등록완료':'100자이상 등록하세요';
    alert(result);
})

console.log(`=== 삼항 조건 + 쇼핑 가격 알고리즘 ===`);
// 쇼핑 수량과 가격 알고리즘
// 1개 가격 기준 12500원
// 쇼핑몰 상품 데이터베이스
const productDB = [{
    name : '떡닭도리탕',
    price:12500, 
    stock:10, // 재고 수량 (최대 구매개수)
}, {
    name : '꼬막비빔장', // pordcuctDB[1].name
    price:5800, //pordcuctDB[1].price
    stock:20, //재고 수량 (최대 구매개수) pordcuctDB[1].stock
}] 
console.log(productDB);
// DOM 변수
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.price');
let num = 1; // 주문수량
let result = ''; // 결과출력값 변수 
console.log(numInput, minusBtn, plusBtn, priceP,);
//초기 주문수량 표시 하는 명령어
numInput.value = num; // => 현재 수량 
// 증가 버튼 클릭시 재고 수량만큼 증가하고 재고 수량 오버 시 '최대 구매수량입니다' 경고창 출력
plusBtn.addEventListener('click',()=>{
    //조건 : 현재 수량이 상품수량보다 크거나 같은가? 현재수량(num)이 상품재고수량(productDB[0].stock)
    //참이면 '최대구매수량입니다'
    //거짓이면 '수량증가'
    result = num >= productDB[0].stock? '최대구매수량입니다': ++num /*'수량증가'*/ ;
    numInput.value = num;
    priceP.textContent = (num*productDB[0].price).toLocaleString('ko-kr')+'원'; //숫자가 변경될때 원이 계속 나타나는 설정
    numOperatioFunc(0)
    console.log(result);
})
//감소 버튼 클릭시 현재 수량이 1보다 작으면 '최소구매수량 입니다' 아니면 수량감소 
    minusBtn.addEventListener('click',()=>{
        result = num <= 1 ? '최소구매수량입니다': --num /*'수량김소'*/ ;
        numInput.value = num;
        priceP.textContent = (num*productDB[0].price).toLocaleString('ko-kr')+'원';
        numOperatioFunc(0)
        console.log(result);
        
    }) 
    // 증가, 감소 버튼시 반복 실행하는 함수 (0,1로 매번 다른 인덱스만 매개변수처리)
    function numOperatioFunc(index){
        numInput.value = num;
        priceP.textContent = (num*productDB[index].price).toLocaleString('ko-kr')+'원';
        console.log(result);
    }


