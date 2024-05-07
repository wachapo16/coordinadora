# Automatización API Coordinadora

Este proyecto implementa pruebas automatizadas para un servicio de recogida de productos ofrecido por Coordinadora. Las pruebas validan que la creación de solicitudes de recogida cumpla con los siguientes criterios de aceptación:
- **Dirección**: Campo obligatorio de tipo alfanumérico.
- **Fecha de Recogida**: Campo obligatorio de tipo alfanumérico en formato `yyyy-mm-dd`, permitiendo solo fechas futuras dentro de los 5 días hábiles siguientes. No se permite duplicar fechas para la misma dirección.
- **Datos del destinatario y usuario**: Los campos `nombreEntrega`, `apellidosEntrega`, `celularEntrega`, `emailUsuario`, `descripcionTipoVia`, y `aplicativo` son obligatorios y deben ser alfanuméricos.

Las pruebas están diseñadas para asegurar que la funcionalidad clave del sistema se comporte según lo esperado, mejorando así la fiabilidad y la experiencia del usuario en la plataforma.

## Pre-requisitos

Para ejecutar este proyecto, necesitarás tener instalado:
- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)

## Comandos para ejecución de pruebas

Para correr las pruebas y generar reportes automáticamente, puedes usar el siguiente comando en tu terminal:

```bash
npm run generate-report
