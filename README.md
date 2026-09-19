# Gabrielly Ferreira · Portfolio

**[Live site →](https://portafolio-gabrielly.vercel.app)**

Personal portfolio of a full-stack developer: nine projects, four frontend experiments and five backend systems, presented in English, Spanish and Portuguese.

## 🇬🇧 English

### What it demonstrates

- **Trilingual from the start.** EN/ES/PT with a visible language switch, translated resume downloads and a page title that follows the active language.
- **Auto-scrolling previews without video.** Each project card shows a tall full-page screenshot inside a fixed-height frame that slowly pans down and back up while it is in view or hovered, simulating someone scrolling the real site. Pure CSS transform driven by a measured scroll distance, no video files.
- **A headline that never wraps.** A small `useFitText` hook shrinks the hero title until it fits on one line in any language and at any viewport width, and ignores zero-width measurements so it can never collapse the text.
- **Motion that respects the user.** Reveal animations, the hero background and the tech marquee all honor `prefers-reduced-motion`.
- **Accessible structure.** Skip link, labelled navigation, keyboard-friendly language switch and a mobile drawer menu.
- **Ready to share.** Open Graph and Twitter card tags with an absolute preview image and a canonical URL.

### Tech stack

React 19 · TypeScript · Vite · Framer Motion · Oxlint

### Run locally

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (type-check and production build), `npm run preview`, `npm run lint`.

### Structure

```
src/
  components/   Hero, Nav, TechMarquee, ProjectsGrid, ProjectCard, ScreenshotPreview, About, Footer
  data/         project list (names, stacks, live and repo links)
  i18n/         EN/ES/PT strings and language context
  lib/          useFitText, shared easing
public/
  screenshots/  full-page captures used by the previews
  resume/       CVs in EN, ES and PT
```

## 🇪🇸 Español

### Qué demuestra

- **Trilingüe desde el inicio.** EN/ES/PT con selector de idioma visible, descarga del currículum traducido y un título de página que sigue al idioma activo.
- **Vistas previas con scroll automático, sin video.** Cada tarjeta muestra una captura de página completa dentro de un marco de altura fija que se desplaza despacio hacia abajo y hacia arriba mientras está visible o con el cursor encima, simulando a alguien navegando el sitio real. Solo una transformación CSS calculada a partir de la distancia medida, sin archivos de video.
- **Un título que nunca se corta en dos líneas.** El hook `useFitText` reduce el tamaño del título hasta que entra en una sola línea en cualquier idioma y ancho de pantalla, e ignora mediciones de ancho cero para no colapsar el texto.
- **Movimiento que respeta al usuario.** Las animaciones de aparición, el fondo del hero y el marquee de tecnologías respetan `prefers-reduced-motion`.
- **Estructura accesible.** Enlace para saltar al contenido, navegación etiquetada, selector de idioma usable con teclado y menú lateral en móvil.
- **Listo para compartir.** Etiquetas Open Graph y Twitter card con imagen de vista previa absoluta y URL canónica.

### Tecnologías utilizadas

React 19 · TypeScript · Vite · Framer Motion · Oxlint

### Cómo ejecutar localmente

```bash
npm install
npm run dev
```

Otros scripts: `npm run build` (verificación de tipos y build de producción), `npm run preview`, `npm run lint`.

## 🇧🇷 Português

### O que demonstra

- **Trilíngue desde o início.** EN/ES/PT com seletor de idioma visível, download do currículo traduzido e um título de página que acompanha o idioma ativo.
- **Prévias com rolagem automática, sem vídeo.** Cada card mostra uma captura da página inteira dentro de um quadro de altura fixa que desliza devagar para baixo e para cima enquanto está visível ou com o mouse em cima, simulando alguém navegando no site real. Só uma transformação CSS calculada a partir da distância medida, sem arquivos de vídeo.
- **Um título que nunca quebra em duas linhas.** O hook `useFitText` diminui o título até caber em uma linha só em qualquer idioma e largura de tela, e ignora medições de largura zero para não colapsar o texto.
- **Movimento que respeita o usuário.** As animações de entrada, o fundo do hero e o marquee de tecnologias respeitam `prefers-reduced-motion`.
- **Estrutura acessível.** Link para pular ao conteúdo, navegação rotulada, seletor de idioma utilizável pelo teclado e menu lateral no mobile.
- **Pronto para compartilhar.** Tags Open Graph e Twitter card com imagem de prévia absoluta e URL canônica.

### Tecnologias utilizadas

React 19 · TypeScript · Vite · Framer Motion · Oxlint

### Como rodar localmente

```bash
npm install
npm run dev
```

Outros scripts: `npm run build` (checagem de tipos e build de produção), `npm run preview`, `npm run lint`.

## Author

Designed and built by [Gabrielly Ferreira](https://github.com/GabriellyFerreiraa) · [LinkedIn](https://www.linkedin.com/in/gabrielly-ferreira-619609113/)
