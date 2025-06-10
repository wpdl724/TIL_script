// forEach
// for ~ in 요소의 인덱스에 접근하는 반복문
// for ~ of 요소의 각 객체에 접근하는 반복문
// forEach 요소의 인덱스와 객체에 동시 접근 가능한 반복문
// forEach 문법(아래)
// 변수. forEach(function(객체, 인덱스, 배열){반복결과}) 
// 변수.forEach((객체,인덱스,배열)=>{반복결과}) <익명함수식>

const btn = document.querySelectorAll('.btn');
console.log(btn);
// 1. 반복문 없이 mouseover, mouseout 이벤트 작성법
/* btn[0].addEventListener('mouseover', ()=>eventColor('#ea2f14', btn[0]))
btn[0].addEventListener('mouseout', ()=>eventColor('#fcef91',btn[0]))
btn[1].addEventListener('mouseout', ()=>eventColor('#fcef91',btn[1]))
btn[1].addEventListener('mouseout', ()=>eventColor('#fcef91',btn[1])) */


// 2. 반복문 for ~ of 활용 mouseover, mouseout 이벤트 작성법
/* for(let i of btn) {
    console.log(i)
    i.addEventListener('mouseover',()=>eventColor('#0abab5', i))
    i.addEventListener('mouseover',()=>eventColor('#adeed9', i)) 
}*/

// 3. 반복문 forEach 활용 mouseover, mouseout 이벤트 작성법
btn.forEach((obj, ind, arr)=>{
    console.log(obj, ind, arr);
    obj.addEventListener('mouseover', ()=>eventColor('#b6f500',obj))
    obj.addEventListener('mouseover', ()=>eventColor('#fffadc',obj))
})
function eventColor(value, target){
    return target.style.backgroundColor = value;
}

console.log(`===== 전체 약관 JS제작 =====`);
// 전체동의하기 클릭 시 나머지 필수 약관들 모두 선택하기
// 객체.checked
const lawAllChk = document.querySelector('#all'); // 전체동의 1개 
const lawChk = document.querySelectorAll('input[name^=law]'); // 개별 전체 (input의 name이 law로 시작하는건 다 선택)
console.log(lawAllChk, lawChk);
lawAllChk.addEventListener('click', function(){
    console.log(this.checked);//활성화(true) 비활성화(false)
    if(lawAllChk.checked == true){// 현재(this)선택 상태(checked)가 선택됐다면 (true)
        for (let i of lawChk){// 모든 lawChk에 반복접근하여 그이름을 i로 사용한다
            i.checked = true; // 모든 i(lawChk)의 선택 상태(checked)는 참(ture)이다
        }
    }else {// 위 if 조건이 거짓이라면 (선택 안된 상태라면)
        for (let i of lawChk){
            i.checked = false;
        }
    }
    
})
