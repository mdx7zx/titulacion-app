# Titulación

App instalable de tarjetas de estudio para enfermería. Sesiones de repaso con repetición espaciada, exámenes de opción múltiple y 12 minijuegos desbloqueables.

Cada pregunta del examen explica por qué la respuesta correcta lo es **y por qué falla cada opción que descartaste** — que es donde de verdad se aprende.

Versión completa de Guía EPAC: incluye tarjetas integrales por tema del PDF `Guía Epac.pdf`, más un bloque de alto rendimiento con preguntas tipo examen, casos clínicos y datos clave.

La sección `Temario resuelto` integra contenido del PDF grande `GUIA EPAC. TEMARIO RESUELTO .pdf`, enfocado en Legislación, Gerencia, Investigación cualitativa/cuantitativa y Teóricas.

**410 tarjetas · 217 preguntas de examen · 2 secciones · 22 temas · 12 juegos**

## App publicada

https://mdx7zx.github.io/titulacion-app/

## Cómo se guarda el avance

Dos capas, y la primera nunca depende de internet:

1. **En el dispositivo** — IndexedDB, con respaldo a `localStorage`. Siempre activa. Aquí viven las cajas de repetición espaciada, el historial del examen, las estrellas y los récords.
2. **En tu cuenta** — Firebase, opcional. Si entras con Google, el avance viaja entre el teléfono y la computadora, y sobrevive a reinstalar la app. Cada persona ve solo lo suyo.

Sin configurar Firebase la app funciona igual, nada más que el avance se queda en ese aparato. Para activar las cuentas, ver **[FIREBASE.md](FIREBASE.md)** (unos 10 minutos, una sola vez).

Cuando la misma persona estudia en dos aparatos, los avances se funden sin perder trabajo: en cada tarjeta gana la calificación más reciente, las estrellas toman el valor más alto (nunca se suman) y las preguntas conservan el historial del aparato con más intentos.

## Abrirla en la computadora

Desde esta carpeta:

```bash
python -m http.server 8080
```

Después abre `http://localhost:8080` en Chrome o Edge. En el menú del navegador elige **Instalar Titulación** para usarla como app.

Tras la primera visita funciona sin conexión.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La app completa: contenido, lógica y estilos |
| `firebase-config.js` | Datos del proyecto de Firebase (pegar los tuyos) |
| `service-worker.js` | Caché para uso sin conexión |
| `manifest.webmanifest` | Ícono y nombre al instalarla |
| `FIREBASE.md` | Guía paso a paso para conectar las cuentas |
