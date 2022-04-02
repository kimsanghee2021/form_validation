const form = document.querySelector('#member');
const btnsSubmit = form.querySelector('input[type="submit"]');

btnsSubmit.addEventListener('click',(e)=>{
    if(!isTxt('userid')) e.preventDefault();
});

function isTxt(name){
    const input = form.querySelector(`[name = ${name}]`);
    const txt = input.value;
    const errMsg = document.createElement('p');
    errMsg.style.color = 'red';
    const errTxt = input.getAttribute('placeholder');
    const errMsgs = input.closest('td').querySelectorAll('p');


    if(txt.legnth > 5){
        if(errMsgs.length > 0)input.closest('td').querySelector('p').remove();
        return true;
    } else{
        if(errMsgs.length > 0)input.closest('td').querySelector('p').remove();
        errMsg.innerHTML = errTxt;
        input.closest('td').append(errMsg);
        return false;
    }

}
