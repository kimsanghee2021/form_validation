const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
	if (!isTxt('userid', 5)) e.preventDefault();
	if (!isEmail('email', 7)) e.preventDefault();
	if (!isCheck('gender')) e.preventDefault();
    if(!isTxt('comments',10)) e.preventDefault();
    if(!isSelect('edu'))e.preventDefault();
});

function isTxt(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		return true;
	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		const errMsg = document.createElement('p');
        errMsg.innerText = `해당항목을 ${len}이상 입력하세요.`
		input.closest('td').append(errMsg);
		return false;
	}
}

function isEmail(name, len) {
	const input = form.querySelector(`[name=${name}]`);
	const txt = input.value;

	if (txt.length > len && /@/.test(txt)) {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		return true;

	} else {
		const errMsgs = input.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

		const errMsg = document.createElement('p');
		const errTxt = input.getAttribute('placeholder');
		errMsg.innerText = errTxt;
		input.closest('td').append(errMsg);
		return false;
	}
}

function isCheck(name){
    const inputs = form.querySelectorAll(`[name = ${name}]`);
    let isChecked = false;
    //모든 체크 인풋 요소를 반복돌며 하나라도 체크가 되어있으면 isChecked에 true 할당
    for(const input of inputs) if(input.checked) isChecked =true;

    //체크된 요소가 있을때
    if(isChecked){
        const errMsgs = inputs[0].closest('td').querySelectorAll('p');
        if(errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();
        return true;
    } else{
        const errMsgs = inputs[0].closest('td').querySelectorAll('p');
        if(errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();

        const errMsg = document.createElement('p');
		errMsg.innerText = '필수 항목을 하나이상 체크해주세요';
		inputs[0].closest('td').append(errMsg);

		return false;
    }
}

function isSelect(name){
    const sel = document.querySelector(`[name = ${name}]`);
    const sel_index = sel.options.selectedIndex;
    const val = sel.options[sel_index].value;

    //selector가 하나라도 잇을떄 
    if(val!==''){
        const errMsgs = sel[0].closest('td').querySelectorAll('p');
        if(errMsgs.length > 0) sel[0].closest('td').querySelector('p').remove();
        return true;
    } else{
        const errMsgs = sel[0].closest('td').querySelectorAll('p');
        if(errMsgs.length > 0) sel[0].closest('td').querySelector('p').remove();

        const errMsg = document.createElement('p');
		errMsg.innerText = '최종학력을 체크해주세요';
		sel.closest('td').append(errMsg);

		return false;
    }
}
