
const { Given } = require('@cucumber/cucumber');
const requestBody = require('./requestBody');
const { addBusinessDays } = require('date-fns');

function getFutureDate(days) {
    return addBusinessDays(new Date(), days).toISOString().split('T')[0];
}

Given('el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida futura', function () {
    const futureDate = getFutureDate(5);
    const modifiedRequestBody = {
        ...requestBody,
        fechaRecogida: futureDate
    };
    this.setRequestBody(modifiedRequestBody);
});

Given('la fecha de recogida es dentro de los próximos 5 días hábiles', function () {
    const expectedDate = getFutureDate(5);
    if (this.requestBody.fechaRecogida !== expectedDate) {
        throw new Error("La fecha de recogida no está dentro de los 5 días hábiles futuros.");
    }
});


Given('ya existe una recogida programada para la misma fecha y dirección', function () {
    this.existingPickup = {
        fecha: '2024-05-10',
        direccion: 'Cl 10 # 20 30, Envigado (Ant)'
    };
});


Given('el usuario no ha completado todos los campos requeridos correctamente', function () {
    const incompleteFields = { ...requestBody };
    delete incompleteFields.tipoProducto;
    this.setRequestBody(incompleteFields);
});


Given('el usuario ha completado todos los campos requeridos correctamente', function () {
    this.setRequestBody(requestBody);
});
