window.addEventListener("load", inicio, true);

function inicio() {
	//aqui hacemos minisculas las letras
	document.getElementById("mensaje").addEventListener("keydown", function(){
		this.value = this.value.toLowerCase();
	}, true);
	//funcion para asignar los valores para cifrar y descifrar
	document.getElementById("cifrar").addEventListener("click", function(){
		
		let texto = document.getElementById("mensaje").value;
		let posicion = document.getElementById("posicion").value;
		document.getElementById("resultado").value = cifrar(texto, posicion);
	}, true);
	document.getElementById("descifrar").addEventListener("click", function(){
		
		let texto = document.getElementById("mensaje").value;
		let posicion = document.getElementById("posicion").value;
		document.getElementById("resultado").value = descifrar(texto, posicion);
	}, true);
}

function cifrar(texto, posicion) {
	if (!texto)
		return "";
	const abc = "abcdefghijklmnñopqrstuvwxyz";
	posicion = (posicion % 27 + 27) % 27;
	return texto.replace(/[a-z\u00f1\u00d1]/ig, c=> abc[(abc.indexOf(c)+posicion)%27]);
	// recorre las letras  y comprueba su posicion, añadiendole un desplazamiento
}

function descifrar(texto, posicion) {
	if (!texto)
		return "";
	const abc = "abcdefghijklmnñopqrstuvwxyz";
	posicion = (posicion % 27 - 27) % 27;
						//expresion regular que incluye ñ
	return texto.replace(/[a-z\u00f1\u00d1]/ig, c=> abc[(abc.indexOf(c)-posicion)%27]);
	// recorre las letras  y comprueba su posicion, añadiendole un desplazamiento
}

//funcion para que validar lo que el usuario ingresa como mensaje
function validarn(e){
	
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /([a-z\u00f1\u00d1\s])/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec); 
}
//expresion regular que evita numeros decimales y negativos en la posicion
function validarnum(e){
	
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado == 8) return true;
	var patron = /[0-9]/;
	var tec = String.fromCharCode(teclado);
	return patron.test(tec); 
}
