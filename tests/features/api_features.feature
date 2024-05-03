Feature: Solicitud de Recogida de Productos

  Scenario: Solicitud de Recogida con Fecha Futura
    Given el usuario ha completado todos los campos requeridos correctamente con una fecha de recogida futura
    And la fecha de recogida es dentro de los próximos 5 días hábiles
    When el usuario envía la solicitud de recogida
    Then la respuesta debe ser 200 y el mensaje debe indicar "Solicitud de recogida programada exitosamente."

