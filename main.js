function calcularAreaFigura() {
    let opcion = 0;
    let area = 0;
    let radio = 0;
    let lado = 0;
    let base = 0;
    let altura = 0;

    while (opcion !== 4) {
        alert("Calculadora de áreas de figuras geométricas\n" +
            "1) Círculo\n" +
            "2) Cuadrado\n" +
            "3) Triángulo\n" +
            "4) Salir");

        opcion = parseInt(prompt("Ingresa un número para seleccionar una opción:"));

        switch (opcion) {
            case 1:
                radio = parseFloat(prompt("Ingresa el radio del círculo:"));
                area = areaCirculo(radio);
                alert("El área del círculo es: " + area);
                break;
            case 2:
                lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
                area = areaCuadrado(lado);
                alert("El área del cuadrado es: " + area);
                break;
            case 3:
                base = parseFloat(prompt("Ingresa la base del triángulo:"));
                altura = parseFloat(prompt("Ingresa la altura del triángulo:"));
                area = areaTriangulo(base, altura);
                alert("El área del triángulo es: " + area);
                break;
            case 4:
                alert("Gracias por usar la calculadora de áreas. ¡Hasta luego!");
                break;
            default:
                alert("No ingresaste una opción válida");
        }
    }
}

function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function areaCuadrado(lado) {
    return lado * lado;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

calcularAreaFigura();
