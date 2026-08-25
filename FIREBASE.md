# Conectar la app con Firebase

La app **ya funciona sin esto**: el avance se guarda en el dispositivo. Firebase agrega dos cosas: que cada quien tenga su **cuenta** y que su avance **viaje entre el teléfono y la computadora**.

Son unos 10 minutos, una sola vez.

---

## 1. Crear el proyecto

1. Entra a <https://console.firebase.google.com> con tu cuenta de Google.
2. **Crear un proyecto** → nómbralo `titulacion-app`.
3. Google Analytics: puedes desactivarlo, no hace falta.

## 2. Registrar la app web

1. Dentro del proyecto, ícono **`</>`** (Web).
2. Apodo: `Titulación`. **No** marques Firebase Hosting (la app vive en GitHub Pages).
3. Firebase te muestra un bloque `firebaseConfig = { ... }`. **Copia esos valores.**

## 3. Pegar la configuración

Abre `firebase-config.js` y reemplaza cada `PEGA_AQUI` con lo que copiaste:

```js
window.FIREBASE_CONFIG = {
  apiKey:            "AIza...",
  authDomain:        "titulacion-app.firebaseapp.com",
  projectId:         "titulacion-app",
  storageBucket:     "titulacion-app.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abc123"
};
```

Estos datos son públicos por diseño — identifican al proyecto, no dan acceso. Lo que protege la información son las reglas del paso 5.

## 4. Activar el acceso con Google

1. **Compilación › Authentication › Comenzar**.
2. Pestaña **Sign-in method** → habilita **Google** → Guardar.
3. Pestaña **Settings › Authorized domains** → **Agregar dominio**:
   - `mdx7zx.github.io`
   - `localhost` (para probar en la computadora)

> Si te falta este paso, el botón *Entrar* abre la ventana y se cierra sin hacer nada.

## 5. Crear la base y poner las reglas

1. **Compilación › Firestore Database › Crear base de datos**.
2. Elige **modo de producción** y la región `nam5` (Estados Unidos) o la más cercana.
3. Pestaña **Reglas** → borra lo que haya y pega esto → **Publicar**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Cada quien manda solo sobre su propia carpeta.
    match /usuarios/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;

      match /estado/{doc} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
      }
    }

    // Todo lo demás, cerrado.
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Esto es lo que hace que varias personas puedan usar la app sin verse el avance entre ellas: nadie puede leer ni escribir fuera de su propio `uid`.

## 6. Publicar

```bash
git add -A && git commit -m "Conectar Firebase" && git push
```

GitHub Pages se actualiza solo en un par de minutos.

---

## Cómo comprobar que quedó

1. Abre la app y presiona **Entrar** → elige tu cuenta de Google.
2. Debajo de tu nombre debe decir **✓ Guardado en tu cuenta**.
3. Estudia unas tarjetas.
4. Abre la app en el teléfono, entra con la misma cuenta: **el avance debe aparecer ahí**.

En la consola de Firebase, en **Firestore Database**, verás:

```
usuarios/
  └── {tu-uid}/
        ├── nombre, correo, foto, visto
        └── estado/
              └── progreso   ← aquí vive el avance
```

## Cuánto cuesta

Nada, para este uso. El plan gratuito (Spark) da 50,000 lecturas y 20,000 escrituras por día. La app agrupa los cambios y escribe una vez cada 1.5 segundos como mucho, así que una sesión intensa de estudio son decenas de escrituras, no miles.

## Si algo falla

| Síntoma | Causa casi siempre |
|---|---|
| El botón *Entrar* no hace nada | Falta agregar el dominio en **Authorized domains** (paso 4) |
| Dice *Sin conexión · guardado aquí* | Las reglas no se publicaron, o el `projectId` está mal |
| *Missing or insufficient permissions* en la consola | Las reglas del paso 5 no quedaron publicadas |
| El avance no pasa de un aparato a otro | No es la misma cuenta de Google en los dos |

En todos los casos el avance **sigue guardado en el dispositivo**: la nube nunca es requisito para estudiar.
