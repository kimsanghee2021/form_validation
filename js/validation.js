const form = document.querySelector('#member');
const btnsSubmit = form.querySelector('input[type="submit"]');

btnsSubmit.addEventListener('click',(e)=>{
    if(!isTxt('userid')) e.preventDefault();
});
function isTxt(name){
    const input = form.querySelector(`[name] = ${name}`);
    const txt = input.ariaValue;
    if (txt == '') {
        alert('아이디를 입력하세요');
        return false;
    } else {
        if (txt.length < 5) {
            alert('아이디를 5글자이상 이상입력하세요')
            return false;
        } else {
            return true;
        }
    }
}
