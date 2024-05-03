const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.requestBody = {};
        this.baseURL = 'https://apiv2-test.coordinadora.com/recogidas/cm-solicitud-recogidas-ms/solicitud-recogida';
    }

    setRequestBody(body) {
        this.requestBody = body;
    }

}

setWorldConstructor(CustomWorld);
