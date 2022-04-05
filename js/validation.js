const form = document.querySelector('#member');
const btnSubmit = document.querySelector('input[type="submit"]');

btnSubmit.addEventListener('click',(e)=>{
	if(!isTxt('userid',5)) e.preventDefault();
	if(!isTxt('email')) e.preventDefault();
});

function isTxt(target,len){
	const inputName = form.querySelector(`[name = ${target}]`);
	const val = inputName.value;

	// 아이디가 5글자 이상일때 인증통과
	//인증 실패시 경고창이 아닌 input옆에 '아이디를 입력하세요'라는 메세지 출력
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
		const errtit = inputName.getAttribute('placeholder');
		errMsg.innerText = errtit;
		inputName.closest('td').append(errMsg);
	}
}
function isSelct(target,len){

}