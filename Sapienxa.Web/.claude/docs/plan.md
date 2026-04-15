# Plan de Desarrollo — Landing Page Sapienxa

**Stack:** Angular v21.2.8 · **Paleta:** Azul oscuro + Blanco · **Idioma:** Español · **Mercado:** B2B Latam

---

---
## Imagen plantilla de referencia
![alt text](img-referencia/plantilla.png)


---

## Skills activas — Instrucciones para Claude Code

Este proyecto tiene instaladas las siguientes skills. **Antes de escribir cualquier código, lee todos los archivos SKILL.md correspondientes** y aplica sus guías durante todo el desarrollo:

```bash
# Leer todas las skills antes de empezar
cat .claude/skills/frontend-design/SKILL.md
cat .claude/skills/ui-ux-pro-max/SKILL.md
cat .claude/skills/page-cro/SKILL.md
cat .claude/skills/copywriting/SKILL.md
cat .claude/skills/seo-audit/SKILL.md
```

### Cómo aplicar cada skill por sección

| Skill | Aplica en |
|---|---|
| `frontend-design` | Todas las secciones — define estética, tipografía, animaciones y sistema visual |
| `ui-ux-pro-max` | Navbar, Hero, Formulario, WhatsApp Float — flujos de interacción y UX patterns |
| `page-cro` | Hero, Métricas, Beneficios, Formulario — optimización de conversión en cada bloque |
| `copywriting` | Hero, Beneficios, Servicios, Testimonios, Formulario — textos orientados a acción |
| `seo-audit` | Head, Navbar, Hero, Footer — meta tags, structured data, semántica HTML |

### Principios transversales obligatorios

- **`frontend-design`**: Comprométete con una dirección estética clara — azul oscuro refinado + blanco. Usa tipografía distintiva (no Inter/Roboto/Arial). Micro-animaciones en hover y scroll. Evita patrones genéricos de IA.
- **`ui-ux-pro-max`**: Cada interacción (hover, focus, click, scroll) debe tener feedback visual. Jerarquía visual clara. Accesibilidad WCAG AA mínimo.
- **`page-cro`**: Un solo CTA principal por sección above the fold. Reducir fricción en el formulario. Urgencia y prueba social visible en el viewport inicial.
- **`copywriting`**: Titulares orientados a beneficio, no a feature. Voz activa. Hablar al dolor del cliente PYME latinoamericano.
- **`seo-audit`**: HTML semántico (`<header>`, `<main>`, `<section>`, `<article>`). Un solo `<h1>` por página. Schema.org para organización y servicios. Core Web Vitals optimizados.

---

## Sección 01 — Navbar fija

**Comportamiento:** sticky · scroll-aware

- Logo Sapienxa (SVG inline del logo provisto) a la izquierda
- Links de navegación: Servicios · Soluciones · Casos de Éxito · Tecnologías · Contacto
- CTA botón "Agendar Demo" — azul oscuro (`#1A2B5E`) con efecto hover
- Al hacer scroll: fondo blanco con sombra sutil, transición suave
- Hamburger menu en mobile con drawer lateral

> **`ui-ux-pro-max`**: Active state visible en el link de la sección en viewport. Drawer con overlay y trap focus para accesibilidad.
> **`page-cro`**: El botón "Agendar Demo" debe ser visualmente el elemento más prominente de la navbar. Contraste alto.
> **`seo-audit`**: Usar `<nav aria-label="Navegación principal">`. Logo con `alt` descriptivo.

---

## Sección 02 — Hero Section

**Ubicación:** Above the fold · enfoque en conversión

- Fondo: azul oscuro (`#0D1B3E`) con partículas animadas o red neural sutil (canvas/CSS)
- **Headline principal:** "Escala tu empresa con IA y Automatización de Vanguardia"
- **Subtítulo:** "Transformamos tus procesos, eliminamos tareas repetitivas y aceleramos tu crecimiento real."
- 2 CTAs:
  - "Solicitar Demo Gratuita" (botón primario)
  - "Ver Casos de Éxito" (botón secundario outline)
- Visual derecho: mockup de dashboard animado o ilustración SVG de automatización

> **`copywriting`**: El headline debe atacar el dolor principal del cliente PYME — tiempo perdido en tareas manuales. Revisar con la skill que el copy pase el test "¿y qué?" antes de aprobarlo.
> **`page-cro`**: CTA primario above the fold sin scroll. Texto del botón en primera persona ("Quiero mi Demo") convierte mejor que imperativo ("Solicitar"). Incluir micro-texto de confianza debajo del CTA ("Sin compromiso · Respuesta en 24h").
> **`frontend-design`**: Animación de entrada staggered para headline → subtítulo → CTAs. Partículas deben ser sutiles, no distrayentes. El visual derecho debe cargar con lazy loading.
> **`seo-audit`**: `<h1>` único aquí. Meta description derivada del subtítulo. OG image de 1200x630px.

---

## Sección 03 — Métricas de Impacto

**Comportamiento:** contadores animados con IntersectionObserver al entrar al viewport

