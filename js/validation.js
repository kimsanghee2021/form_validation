const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', (e) => {
	//if (!isTxt('userid', 5)) e.preventDefault();
	if (!isEmail('email', 7)) e.preventDefault();
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
        errMsg.innerText = `아이디값을 ${len}이상 입력하세요.`
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