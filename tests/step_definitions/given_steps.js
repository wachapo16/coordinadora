const { Given } = require('@cucumber/cucumber');
const requestBody = require('./requestBody');
const DataHelper = require('../../utils/dataHelper');
const { getFutureDate, generarDireccionAleatoria } = DataHelper;

Given('el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida futura', function () {
    const futureDate = getFutureDate(5);
    const direccionAleatoria = generarDireccionAleatoria();

    const modifiedRequestBody = {
        ...requestBody,
        fechaRecogida: futureDate,
        direccion: direccionAleatoria
    };

    this.setRequestBody(modifiedRequestBody);
});

Given('la fecha de recogida es dentro de los próximos 5 días hábiles', function () {
    const expectedDate = getFutureDate(5);
    if (this.requestBody.fechaRecogida !== expectedDate) {
        throw new Error("La fecha de recogida no está dentro de los 5 días hábiles futuros.");
    }
});

Given('el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida ya programada', function () {
    this.setRequestBody({
        direccion: generarDireccionAleatoria(), 
        fechaRecogida: getFutureDate(0)
    });
});

Given('el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida pasada', function () {
    const pastDate = DataHelper.getPastDate(5);
    const direccionAleatoria = DataHelper.generarDireccionAleatoria();

    const modifiedRequestBody = {
        ...requestBody,
        fechaRecogida: pastDate,
        direccion: direccionAleatoria
    };

    this.setRequestBody(modifiedRequestBody);
});

Given('un usuario quiere enviar una solicitud con un cuerpo JSON vacío', function () {
    const modifiedRequestBody = {
        ...requestBody,
        nombreEntrega: "",
        apellidosEntrega: "",
        celularEntrega: "",
        emailUsuario: "",
        descripcionTipoVia: "",
        aplicativo: ""
    };

    this.setRequestBody(modifiedRequestBody);
});


Given('la fecha de recogida es la misma que una existente y la dirección también es la misma', function () {
    const direccion = "Calle 123"; 
    const fechaRecogida = "2024-05-05"; 

    if (!this.existingRecogidas || this.existingRecogidas.length === 0) {
        const modifiedRequestBody = {
            direccion: direccion,
            fechaRecogida: fechaRecogida
        };
        this.setRequestBody(modifiedRequestBody);
    } else {
        const recogidaExistente = this.existingRecogidas.find(recogida => recogida.direccion === direccion && recogida.fechaRecogida === fechaRecogida);
        if (!recogidaExistente) {
            throw new Error("No hay una recogida programada previamente para esta dirección y fecha");
        }

        const responseBody = {
            isError: true,
            data: {
                message: `Error, Ya existe una recogida programada para hoy, id: ${recogidaExistente.id}`,
                idRecogidaAnterior: recogidaExistente.id,
                recogida_anterior: true
            },
            timestamp: new Date().toISOString(),
            id: 'd9aa72bb6d42a5a592b34773f47caf3a93204277'
        };

        this.setResponse(responseBody);
    }
});