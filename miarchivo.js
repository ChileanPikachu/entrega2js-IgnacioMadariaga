//Inicio if

const USUARIO = prompt("Ingresa tu usuario")
const PASSWORD = prompt("Ingresa tu contraseña")

if(USUARIO == "admin" && PASSWORD == "123456"){
    alert("Bienvenido "+USUARIO)
}else{
    alert("Usuario o contraseña incorrecto")
}

const NOMBRE = prompt("Ingresa tu nombre")
const ANIO_NACIMIENTO= prompt("Ingresa tu año de nacimiento")
const ANIO_ACTUAL = 2022

if(NOMBRE == "" || ANIO_NACIMIENTO == ""){
    alert("Ingrese toda la información")
} else{
    let ANIO = ANIO_ACTUAL - ANIO_NACIMIENTO
    alert("Hola "+NOMBRE+" tu edad es: "+ ANIO)
}

//Termino de if

//Inicio while
let nombre = prompt("¿Quieres realizar un registro de tus jugadores favoritos? \n Ingrese el nombre de un jugador (ESC para salir)")

while(nombre.toUpperCase() != "ESC"){ 
    alert("El usuario ingresó: "+nombre)
    nombre = prompt("Ingresa el nombre de otro jugador")
}

//Fin while

//Inicio for

//Promedio goles por equipo Premier League 2022 - 2023

const NUMERO_GOLES = prompt("¿Deseas saber el promedio de goles de tu liga favorita? \n Ingrese la cantidad de equipos")
let sumatoria = 0
let promedio = 0

for(let index = 1; index <= NUMERO_GOLES; index++){
    const GOLES = prompt("Ingrese los goles del equipo "+ index)
    sumatoria = sumatoria + parseFloat(GOLES)
}

promedio = sumatoria / NUMERO_GOLES
alert("El promedio de goles es: " +promedio)

//Termino for

//Inicio switch

let seleccionUsuario = parseInt(
    prompt(
        "¿Cuál es la mejor liga europea?: \n 1.Premier Ligue \n 2.Bundesliga \n 3.Serie A \n 4.Ligue 1 \n 5. La Liga"
    )
);

switch(seleccionUsuario){ 
    case 1:
        alert("Usted eligió Premier Ligue")
    break
    case 2:
        alert("Usted eligió Bundesliga")
    break
    case 3:
        alert("Usted eligió Serie A")
    break
    case 4:
        alert("Usted eligió Ligue 1")
    break
    case 5:
        alert("Usted eligió La Liga")
    break
    default:
        alert("Opción desconocida")
        break
}

//Termino de switch

//Inicio Funciones
// Sumatoria mayor y menor cantidad de goles por ligas 2022 - 2023

function sumaMayorMenorGoles(mayorGoles, menorGoles) {
    const SUMA_GOLES = mayorGoles + menorGoles
    alert("La suma de los goles es " + SUMA_GOLES)
}

const MAYOR_GOLES_PREMIER = parseFloat(prompt("Ingresa la mayor cantidad de goles de la Premier"))
const MENOR_GOLES_PREMIER = parseFloat(prompt("Ingresa la menor cantidad de goles de la Premier"))

sumaMayorMenorGoles(MAYOR_GOLES_PREMIER, MENOR_GOLES_PREMIER)

const MAYOR_GOLES_BUNDESLIGA = parseFloat(prompt("Ingresa la mayor cantidad de goles de la Bundesliga"))
const MENOR_GOLES_BUNDESLIGA = parseFloat(prompt("Ingresa la menor cantidad de goles de la Bundesliga"))

sumaMayorMenorGoles(MAYOR_GOLES_BUNDESLIGA, MENOR_GOLES_BUNDESLIGA)

const MAYOR_GOLES_SERIE_A = parseFloat(prompt("Ingresa la mayor cantidad de goles de la Serie A"))
const MENOR_GOLES_SERIE_A = parseFloat(prompt("Ingresa la menor cantidad de goles de la Serie A"))

sumaMayorMenorGoles(MAYOR_GOLES_SERIE_A, MENOR_GOLES_SERIE_A)

const MAYOR_GOLES_LIGUE_1 = parseFloat(prompt("Ingresa la mayor cantidad de goles de la Ligue 1"))
const MENOR_GOLES_LIGUE_1 = parseFloat(prompt("Ingresa la menor cantidad de goles de la Ligue 1"))

sumaMayorMenorGoles(MAYOR_GOLES_LIGUE_1, MENOR_GOLES_LIGUE_1)

const MAYOR_GOLES_LA_LIGA = parseFloat(prompt("Ingresa la mayor cantidad de goles de la Liga"))
const MENOR_GOLES_LA_LIGA = parseFloat(prompt("Ingresa la menor cantidad de goles de la Liga"))

sumaMayorMenorGoles(MAYOR_GOLES_LA_LIGA, MENOR_GOLES_LA_LIGA)

//Fin funciones