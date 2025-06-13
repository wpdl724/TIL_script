// 회원가입 버튼 클릭 시 join_msg에 '가입을 축하합니다' 메세지 출력되고
const joinBtn = document.querySelector('#join');
const joinMsg = document.querySelector('.join_msg');
console.log(joinBtn,joinMsg);
joinMsg.classList.add('hide'); // 초기상태 (숨기기)

joinBtn.addEventListener('click',()=>{
    joinMsg.classList.remove('hide'); // 지워지면서 보이게 된다
    joinMsg.textContent = '가입을 축하합니다';
});
// (메세지 출력후 만드는거니깐) 3초후 메세지 자동 사라지기 (3초 사라지고 끝나고 싶을경우)
const hideMsg = setTimeout(()=>{
    joinMsg.classList.add('hide');
},3000)

//알림 메세지 후 다른 페이지로 이동 제작 (timer3.html로 이동)
const payBtn = document.querySelector('#pay');
const payReset = document.querySelector('#pay_reset');
const payMsg = document.querySelector('.pay_msg');
let payMsgOut; //타임아웃 할 함수를 먼저 let으로 선언한다 (결제취소)
payMsg.classList.add('hide'); // 초기 숨기기 
payReset.classList.add('hide'); // 초기 숨기기 (결제취소)
payBtn.addEventListener('click',()=>{
    payMsg.classList.remove('hide'); // 초기 숨기기 한걸 다시 보이게 하기
    payReset.classList.remove('hide'); // 초기 숨기기 한걸 다시 보이게 하기 (결제취소)
    payMsg.textContent = '결제 완료되었습니다. 5초후에 광고사이트로 이동합니다';
    payMsgOut = setTimeout(() => {
        window.location.href = './timer3.html';
    }, 5000);
})

payReset.addEventListener('click',()=>{
    clearTimeout(payMsgOut);
    payMsg.textContent ='결제가 취소되었습니다'
    console.log('setTimeout 이동삭제 완료')
})
console.log(payBtn,payMsg,payReset);


