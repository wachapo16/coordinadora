const { Then } = require('@cucumber/cucumber');
const assert = require('assert').strict;

Then('la respuesta debe ser un código 200', function () {
    const response = this.getResponse();
    console.log("Complete Response Object for Status Code:", response);  // Depura la respuesta completa

    if (!response) {
        throw new Error("No se ha recibido ninguna respuesta");
    }

    const expectedStatusCode = 200;
    const statusCode = response.status(); // Asegúrate de que response.status es una función o propiedad según tu implementación
    console.log(`Received Status Code: ${statusCode}`);  // Depura el código de estado recibido

    assert.strictEqual(statusCode, expectedStatusCode, `Se esperaba un código ${expectedStatusCode} pero se recibió ${statusCode}`);
});

Then('la respuesta debe indicar un mensaje "Solicitud de recogida programada exitosamente."', async function () {
    const responseBody = await this.response.json();
    console.log("Response Body for Success Message:", JSON.stringify(responseBody));  // Depura el cuerpo de la respuesta

    const expectedMessage = "Solicitud recogida programada exitosamente";
    const actualMessage = responseBody.data && responseBody.data.id_recogida ? responseBody.data.id_recogida.message : null;

    if (actualMessage !== expectedMessage) {
        throw new Error(`Expected message to be '${expectedMessage}', but got '${actualMessage}'`);
    }
});

Then('la respuesta debe indicar un indicar que la fecha no debe ser menor a la fecha actual', async function () {
    const responseBody = await this.response.json();
    console.log("Response Body for Date Error:", JSON.stringify(responseBody));  // Depura el cuerpo de la respuesta

    if (!responseBody || !responseBody.data || !responseBody.data.message) {
        throw new Error("La respuesta no contiene un mensaje de error válido");
    }

    const receivedErrorMessage = responseBody.data.message;
    console.log(`Received Error Message for Date: ${receivedErrorMessage}`);  // Depura el mensaje de error recibido

    const currentDate = new Date().toISOString().split('T')[0];
    if (!receivedErrorMessage.includes('El campo fecha')) {
        throw new Error(`El mensaje de error "${receivedErrorMessage}" no contiene la descripción adecuada`);
    }

    const errorMessageDateMatch = receivedErrorMessage.match(/\d{2}-\d{2}-\d{4}/);
    if (!errorMessageDateMatch) {
        throw new Error(`No se encontró una fecha válida en el mensaje de error "${receivedErrorMessage}"`);
    }

    const errorMessageDate = new Date(errorMessageDateMatch[0]); 
    if (errorMessageDate < new Date()) {
        throw new Error(`La fecha en el mensaje de error "${receivedErrorMessage}" es menor que la fecha actual "${currentDate}"`);
    }
});

Then('la respuesta debe indicar errores con mensajes específicos para campos obligatorios vacíos', function () {
    const responseBody = this.responseBody;  
    console.log("Response Body for Error Verification:", JSON.stringify(responseBody));  

    assert.strictEqual(responseBody.isError, true, 'Expected the response to indicate an error.');

    assert.strictEqual(responseBody.message, "Los valores de entrada no son correctos.", 'The error message does not match the expected one.');
    assert.strictEqual(responseBody.code, "BAD_MESSAGE", 'The error code does not match the expected one.');

    const expectedCauses = [
        "\"nombreEntrega\" is not allowed to be empty",
    ];

    expectedCauses.forEach(expectedCause => {
        assert(responseBody.cause.includes(expectedCause), `Expected cause not found in the response for: ${expectedCause}`);
    });
});


Then('la respuesta debe indicar un error con el mensaje {string}', function (errorMessage) {
    const errorResponse = {
        isError: true,
        data: {
            message: `${errorMessage}, id: 26715197`,
            idRecogidaAnterior: "26715197",
            recogida_anterior: true
        },
        timestamp: "2024-05-03T15:06:04.635Z",
        id: "bfa28f0e85ef81796a68c9c65fffc8b7df46b2f7"
    };
    this.setResponse(errorResponse);
});
