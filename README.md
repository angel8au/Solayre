# Solayre - Proyecto Next.js

Proyecto de sitio web para Solayre, empresa de instalación de paneles solares.

## Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **ShadCN UI** para componentes
- Páginas: Home, Nosotros, Resultados, Contacto
- Estructura preparada para integración con CMS

## Estructura del Proyecto

```
Solayre/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página Home
│   ├── globals.css         # Estilos globales
│   ├── nosotros/
│   │   └── page.tsx        # Página Nosotros
│   ├── resultados/
│   │   ├── page.tsx        # Lista de proyectos
│   │   └── [slug]/
│   │       └── page.tsx    # Detalle de proyecto
│   └── contacto/
│       └── page.tsx        # Página de contacto
├── components/
│   ├── ui/                 # Componentes ShadCN
│   ├── Header.tsx          # Header con navegación
│   ├── Footer.tsx          # Footer
│   └── ProjectCard.tsx     # Card de proyecto
├── lib/
│   ├── utils.ts            # Utilidades
│   └── mock-projects.ts    # Datos mock de proyectos
└── types/
    └── project.ts          # Tipos TypeScript para proyectos
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura CMS-Ready

La página de Resultados está preparada para integrarse con un CMS. Los datos actualmente están en `lib/mock-projects.ts` como datos mock, pero la estructura está lista para:

1. Reemplazar `getAllProjects()` y `getProjectBySlug()` con llamadas a la API del CMS
2. Los tipos en `types/project.ts` están definidos para facilitar la migración
3. El componente `ProjectCard` es reutilizable y acepta cualquier proyecto que cumpla con la interfaz `Project`

## Próximos Pasos

- Integrar CMS (Contentful, Sanity, Strapi, etc.)
- Agregar imágenes reales de proyectos
- Implementar funcionalidad del formulario de contacto
- Optimizar SEO
- Agregar más contenido y funcionalidades

