
const form = document.querySelector('#member');
const btnSubmit = document.querySelector('input[type="submit"]');

btnSubmit.addEventListener('click',function(e){
	if(!isid('userid')) e.preventDefault();
	
});

//아이디가 5글자 이하일 떄 전송 중지하고 하단에 에러메세지 출력 
function isid(target){
	const input = form.querySelector(`[name = ${target}]`);
	const txt = input.value;
	if(txt.length > 5){
		return true;
	}else{
		const errMsg = document.createElement('p');
		const errTxt = input.getAttribute('placeholder'); //아이디를 입력하세요
		errMsg.innerText = errTxt;
		input.closest('td').append(errMsg);
		//alert(errTxt);
		return false;
	}
}


