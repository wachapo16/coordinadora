const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.requestBody = {};
    }

    setRequestBody(body) {
        this.requestBody = body;
    }

}

setWorldConstructor(CustomWorld);
