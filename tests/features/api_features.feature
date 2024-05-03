Feature: Solicitud de Recogida de Productos

  Scenario: Solicitud de Recogida con Fecha Futura 
    Given el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida futura
    And la fecha de recogida es dentro de los próximos 5 días hábiles
    When el usuario envía la solicitud de recogida
    Then la respuesta debe ser un código 200
    And la respuesta debe indicar un mensaje "Solicitud de recogida programada exitosamente."
  
  Scenario: Solicitud de Recogida con Fecha Pasada
    Given el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida pasada
    When el usuario envía la solicitud de recogida
    Then la respuesta debe ser un código 200
    And la respuesta debe indicar un indicar que la fecha no debe ser menor a la fecha actual
  
  Scenario: Solicitud de Recogida con Campos Obligatorios y Alfanuméricos
    Given un usuario quiere enviar una solicitud con un cuerpo JSON vacío
    When el usuario envía la solicitud de recogida
    Then la respuesta debe ser un código 200
    And la respuesta debe indicar errores con mensajes específicos para campos obligatorios vacíos
    Examples:
      | campo                     | valor  |
      | nombreEntrega             | ""     |
      | apellidosEntrega          | ""     |
      | celularEntrega            | ""     |
      | emailUsuario              | ""     |
      | descripcionTipoVia        | ""     |
      | aplicativo                | ""     |

   Scenario: Solicitud de Recogida Duplicada con la Misma Fecha y Dirección
    Given el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida ya programada
    And la fecha de recogida es la misma que una existente y la dirección también es la misma
    When el usuario envía la solicitud de recogida
    Then la respuesta debe ser un código 200
    And la respuesta debe indicar un error con el mensaje "Error, Ya existe una recogida programada para hoy"







