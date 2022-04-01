const form = document.querySelector('#member');
const btnsSubmit = form.querySelector('input[type="submit"]');

btnsSubmit.addEventListener('click',(e)=>{
    if(!isTxt('#userid')) e.preventDefault();
    
});

function isTxt(name){
    const input = form.querySelector(`${name}`);
    const txt = input.value;
    
    if (txt == '') {
        alert('아이디를 입력하세요');
        return false;
    } else {
        if(txt.length < 5){
            alert('5글자 이상 입력해주세요');
            return false;
        } else{
            return true;
        }
    }
}
