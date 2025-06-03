const aniImg = document.querySelector('main > img');
const topBtn =document.querySelector('.control .top');
const downBtn =document.querySelector('.control .down');
const leftBtn =document.querySelector('.control .left');
const rightBtn =document.querySelector('.control .right');
const inputMove =document.querySelector('.io input');
let currentY = 0; //이미지의 y 초기 좌표
let currentX = 0; //이미지의 X 초기 좌표
console.log(aniImg,topBtn,downBtn,leftBtn,rightBtn,inputMove);
// aniImg.style.transform = 'translate(20px, 20px)'
console.log(`===방향키 버튼 클릭시 이동하는 이벤트===`)
// ↑ 버튼 클릭시 이미지 윗 방향으로 20px 이동시키기
topBtn.addEventListener('click', topFunc);
function topFunc(){
    currentY -=20;
    return aniImg.style.transform = `translate(0,${currentY}px)`
}
// ↓버튼 클릭시 이미지 아래방향으로 20px 이동시키기
downBtn.addEventListener('click',downFunc);
function downFunc(){
    currentY +=20;
    return aniImg.style.transform = `translate(0, ${currentY}px)`
}
//좌 버튼 클릭시 20px 이동시키기
leftBtn.addEventListener('click', leftFunc);
function leftFunc(){
    currentX -=20;
    return aniImg.style.transform = `translate(${currentX}px,${currentY}px)`
}
//우 버튼 클릭시 20px 이동시키기
rightBtn.addEventListener('click', rightFunc);
function rightFunc(){
    currentX +=20;
    return aniImg.style.transform = `translate(${currentX}px,${currentY}px)`
}

// input입력창에 허용키를 입력하고 Enter를 누르면 캐릭터가 이동하는 알고리즘
// 허용키 : 왼쪽, 오른쪽, 위, 아래
inputMove.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ /* 엔터키와 같냐 */
        //왼쪽 입력후 Enter 실행시 이미지가 왼쪽 20px 이동
        if(inputMove.value === '왼쪽'){// 조건1
            currentX -=20;
            inputmoveFunc()

        }else if(inputMove.value === '오른쪽'){//조건1 거짓일때 검사하는 조건2
            currentX +=20;
            inputmoveFunc()

        }else if(inputMove.value === '위'){//조건1, 2 거짓일때 검사하는 조건3
            currentY -=20;
            inputmoveFunc()
        }else(){//조건1,2,3 모두 거짓일때 실행결과 (아래로)
            currentY +=20;
            inputmoveFunc()
    }
}
})
function inputmoveFunc (){
    aniImg.style.transform = `translate(${currentX}px, ${currentY}px)`
    return inputMove.value = '';
}