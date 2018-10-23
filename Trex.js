//variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var areah = canvas.height;
var areaw = canvas.width;
var puntos = 0;
var perdiste = crearTM("perdiste");
var ju1 = crearTMIP("Coloque el nombre");
var reset = crearreset("Quiere jugar otra vez"); 
var ju = "Predeterminado";
var reglas = crearTM("No choques con los cactus");
var bucle;
var trex = {
	x : 50,
	y : 85,
	velocidad : 7,
	arriba : false,
	saltando : false, 
	vy : 0,
	gravedad : 2,
	salto : 20,
	img : document.createElement('img')
};
var cactus = {
	x : 510,
	y : 76,
	velocidad : 7,
	derecha : true,
	img : document.createElement('img')
};
var cactusa = {
	x : 770,
	y : 76,
	velocidad : 5,
	derecha : true,
	img : document.createElement('img')
};
var cactusb = {
	x : 1000,
	y : 76,
	velocidad : 3,
	derecha : true,
	img : document.createElement('img')
};
var nube = {
	x : 510,
	y : 30,
	velocidad : 2,
	derecha : true,
	img : document.createElement('img')
};
var suelo = {
	x : 0,
	y : 120,
	velocidad : 4,
	img : document.createElement('img')
};
trex.img.src = 'img/Trex.png';
cactus.img.src = 'img/cactust.png';
cactusb.img.src = 'img/cactust.png';
cactusa.img.src = 'img/cactust.png';
nube.img.src = 'img/nubet.png';
suelo.img.src = 'img/suelot.png';
//clases
class Informacion {
	constructor() {
		
	}
	dibujar() {
		ctx.fillStyle = 'black';
		ctx.font = "15px Arial";
		ctx.fillText("El jugador es: "+ju, 10, 15);
		ctx.fillText("Puntos: "+puntos, 320, 15);
	}
}
//objetos
var info = new Informacion();
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 38) {
		trex.saltando = true;
		trex.vy = trex.salto;
	}
	if (event.keyCode == 88) {
		console.log("y"+trex.y);	
	}
});
//funciones
function crearTM(msj) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var t = document.createTextNode(msj); 
	f.appendChild(m);
	m.appendChild(t);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var x = document.createTextNode("X");
	cerrar.appendChild(x);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}

