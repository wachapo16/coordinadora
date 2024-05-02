const { When } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');

When('el usuario envía la solicitud de recogida', async function () {
    const context = await request.newContext();
    this.response = await context.post('https://apiv2-test.coordinadora.com/recogidas/cm-solicitud-recogidas-ms/solicitud-recogida', {
        data: this.requestBody
    });
});

When('el usuario intenta enviar la solicitud de recogida sin completar todos los campos obligatorios', function () {
    const incompleteRequestBody = {
        tipoEnvio: "1",
        tipoProducto: "4",
    };

    this.setRequestBody(incompleteRequestBody);
});

