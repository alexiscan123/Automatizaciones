function enviarCorreosConBorrador() {
  var hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var datos = hoja.getDataRange().getValues(); // Obtiene todos los datos de la hoja
  var filaInicio = 2; // Supone que la primera fila es de encabezados
  var draftId = "r1570134830601508392"; // ID del borrador actualizado
  
  try {
    // Intenta obtener el borrador
    var borrador = GmailApp.getDraft(draftId);
    
    if (!borrador) {
      Logger.log("No se encontró el borrador con ID: " + draftId);
      return;
    }

    var mensaje = borrador.getMessage();
    var asunto = mensaje.getSubject();
    var cuerpo = mensaje.getBody();
    
    for (var i = filaInicio - 1; i < datos.length; i++) {
      var email = datos[i][0]; // Asume que la columna Email es la primera (índice 0)
      var archivoId = obtenerIdDeDrive(datos[i][1]); // Asume que la columna Archivo es la segunda (índice 1)
      var statusCol = 2; // Índice de la columna Status, en este caso es la tercera (índice 2)
      
      try {
        if (email && archivoId) {
          var archivo = DriveApp.getFileById(archivoId);
          
          // Enviar correo con archivo adjunto usando el asunto y cuerpo del borrador
          MailApp.sendEmail({
            to: email,
            subject: asunto, // Asunto desde el borrador
            htmlBody: cuerpo, // Cuerpo desde el borrador (se utiliza htmlBody para mantener formato)
            attachments: [archivo.getAs(MimeType.PDF)]
          });
          
          // Actualiza el estado a "Enviado"
          hoja.getRange(i + 1, statusCol + 1).setValue("Enviado");
        } else {
          hoja.getRange(i + 1, statusCol + 1).setValue("Error: Falta información");
        }
      } catch (e) {
        // Actualiza el estado a "Error" si algo sale mal
        hoja.getRange(i + 1, statusCol + 1).setValue("Error: " + e.message);
      }
    }
  } catch (e) {
    Logger.log("Error al obtener el borrador: " + e.message);
  }
}

// Esta función obtiene el ID del archivo desde el enlace completo de Google Drive
function obtenerIdDeDrive(url) {
  var id = "";
  try {
    id = url.match(/[-\w]{25,}/); // Extrae el ID del enlace de Google Drive
  } catch (e) {
    Logger.log("Error al obtener ID del archivo: " + e.message);
  }
  return id;
}