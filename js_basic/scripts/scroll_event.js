// 스크롤 이벤트 문법
// window.addEventListener('scroll',()=>{실행결과})
// 스크롤 이벤트와 상고나없이 바로 숨겨야 하므로 스크롤 이벤트 밖에서 선언해야한다
const topBtn = document.querySelector('#top')
topBtn.style.display = 'none'

// 검색 폼 복제 변수
const searchClone =document.querySelector('header form').cloneNode(true);
let isSearchClone = false; // 안보이면 false 보이면 true

window.addEventListener('scroll',()=>{
    //console.log('스크롤 이벤트 실행중');
    console.log(window.scrollY);

    // 스크롤 내리며 그림자가 나오게, 스크롤 올리면 그림자가 안보이게 만들기
    // 1.스크롤 이벤트에 따라 헤더 디자인 변경
    const headerBtn = document.querySelector('.bottom')
    if(window.scrollY > 100){ // 스크롤 위치가 100보다 크면
        headerBtn.classList.add('active');
        headerBtn.appendChild(searchClone)
        isSearchClone =true;
    }else {// 위 조건이 아니면 (100보다 작으면)
        if(isSearchClone){// (위) else 100보다 작으면 바로 실행하지 않고 이중검사 후 실행
        headerBtn.classList.remove('active');
        headerBtn.removeChild(searchClone);
        isSearchClone =false;
        }
    }
    // 2. 스크롤 이벤트에 따라 맨위로 디자인변경
    // 맨위로 숨기기
    // 스크롤 위치가 500보다 크면 맨 위로 보이기 (반대면 숨기기)
    if(window.scrollY > 500){
        topBtn.style.display = 'block'
    }else {
        topBtn.style.display= 'none'
    }
    // 맨위로 클릭하면 스크롤 y 0위치로 올리기
    
})//스크롤 이벤트 종료 위치 
topBtn.addEventListener('click', (e)=>{
    e.preventDefault(); // 태그의 기본이벤트 막기
    //window.scrollTo(0,0)
    window.scrollTo({left:0, top:0, behavior:'smooth',})
})
