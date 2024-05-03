const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.requestBody = {};
        this.baseURL = 'https://apiv2-test.coordinadora.com/recogidas/cm-solicitud-recogidas-ms/solicitud-recogida';
        this.response = null;

        this.existingRecogidas = [{
            direccion: "Calle 123",
            fechaRecogida: "2024-05-05"
        }];
    }

    setRequestBody(body) {
        this.requestBody = body;
    }

    setResponse(response) {
        this.response = response;
    }

    getResponse() {
        return this.response;
    }

}

setWorldConstructor(CustomWorld);
