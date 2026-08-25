/* ============================================================
   CONFIGURACIÓN DE FIREBASE
   ------------------------------------------------------------
   Pega aquí los datos que te da la consola de Firebase en
   Configuración del proyecto › Tus apps › App web › Configuración.

   Mientras esto esté vacío la app funciona igual, pero el avance
   se guarda SOLO en el dispositivo (sin cuentas ni sincronización).

   Estos datos NO son secretos: identifican al proyecto, no dan
   acceso. Quien protege los datos son las reglas de Firestore
   (ver FIREBASE.md) y la lista de dominios autorizados.
   ============================================================ */
window.FIREBASE_CONFIG = {
  apiKey:            "PEGA_AQUI_TU_API_KEY",
  authDomain:        "PEGA_AQUI.firebaseapp.com",
  projectId:         "PEGA_AQUI",
  storageBucket:     "PEGA_AQUI.appspot.com",
  messagingSenderId: "PEGA_AQUI",
  appId:             "PEGA_AQUI"
};