function crearTMIP(text, nombre) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var inp = document.createElement('input'); 
	var t = document.createTextNode(text); 
	inp.type = text;
	inp.id = nombre;
	inp.name = nombre;
	f.appendChild(m);
	m.appendChild(inp);
	m.appendChild(t);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var e = document.createTextNode("Enviar");
	cerrar.appendChild(e);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
		if (inp.value == false) {
			ju = "Predeterminado";
		} else {
			ju = inp.value;
		}
		frame();
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}
function crearreset(text, nombre) {
	var f = document.createElement('div');
	var m = document.createElement('div');
	var inp2 = document.createElement('input'); 
	var t2 = document.createTextNode(text); 
	inp2.type = text;
	inp2.id = nombre;
	inp2.name = nombre;
	f.appendChild(m);
	m.appendChild(inp2);
	m.appendChild(t2);
	f.className = "contenedor";
	m.className = "modal";
	var cerrar = document.createElement('div');
	var e = document.createTextNode("Enviar");
	cerrar.appendChild(e);
	cerrar.className = "cerrar";
	cerrar.addEventListener("click", function() {
		f.style.visibility = "hidden";
		if (inp2.value == "no" || inp2.value == "No") {
			document.location.reload();
		} else if (inp2.value == "yes" || inp2.value == "Yes" || inp2.value == "si" || inp2.value == "Si") {
			trex.y = 85;
			cactus.velocidad = 4;
			cactusa.velocidad = 4;
			cactusb.velocidad = 4;
			cactus.x = 510;
			cactusa.x = 540;
			cactusb.x = 570;
			nube.velocidad = 2;
			trex.velocidad = 7;
			trex.gravedad = 2;
			trex.saltando = false;	
			trex.vy = 0;
			trex.salto = 20;
			nube.derecha = true;
			cactus.derecha = true;
			cactusa.derecha = true;
			cactusb.derecha = true;
			puntos = 0;
			suelo.velocidad = 2;
			suelo.x = 0;
		}
	});
	m.appendChild(cerrar);
	document.body.appendChild(f);
	return f;
}
function mostrarM(obj) {
	obj.style.visibility = "visible";
}
function mathp(num1, num2) {
	return Math.round((Math.random() * num2) + num1);
}
function Fin() {
	mostrarM(reset);
	cactus.velocidad = 0;
	cactusa.velocidad = 0;
	cactusb.velocidad = 0;
	nube.velocidad = 0;
	trex.velocidad = 0;
	trex.gravedad = 0;
	trex.saltando = false;
	trex.gravedad = 0;	
	trex.vy = 0;
	trex.salto = 0;
	nube.derecha = false;
	cactus.derecha = false;
	cactusb.derecha = false;
	cactusa.derecha = false;
	suelo.velocidad = 0;
	suelo.x = 0;
}
function moverS() {
	if (true) {
		suelo.x += suelo.velocidad;
	}
	if (suelo.x > 20) {
		suelo.x = 0;
	}
}
function moverC() {
	if (cactus.derecha && cactus.x > 0) {
		cactus.x -= cactus.velocidad;
	}
	if (cactusb.derecha && cactusb.x > 0) {
		cactusb.x -= cactusb.velocidad;
	}
	if (cactusa.derecha && cactusa.x > 0) {
		cactusa.x -= cactusa.velocidad;
	}
}
function moverN() {
	if (nube.derecha && nube.x > 0) {
		nube.x -= nube.velocidad;
	}
}
function moverT() {
	if (trex.saltando == true) {
		if (trex.y > 85) {
			trex.saltando = false;
			trex.vy = 0;
			trex.y = 85;
		} else {
			trex.vy -= trex.gravedad;
			trex.y -= trex.vy;
		}
	}
}
function dibujarT() {
	ctx.drawImage(trex.img, trex.x, trex.y, 45, 45);
}
function dibujarC() {
	ctx.drawImage(cactus.img, cactus.x, cactus.y, 25, 45);
	ctx.drawImage(cactusa.img, cactusa.x, cactusa.y, 25, 45);
	ctx.drawImage(cactusb.img, cactusb.x, cactusb.y, 25, 45);
}
function dibujarN() {
	ctx.drawImage(nube.img, nube.x, nube.y, 40, 15);
}
function dibujarS() {
	ctx.drawImage(suelo.img, suelo.x, suelo.y, 552, 47);
}
function actualizar() {
	moverT();
	moverC();
	moverN();
	moverS();
}
function colisiones() {
	if (cactus.x < trex.x-10) {
		cactus.x = 510;
	}
	if (cactusb.x < trex.x-10) {
		cactusb.x = 510;
	}
	if (cactusa.x < trex.x-10) {
		cactusa.x = 510;
	}
	if (nube.x < 1) {
		nube.x = 510;
	}
	if (cactus.x < trex.x && trex.saltando == true) {
		cactus.velocidad += 1;
		puntos = puntos + 1;
		if (cactus.velocidad > 7) {
			cactus.velocidad = 7;
		}
	}
	if (trex.y <= 85 && trex.y > 60 && cactus.x < trex.x) {
		Fin();
	}
	if (cactusb.x < trex.x && trex.saltando == true) {
		cactusb.velocidad += 1;
		puntos = puntos + 1;
		if (cactusb.velocidad > 3) {
			cactusb.velocidad = 3;
		}
	}
	if (trex.y <= 85 && trex.y > 49 && cactusb.x < trex.x) {
		Fin();
	}
	if (cactusa.x < trex.x && trex.saltando == true) {
		cactusa.velocidad += 1;
		puntos = puntos + 1;
		if (cactusa.velocidad > 5) {
			cactusa.velocidad = 5;
		}
	}
	if (trex.y <= 85 && trex.y > 49 && cactusa.x < trex.x) {
		Fin();
		
	}
}
function dibujar() {
	ctx.clearRect(0,0,areaw, areah);
	dibujarT();
	dibujarC();
	dibujarN();
	dibujarS();
	info.dibujar();
}
function frame() {
	actualizar();
	colisiones();
	dibujar();
	bucle = requestAnimationFrame(frame);
}
function iniciar() {
	var modal = document.getElementById('modal');
	modal.style.display = 'none';
	mostrarM(reglas);
	mostrarM(ju1); 
}