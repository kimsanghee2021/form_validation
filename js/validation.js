const form = document.querySelector('#member');
const btnSubmit = document.querySelector('input[type="submit"]');

btnSubmit.addEventListener('click',(e)=>{
	if(!isTxt('userid',5)) e.preventDefault();
	if(!isTxt('email')) e.preventDefault();
	if(!isSelect('edu')) e.preventDefault();
	if(!isCheck('gender')) e.preventDefault();
	if(!isCheck('interests')) e.preventDefault();
	if (!isPwd('pwd1', 'pwd2', 5)) e.preventDefault();
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

function isCheck(target){
	const checks = form.querySelectorAll(`[name = ${target}]`);
	let isChecked = false;

	//모든 체크 인풋요소를 반복돌며 하나라도 체크되어있으면 isChecked에 true할당
	for (const check of checks) if (check.checked) isChecked = true;

	if(isChecked){
		const errMsgs = checks[0].closest('td').querySelectorAll('p');
		if(errMsgs.length > 0) checks[0].closest('td').querySelector('p').remove();
		return true;
	} else{
		const errMsgs = checks[0].closest('td').querySelectorAll('p');
		if(errMsgs.length > 0) checks[0].closest('td').querySelector('p').remove();

		const errMsg = document.createElement('p');
		const errtit = '선택해주세요.';
		errMsg.innerText = errtit;
		checks[0].closest('td').append(errMsg);
	}
}

function isPwd(target01, target02,len){
	const pwd1 = document.querySelector(`[name=${target01}]`);
	const pwd2 = document.querySelector(`[name=${target02}]`);
	const pwd1_val = pwd1.value;
	const pwd2_val = pwd2.value;

	const num = /[0-9]/;
	const eng = /[a-zA-Z]/;
	const spc = /[~!@#$%^&*()_+\]]/;

	if(pwd1_val === pwd2_val &&
		pwd1_val.length > len &&
		num.test(pwd1_val) &&
		eng.test(pwd1_val) &&
		spc.test(pwd1_val)){
		const errMsgs = pwd1.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) pwd1.closest('td').querySelector('p').remove();
		return true;
	} else{
		const errMsgs = pwd1.closest('td').querySelectorAll('p');
		if (errMsgs.length > 0) pwd1.closest('td').querySelector('p').remove();

		const errMsg = document.createElement('p');
		errMsg.innerText = `비밀번호는 ${len}글자 이상, 영문, 숫자, 특수문자를 포함해서 동일하게 입력하세요.`;
		pwd1.closest('td').append(errMsg);
		return false;
	}
}