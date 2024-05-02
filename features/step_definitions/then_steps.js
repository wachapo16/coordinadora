const { Then } = require('@cucumber/cucumber');

Then('la respuesta debe ser 200 y el mensaje debe indicar "Solicitud de recogida programada exitosamente."', async function () {
    const expectedStatusCode = 200;
    const expectedMessage = "Solicitud de recogida programada exitosamente.";

    console.log("Status code:", this.response.status());

    const responseBody = (await this.response.body()).toString('utf-8');
    console.log("Response body:", responseBody);

    if (this.response.status() === expectedStatusCode && responseBody.includes(expectedMessage)) {
        console.log("La respuesta es válida.");
    } else {
        console.log("La respuesta no es válida.");
    }
});

Then('la respuesta debe indicar un mensaje de error relacionado con la recogida duplicada', async function () {
    const expectedErrorMessage = "Error, ya existe una recogida programada para esta fecha y dirección.";
    const responseBody = await this.response.body();
    
    if (responseBody.includes(expectedErrorMessage)) {
        console.log("La respuesta contiene un mensaje de error relacionado con la recogida duplicada.");
    } else {
        console.log("La respuesta no contiene un mensaje de error relacionado con la recogida duplicada.");
    }
});

Then('la respuesta debe indicar un mensaje de error relacionado con los campos faltantes', function () {
    // Verificar que la respuesta contiene un mensaje de error relacionado con los campos faltantes
    const response = this.getResponse();

    if (response.statusCode === 400 && response.body.error === "Campos obligatorios faltantes") {
        console.log("La respuesta indica un mensaje de error relacionado con los campos faltantes.");
    } else {
        console.log("La respuesta no indica un mensaje de error relacionado con los campos faltantes.");
    }
});

