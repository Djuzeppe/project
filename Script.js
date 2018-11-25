function clickButton(){
	var a = prompt("Твое число больше или меньше 50?");

	if (a=="больше") {
			var a = prompt("Твое число больше или меньше 75?");
			if (a=="больше") {
				 var a = prompt("Твое число больше или меньше 87?");
				 if (a=="больше") {
				 	alert("cool")
				 }

			}
			else if (a=="меньше") {
				alert("bad")
		}
	}
	else if (a=="меньше") {
		alert (a)
	}
	else {
		alert ("видимо вы неправильно написали ответ, попробуйте еще раз")
	}
}