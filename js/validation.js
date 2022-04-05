const form = document.querySelector('#member');
const btnSubmit = document.querySelector('input[type="submit"]');

btnSubmit.addEventListener('click',(e)=>{
	if(!isTxt('userid',5)) e.preventDefault();
	if(!isTxt('email')) e.preventDefault();
	if(!isSelect('edu')) e.preventDefault();
});

function isTxt(target,len){
	const inputName = form.querySelector(`[name = ${target}]`);
	const val = inputName.value;

	if(val.length > len){
		//에러메세지를 처음에 다 초기화 시키기
		const errMsgs = inputName.closest('td').querySelectorAll('p');
		if(errMsgs.length > 0) inputName.closest('td').querySelector('p').remove();
		return true;
	} else{

		//에러메세지를 처음에 다 초기화 시키기
		const errMsgs = inputName.closest('td').querySelectorAll('p');
		if(errMsgs.length > 0) inputName.closest('td').querySelector('p').remove();

		//에러메세지 생성
		const errMsg = document.createElement('p');
		const errtit = inputName.getAttribute('placeholder');
		errMsg.innerText = errtit;
		inputName.closest('td').append(errMsg);
		
		return false;
	}
}
function isEmail(target){
	const inputName = form.querySelector(`[name = ${target}]`);
	const val = inputName.value;
	const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;//이메일 정규식

	if(val.match(emailRule)!=null){
		const errMsgs = inputName.closest('td').querySelectorAll('p');
		if(errMsgs.length > 0) inputName.closest('td').querySelector('p').remove();
		return true;

	} else{
		
		//에러메세지를 처음에 다 초기화 시키기
		const errMsgs = inputName.closest('td').querySelectorAll('p');
		if(errMsgs.length > 0) inputName.closest('td').querySelector('p').remove();

		//에러메세지 생성
		const errMsg = document.createElement('p');
		const errtit = '이메일 항목은 @포함해서 쓰세요';
		errMsg.innerText = errtit;
		inputName.closest('td').append(errMsg);
	}
}

function isSelect(target){
	const sel = form.querySelector(`[name = ${target}]`);
	const sel_idx = sel.options.selectedIndex;
	const sel_val = sel.options[sel_idx].value;

	//selet박스에 선택되어있다면
	if(sel_val != ''){
		const errMsgs = sel.closest('td').querySelectorAll('p');
		if(errMsgs.length > 0) sel.closest('td').querySelector('p').remove();

		return true;

	} else{
		const errMsgs = sel.closest('td').querySelectorAll('p');
		if(errMsgs.length > 0) sel.closest('td').querySelector('p').remove();

		const errMsg = document.createElement('p');
		const errtit = '학력을 선택해주세요.';
		errMsg.innerText = errtit;
		sel.closest('td').append(errMsg);
	}
}

