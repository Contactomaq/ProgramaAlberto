function calcularPrecio() {
    const productoIndex = document.getElementById("producto").value;
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);
    const valorDolar = parseFloat(document.getElementById("valorDolar").value);

    if (valorDolar <= 0) {
        alert("El valor del dólar debe ser mayor que cero.");
        return;
    }

    const precioInputs = document.querySelectorAll('.producto-precio');
    const precioBase = parseFloat(precioInputs[productoIndex].value);

    if (isNaN(precioBase) || precioBase < 0) {
        alert("Precio no válido. Por favor ingresa un valor positivo.");
        return;
    }

    const precioEnPesos = precioBase * valorDolar;
    const incremento = (precioEnPesos * porcentaje) / 100; // Se permite 0%
    const precioFinal = precioEnPesos + incremento;

    document.getElementById("resultado").innerText = `${precioFinal.toFixed(2)} pesos`;
}

function calcularTotal() {
    const valorDolar = parseFloat(document.getElementById("valorDolar").value);
    const precioInputs = document.querySelectorAll('.producto-precio');
    let total = 0;

    precioInputs.forEach(input => {
        const precioBase = parseFloat(input.value);
        if (!isNaN(precioBase) && precioBase >= 0) {
            total += precioBase * valorDolar; // Sumar en pesos
        }
    });

    const porcentaje = parseFloat(document.getElementById("porcentaje").value);
    const incremento = (total * porcentaje) / 100; // Se permite 0%
    const totalFinal = total + incremento;

    // Formatear el total para que no muestre decimales si es un número entero
    const totalFormateado = Number.isInteger(totalFinal) ? 
        totalFinal.toFixed(0) : totalFinal.toFixed(2);

    document.getElementById("resultadoTotal").innerText = totalFormateado + " pesos";
}

function resetearFormulario() {
    document.getElementById("valorDolar").value = "1400"; // Valor predeterminado
    document.querySelectorAll('.producto-precio').forEach(input => {
        input.value = "0"; // Restablecer precios de productos
    });
    document.getElementById("producto").selectedIndex = 0; // Seleccionar el primer producto
    document.getElementById("porcentaje").selectedIndex = 0; // Seleccionar el primer porcentaje
    document.getElementById("resultado").innerText = ""; // Limpiar resultado
    document.getElementById("resultadoTotal").innerText = ""; // Limpiar total
}
