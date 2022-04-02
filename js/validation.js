const form = document.querySelector('#member');
const btnsSubmit = form.querySelector('input[type="submit"]');

btnsSubmit.addEventListener('click',(e)=>{
    if(!isTxt('userid')) e.preventDefault();
});

//미션 1 - 아이디가 5글자 이상일떄 인증 통과 
//인증 실패시 경고창이 아닌 input 옆에 '아이디를 입력하세요' 메세지 출력
function isTxt(name){
    const input = form.querySelector(`[name = ${name}]`);
    const txt = input.value;
    const errMsg = document.createElement('p');
    const errTxt = input.getAttribute('placeholder');

    if(txt.length > 5){
        return true;
    }else{
        errMsg.innerHTML = errTxt;
        input.closest('td').append(errMsg);
        return false;
    }

}
