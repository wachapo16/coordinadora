const { Given } = require('@cucumber/cucumber');
const requestBody = require('./requestBody');
const { getFutureDate, generarDireccionAleatoria } = require('../../utils/dataHelper');

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
