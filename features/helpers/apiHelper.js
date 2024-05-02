const axios = require('axios');

async function enviarSolicitudRecogida(requestBody) {
    const url = 'https://apiv2-test.coordinadora.com/recogidas/cm-solicitud-recogidas-ms/solicitud-recogida';
    
    try {
        const response = await axios.post(url, requestBody);
        return response;
    } catch (error) {
        console.error('Error during the API call:', error.response.data);
        throw error;
    }
}

module.exports = {
    enviarSolicitudRecogida
};
