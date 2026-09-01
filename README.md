# Titulación

App instalable de tarjetas de estudio para enfermería. Sesiones de repaso con repetición espaciada, exámenes de opción múltiple y 12 minijuegos desbloqueables.

Cada pregunta del examen explica por qué la respuesta correcta lo es **y por qué falla cada opción que descartaste** — que es donde de verdad se aprende.

Versión completa de Guía EPAC: incluye tarjetas integrales por tema del PDF `Guía Epac.pdf`, más un bloque de alto rendimiento con preguntas tipo examen, casos clínicos y datos clave.

La sección `Temario resuelto` integra contenido del PDF grande `GUIA EPAC. TEMARIO RESUELTO .pdf`, enfocado en Legislación, Gerencia, Investigación cualitativa/cuantitativa y Teóricas.

**410 tarjetas · 429 preguntas de examen · 2 secciones · 22 temas · 12 juegos**

Cada pregunta está etiquetada por **concepto** y por **nivel de dificultad** (1 recuerdo · 2 comprensión · 3 aplicación clínica · 4 integración estilo EPAC). La selección de examen sube de nivel conforme dominas cada concepto: quien empieza recibe línea base, quien ya domina recibe casos clínicos. Si fallas un concepto y existe una variante que nunca has visto, te llega la variante — repetición del conocimiento, no de la pregunta. Los casos clínicos dan 1:30 en el contrarreloj.

## App publicada

https://mdx7zx.github.io/titulacion-app/

## Examen Integral

Además de los exámenes de 10 y 20, hay un modo largo que cruza **todos los bancos a la vez**: 100 preguntas, 150 o el banco completo.

No es solo para sacar una calificación. Elige las preguntas mirando tu historial —da prioridad a lo que fallaste, luego a lo que va a medias y a lo que no has visto, y mete algunas ya dominadas para comprobar que se te quedaron— y reparte el examen entre bancos y temas para que ninguno acapare. Al terminar muestra el desempeño por banco, por tema, la retención de lo que ya dominabas y una comparación de tu avance antes y después.

**Una pregunta que ya alcanzó Dominada no pierde ese logro por fallarla después.** El error se registra como «necesita repaso», no como retroceso: el total histórico de Dominadas nunca baja. Así se distingue lo que ya aprendiste de lo que necesitas refrescar.

Los bancos se detectan solos: si mañana se agrega uno nuevo, entra al Examen Integral sin tocar código.

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
