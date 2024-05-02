Feature: Solicitud de Recogida de Productos

  Scenario: Solicitud de Recogida con Fecha Futura
    Given el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida futura
    And la fecha de recogida es dentro de los próximos 5 días hábiles
    When el usuario envía la solicitud de recogida
    Then la respuesta debe ser 200 y el mensaje debe indicar "Solicitud de recogida programada exitosamente."

  Scenario: Solicitud Duplicada de Recogida
    Given el usuario ha completado todos los campos requeridos correctamente
    And ya existe una recogida programada para la misma fecha y dirección
    When el usuario envía la solicitud de recogida
    Then la respuesta debe indicar un mensaje de error relacionado con la recogida duplicada

  Scenario: Campos Obligatorios Faltantes en la Solicitud de Recogida
    Given el usuario no ha completado todos los campos requeridos correctamente
    When el usuario intenta enviar la solicitud de recogida sin completar todos los campos obligatorios
    Then la respuesta debe indicar un mensaje de error relacionado con los campos faltantes
