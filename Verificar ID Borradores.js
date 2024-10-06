function listarBorradores() {
  var borradores = GmailApp.getDrafts(); // Obtiene todos los borradores
  for (var i = 0; i < borradores.length; i++) {
    var mensaje = borradores[i].getMessage();
    Logger.log("Asunto: " + mensaje.getSubject() + " | ID: " + borradores[i].getId());
  }
}
