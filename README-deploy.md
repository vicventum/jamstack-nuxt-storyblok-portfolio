# Deploy (Netlify) and local preview

Instrucciones rápidas para desplegar y previsualizar la salida estática generada por Nuxt 3.

- Generar el sitio (ya está configurado en `package.json`):

```bash
npm install
npm run generate
```

- La salida de Nuxt 3 se encuentra en: `.output/public`.

- Publicar en Netlify:

  - En Netlify UI: conecta el repositorio y configura el commando de build `npm run generate` y el directorio de publicación `.output/public`.
  - O usa el archivo `netlify.toml` incluido (ya configurado): Netlify detectará `npm run generate` y publicará `.output/public`.

- Previsualizar localmente (desde la raíz del proyecto):

```bash
npx serve .output/public
```

Opcional (más verboso para debugging):

```bash
# Ejecutar generación con debug
# NUXT_DEBUG=true npx nuxi generate --verbose
```

Notas:

- Si Storyblok está inaccesible en la fase de build, las páginas muestran un fallback simple en vez de fallar (se añadieron guards en `pages/index.vue`).
- Si quieres que investigue referencias a rutas o enlaces rotos adicionales, lo hago a continuación.
