//오늘의 할일 Js
// 1. 오늘의 할일 입력후
// 2. 등록 버튼 클릭 (클릭 이벤트 내에서 1번 입력값 인식)
// 3. "여기에 할일이 등록됩니다" 기존 li의 다음 형제 위치에 입력한 정보 등록
// ★ 위 알고리즘 3번 작업시 주의사항
// ul태그의 마지막 자식 위치로 li 추가 (문자열 생성X, createElement()가능)
const toInput = document.querySelector('.to');
const toBtn = document.querySelector('#to_btn');
const ul = document.querySelector('ul');
console.log(toInput,toBtn,ul);

toBtn.addEventListener('click',()=>{
    if(toInput.value == ""){//input의 값이 입력되지 않았을 경우
        //경고창으로 "입력 후 등록해야 합니다" 메세지 출력하기
        alert('입력 후 등록해야 합니다.')
    }else{
        //console.log(toInput.value);
        //ul.appendChild("<li>abc</li>") //문자열삽입 에러 X
        let li = document.createElement('li'); // 입력
        li.innerHTML = `<span>${toInput.value}</span><button type="button" class="del_btn">X</button>`;
        //여기다가 작성해야한다 
        //li.textContent = toInput.value; // 이것을 바꾼것 위에 innerHTML 작성
        console.log(li); //<li></li>
        ul.appendChild(li) //출력
        toInput.value = ''; //입력값 초기화

        //등록된 할일 옆 X 클릭시 부모 li 제거하기
        const close = document.querySelectorAll('.del_btn');
        for(let i of close){
            console.log(i); //배열 형태가 아닌 객체 형태로 출력되서 바로 사용가능한 형태인지 확인
            i.addEventListener('click',()=>{
                i.parentNode.remove(); // JS에서 remove를 사용해서 제거할수 있음
            })
        }//조건문 else(거짓) 사용자가 값을 입력했을때 블록 위치
        
        // 취소선 제작
        const span = document.querySelectorAll('li span');
        for(let i of span){
            console.log(i);
            i.addEventListener('click',()=>{
                i.parentNode.style.textDecoration = 'line-through';
            })
        }
    } 
}) //toBtn 이벤트종료(블록)위치


