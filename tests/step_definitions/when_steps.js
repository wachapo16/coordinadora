const { When } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');

When('el usuario envía la solicitud de recogida', async function () {
    const context = await request.newContext();
    const requestUrl = this.baseURL;

    const response = await context.post(requestUrl, {
        data: this.requestBody
    });

    this.response = response;
    this.responseBody = await response.json(); 
    console.log("Stored Response Body:", JSON.stringify(this.responseBody));
});