| Métrica | Descripción |
|---|---|
| +120 empresas | Clientes activos en Latam |
| 70% reducción | En tareas manuales promedio |
| 3x ROI | Retorno en primeros 6 meses |
| 48h implementación | Tiempo promedio de onboarding |

> **`page-cro`**: Las métricas deben estar inmediatamente después del Hero para reforzar credibilidad antes de que el usuario haga scroll. Números grandes, descripción pequeña y muted.
> **`copywriting`**: Cada descripción debe ser un beneficio específico. "En tareas manuales promedio" → mejor "de tiempo operativo recuperado".
> **`frontend-design`**: Contadores animados con easing ease-out. Separadores verticales entre métricas en desktop.

---

## Sección 04 — Nuestros Beneficios / Propuesta de Valor

**Diseño:** 3 cards con ícono SVG, título, descripción y borde inferior de color azul en hover

1. **Automatización de Procesos RPA** — Eliminamos tareas repetitivas integrando tus sistemas actuales sin reemplazarlos
2. **Inteligencia Artificial Aplicada** — Chatbots, análisis predictivo y CRM inteligente entrenados para tu industria
3. **Crecimiento Escalable** — Infraestructura que crece con tu empresa, sin contratar más personal operativo

> **`copywriting`**: Cada descripción debe comenzar con un verbo de acción en primera persona del plural ("Eliminamos", "Entrenamos", "Construimos"). Máximo 2 líneas por card.
> **`ui-ux-pro-max`**: Cards con hover lift effect (transform translateY). Ícono animado en hover. Borde inferior acento aparece con transición slide-in.
> **`page-cro`**: Agregar un link "Saber más →" en cada card que ancle a la sección de servicios correspondiente.

---

## Sección 05 — Servicios / Soluciones Detalladas

**Diseño:** grid 2x3 · tabs por categoría

| Servicio | Descripción |
|---|---|
| Chatbots IA | Atención 24/7, WhatsApp, web, ventas automáticas |
| CRM Automatizado | Seguimiento de leads, pipeline inteligente |
| RPA Empresarial | Bots para facturación, reportes, RRHH |
| Análisis Predictivo | Dashboards en tiempo real, decisiones con datos |
| Integración de Sistemas | Conectamos ERP, CRM, ecommerce y más |
| IA Personalizada | Modelos entrenados para tu industria específica |

> **`copywriting`**: Cada descripción debe incluir un resultado tangible. Ej: "Chatbots IA — Atención 24/7 en WhatsApp y web. *Reduce hasta 60% las consultas manuales.*"
> **`page-cro`**: Cada card debe tener un mini-CTA secundario ("Conocer más" o "Ver caso de uso") para capturar intención específica.
> **`seo-audit`**: Usar `<article>` para cada servicio. Agregar `itemscope itemtype="https://schema.org/Service"` en cada card.
> **`frontend-design`**: Cards con reveal animation al entrar al viewport (stagger de 100ms entre cards).

---

## Sección 06 — Tecnologías que Usamos

**Diseño:** logos en escala de grises con hover color · scroll horizontal en mobile

- OpenAI / GPT-4, LangChain, n8n, Make (Integromat), Python, Node.js, WhatsApp API, Zapier, HubSpot, AWS / GCP

> **`page-cro`**: Titular: "Tecnología de primer nivel, resultados reales". Subtexto: "Integramos con las herramientas que ya usas."
> **`frontend-design`**: Logos con CSS `filter: grayscale(1)` → `grayscale(0)` en hover con transición 200ms. Marquee infinito en mobile.
> **`seo-audit`**: `aria-label` en cada logo. Texto alternativo descriptivo en imágenes.

---

## Sección 07 — Proceso de Trabajo (Cómo Funciona)

**Diseño:** 4 pasos con línea conectora entre ellos

1. **Diagnóstico** — Diagnóstico gratuito de tus procesos actuales
2. **Diseño** — Diseño de solución personalizada con hoja de ruta
3. **Implementación** — Implementación en menos de 48h
4. **Soporte** — Soporte continuo y optimización

> **`copywriting`**: Renombrar pasos para sonar a transformación. Ej: "Diagnóstico" → "Entendemos tu negocio". "Diseño" → "Creamos tu solución a medida".
> **`page-cro`**: Al final del paso 4, agregar CTA inline: "¿Listo para empezar? → Agendar diagnóstico gratuito".
> **`ui-ux-pro-max`**: Línea conectora animada que se dibuja con scroll (SVG stroke-dashoffset). Número de paso con círculo acento.
> **`seo-audit`**: Marcar con `itemscope itemtype="https://schema.org/HowTo"` para featured snippets en Google.

---

## Sección 08 — Casos de Éxito / Testimonios

**Diseño:** carousel con autoplay · pausa en hover · foto avatar, estrellas rating, logo empresa placeholder

> "Automatizamos nuestro proceso de facturación y redujimos 15 horas semanales de trabajo manual."
> — **Ana Martínez**, CEO de LogiPyme S.A.C.

> "El chatbot de ventas de Sapienxa generó 40% más cierres en el primer mes."
> — **Carlos Ríos**, Director Comercial de InnovaRetail

