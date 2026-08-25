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
  apiKey:            "AIzaSyCfy6NMBEfQARC5Y7xeNNnHPq70OAESWgc",
  authDomain:        "titulacion-app.firebaseapp.com",
  projectId:         "titulacion-app",
  storageBucket:     "titulacion-app.firebasestorage.app",
  messagingSenderId: "1090661839477",
  appId:             "1:1090661839477:web:228f2e87b419aa30293e3c"
};
