const { Then } = require('@cucumber/cucumber');

Then('la respuesta debe ser 200 y el mensaje debe indicar "Solicitud de recogida programada exitosamente."', async function () {
    const expectedStatusCode = 200;
    const expectedMessage = "Solicitud recogida programada exitosamente";

    const statusCode = this.response.status();
    const responseBody = await this.response.json();

    if (statusCode !== expectedStatusCode) {
        throw new Error(`Expected status code to be ${expectedStatusCode}, but got ${statusCode}`);
    }

    const actualMessage = responseBody.data && responseBody.data.id_recogida ? responseBody.data.id_recogida.message : null;

    if (actualMessage !== expectedMessage) {
        throw new Error(`Expected message to be '${expectedMessage}', but got '${actualMessage}'`);
    }

    console.log("Validación exitosa: ", JSON.stringify(responseBody));
});