> "La integración de sistemas que necesitábamos hace años, lista en 2 días."
> — **María Torres**, Gerente TI de FinGroup Perú

> **`copywriting`**: Cada testimonio debe incluir un número concreto (horas, %, veces). Los ya definidos cumplen esto — mantener ese patrón.
> **`page-cro`**: Agregar logos de empresas clientes encima del carousel ("Empresas que confían en Sapienxa").
> **`ui-ux-pro-max`**: Dots de navegación accesibles con `role="tab"`. Pausa en hover/focus. Swipe en mobile.
> **`seo-audit`**: Marcar con `itemscope itemtype="https://schema.org/Review"` para rich snippets de estrellas en Google.

---

## Sección 09 — Formulario de Contacto / Demo

**Diseño:** sección CTA principal con fondo de contraste

**Campos del formulario:**
- Nombre · Empresa · Email · Teléfono · País · ¿Qué proceso quieres automatizar? *(textarea)*

**Comportamiento:**
- Botón: "Quiero mi Demo Gratuita" — color de acento, full width
- Validación reactiva con mensajes de error inline (Angular Reactive Forms)
- Estado de éxito con animación de confirmación tras envío

> **`page-cro`**: Titular: "Tu diagnóstico gratuito, sin compromisos." Subtexto: "Respondemos en menos de 24 horas." Incluir íconos de confianza (candado) junto al botón. País con detección automática por IP.
> **`copywriting`**: Placeholder del textarea con ejemplo concreto: "Ej: Quiero automatizar el seguimiento de mis leads y reducir tiempo en reportes manuales."
> **`ui-ux-pro-max`**: Labels visibles siempre (float label en focus). Mensajes de error con ícono + texto. Estado success con checkmark animado.
> **`seo-audit`**: Labels asociados con `for`/`id`. `autocomplete` attributes en cada campo.

---

## Sección 10 — Footer

**Diseño:** dark · 4 columnas

| Columna | Contenido |
|---|---|
| Marca | Logo · tagline · redes sociales (LinkedIn, Instagram, YouTube) |
| Servicios | Links a cada solución |
| Empresa | Sobre nosotros · Blog · Casos de Éxito |
| Contacto | Email · WhatsApp · Ubicación: Lima, Perú |

> **`seo-audit`**: `<footer>` con `itemscope itemtype="https://schema.org/Organization"`. Incluir NAP (Nombre, Dirección, Teléfono) consistente con Google Business Profile.
> **`copywriting`**: Tagline del footer diferente al hero: "Hacemos que tu empresa trabaje más inteligente, no más duro."

---

## Sección 11 — Botón Flotante WhatsApp

**Diseño:** fixed bottom-right · animación de pulso para llamar atención

- Ícono WhatsApp verde fijo en esquina inferior derecha
- Al hacer clic despliega 3 opciones en popup animado (slide-up):
  - 📞 **Te llamamos**
  - 💬 **Escríbenos por WhatsApp**
  - 🎧 **Atención al Cliente**
- Cierra al hacer clic fuera del popup o en el botón X

> **`page-cro`**: El popup debe mostrar mensaje de bienvenida: "Hola 👋 ¿Cómo podemos ayudarte hoy?" antes de las opciones. Cada opción con subtexto breve ("Te llamamos en menos de 1h").
> **`ui-ux-pro-max`**: Animación slide-up + fade en apertura. Trap focus dentro del popup. Cerrar con tecla Escape. Pulso del botón se detiene si el usuario ya interactuó (sessionStorage).
> **`frontend-design`**: No mostrar animación de pulso si el formulario ya fue completado en la sesión.

---

## Stack Técnico — Angular v21.2.8

**Dependencias y configuración:**

- Angular 21.2.8 (Standalone Components)
- Angular Router
- Angular Reactive Forms
- Angular Animations
- SCSS con variables globales
- IntersectionObserver API (contadores + animaciones de entrada)
- OnPush Change Detection

**Variables SCSS globales:**

```scss
$color-primary:    #0D1B3E;
$color-secondary:  #1A2B5E;
$color-accent:     #1A5EFF;
$color-white:      #FFFFFF;
$color-gray-light: #F5F7FA;
$color-text-muted: #6B7280;
```

**Estructura de componentes:**

```
LandingPageComponent
├── NavbarComponent
├── HeroComponent
├── MetricsComponent
├── BenefitsComponent
├── ServicesComponent
├── TechnologiesComponent
├── ProcessComponent
├── TestimonialsComponent
├── ContactFormComponent
├── FooterComponent
└── WhatsappFloatComponent
```

**Breakpoints responsive:**

| Breakpoint | Valor |
|---|---|
| Mobile | 768px |
| Tablet | 1024px |
| Desktop | 1280px+ |

**Extras:**
- SEO: meta tags Open Graph + `Title` service dinámico
- Lazy loading de imágenes con `loading="lazy"`
- Animaciones de entrada con `@angular/animations` + IntersectionObserver
- Schema.org: `Organization`, `Service`, `HowTo`, `Review`
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms