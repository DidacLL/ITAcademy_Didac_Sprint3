function checkPassword(password){
	let res=0;
	if(password.search(/[a-z]/i)>=0)res++;
	if(password.search(/[0-9]/)>=0)res++;
	return res===2;
}
function checkMail(mail){
	return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
}
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	let fields=[
		{field:'fName', element:document.getElementById("fName")},
		{field:'fLastN', element:document.getElementById("fLastN")},
		{field:'fEmail', element:document.getElementById("fEmail")},
		{field:'fAddress', element:document.getElementById("fAddress")},
		{field:'fPassword', element:document.getElementById("fPassword")}
	];

	function markError(item) {
		error++;
		item.element.className += ' is-invalid';
	}
	// Get the error elements
	 errorName : document.getElementById("errorName");
	 errorEmail : document.getElementById("errorEmail");



// Validate fields entered by the user: name, phone, password, and email
	fields.forEach(item=>{
		if(item.element.value===""||item.element.value.length<3){
			markError(item);
		}else {
			switch (item.field) {
				case 'fName':
				case 'fLastN':
					if(item.element.value.search(/[a-z]/i)<0)markError(item);
					break;
				case 'fEmail':
					if (!checkMail(item.element.value))markError(item);
					break;
				case 'fPassword':if (!checkPassword(item.element.value))markError(item)
			}
		}

	})
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
