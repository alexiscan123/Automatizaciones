# Gmail Mass Mailer con Archivos Adjuntos Individualizados usando Google Apps Script
Este proyecto permite el envío masivo de correos electrónicos con archivos adjuntos individualizados utilizando Google Apps Script, Google Sheets y un borrador predefinido en Gmail.

Características principales
Envío automatizado de correos electrónicos con archivos adjuntos diferentes para cada destinatario.
El cuerpo y el asunto del correo provienen de un borrador en Gmail.
Actualización automática del estado de envío en Google Sheets.
Control de errores para identificar correos no enviados o problemas con los archivos adjuntos.
Requisitos previos
Google Apps Script: El código se ejecuta en Google Apps Script dentro de Google Sheets.
Google Drive: Los archivos adjuntos provienen de Google Drive, y sus enlaces deben estar en la hoja de cálculo.
Gmail: Se usa un borrador de Gmail para definir el asunto y el cuerpo del mensaje.

Instalación
1. Clonar el Repositorio
Clona este repositorio en tu máquina local utilizando el siguiente comando en Git Bash:
https://github.com/tu-usuario/nombre-del-repositorio.git](https://github.com/alexiscan123/Automatizaciones.git

2. Crear un Google Sheet
Crea una hoja de cálculo en Google Sheets con las siguientes columnas:
Email: La dirección de correo electrónico del destinatario.
Archivo: El enlace al archivo en Google Drive que se adjuntará.
Status: Indica si el correo fue enviado correctamente o si ocurrió un error.

3. Insertar el Código en Apps Script
Abre Google Sheets.
Ve a Extensiones > Apps Script.
Copia el código de enviarCorreosConBorrador.gs en el editor de Apps Script.
Guarda el proyecto.

4. Modificar el ID del Borrador
Para que el script funcione, debes generar un ID de borrador en Gmail. Sigue los siguientes pasos para obtener el ID del borrador:

Usar el Generador de ID de Borrador

  A. Crea un borrador en Gmail con el asunto y cuerpo del mensaje que deseas enviar.
  B. Ejecuta el script de "Verificar ID Borradores.js" en Google Apps Script para obtener el ID de ese borrador:
  C. El ID del borrador aparecerá en la consola de registros de Apps Script (accesible desde Ver > Registros). Copia ese ID.
  D. Reemplaza el ID en el código principal de enviarCorreosConBorrador:

5. Ejecución
Abre tu hoja de cálculo en Google Sheets.
Ve a Extensiones > Apps Script.
Ejecuta la función enviarCorreosConBorrador().
El script enviará correos electrónicos a todas las direcciones listadas en la hoja de cálculo, adjuntando un archivo diferente para cada remitente. Esto permite una gran flexibilidad, ya que cada destinatario recibirá un archivo personalizado.

Ejemplo de Uso
En el siguiente ejemplo, el script enviará correos electrónicos a todas las direcciones listadas en la hoja de cálculo, utilizando el borrador predefinido, y adjuntará un archivo diferente para cada destinatario desde Google Drive.

Aunque la prueba en el video muestra solo dos correos electrónicos, la funcionalidad es capaz de procesar un volumen mucho mayor. En mi caso, se enviaron 105 correos en aproximadamente 5 minutos, con adjuntos individualizados, lo que demuestra la utilidad y eficiencia del script al manejar grandes volúmenes de información de manera personalizada.

Notas
Asegúrate de que los archivos adjuntos en Drive tengan los permisos adecuados para que puedan ser enviados sin problemas.
Si encuentras un error durante la ejecución, el estado de ese correo será actualizado con la descripción del error en la hoja de cálculo.
