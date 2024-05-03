const { When } = require('@cucumber/cucumber');
const { request } = require('@playwright/test');

When('el usuario envía la solicitud de recogida', async function () {
    const context = await request.newContext();
    const requestUrl = this.baseURL;
    this.response = await context.post(requestUrl, {
        data: this.requestBody
    });
});
