# 🏎️ Cars Collection

Una aplicación web full-stack para gestionar y mostrar una colección de autos de la película Cars. Este proyecto incluye un backend con Strapi (CMS headless) y un frontend moderno con React.

## 📋 Descripción

Cars Collection es una aplicación que permite:
- 📸 Visualizar una colección de autos con imágenes y detalles
- 🎨 Interfaz moderna y responsive con TailwindCSS
- ⚡ Administración de contenido fácil con Strapi
- 🖼️ Carrusel de imágenes para cada auto
- 🔍 Sistema de filtros para la colección

## 🏗️ Estructura del Proyecto

```
cars-collection/
├── backend/          # API Backend con Strapi
│   ├── src/
│   │   └── api/     # Endpoints de la API
│   │       ├── car/ # Colección de autos
│   │       └── cars-section/
│   └── config/      # Configuración de Strapi
└── frontend/        # Aplicación React
    └── src/
        ├── components/  # Componentes de UI
        ├── context/     # Contextos de React
        ├── hooks/       # Hooks personalizados
        └── lib/         # Utilidades y servicios
```

## 🚀 Tecnologías

### Backend
- **Strapi v5.31.1** - CMS Headless
- **TypeScript** - Tipado estático
- **Better-SQLite3** - Base de datos

### Frontend
- **React 19** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **TailwindCSS 4** - Framework CSS
- **React Router 7** - Navegación

## 📦 Instalación

### Prerrequisitos
- Node.js >= 20.0.0 (recomendado LTS)
- npm >= 6.0.0 o pnpm

### Backend

```bash
cd backend
npm install  # o pnpm install
npm run develop
```

El backend estará disponible en `http://localhost:1337`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

## 🎮 Uso

### Desarrollo

1. **Iniciar el backend:**
   ```bash
   cd backend
   npm run develop
   ```
   - Accede al panel de administración en `http://localhost:1337/admin`
   - Crea un usuario administrador en el primer inicio
   - Agrega autos desde el panel de administración

2. **Iniciar el frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
   - La aplicación se abrirá en `http://localhost:5173`

### Producción

#### Backend
```bash
cd backend
npm run build
npm run start
```

#### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## 📝 Características del Auto

Cada auto en la colección incluye:
- **Nombre** (requerido)
- **Imagen principal** (requerida)
- **Descripción** (requerida)
- **Carrusel de imágenes**
- **Fecha de adquisición**
- **Lugar**
- **Precio**
- **Año del modelo**

## 🔧 Comandos Disponibles

### Backend
```bash
npm run develop    # Modo desarrollo con hot-reload
npm run start      # Iniciar en producción
npm run build      # Compilar el panel de admin
npm run strapi     # Comandos CLI de Strapi
```

### Frontend
```bash
npm run dev        # Servidor de desarrollo
npm run build      # Compilar para producción
npm run preview    # Preview de la build de producción
npm run lint       # Ejecutar ESLint
```

## 🌐 Despliegue

El proyecto está configurado para desplegarse en Vercel (frontend) con configuración de rewrites incluida en `frontend/vercel.json`.

Para el backend, puedes usar [Strapi Cloud](https://cloud.strapi.io) o cualquier plataforma que soporte Node.js.

## 📚 Recursos

### Strapi
- [Documentación oficial de Strapi](https://docs.strapi.io)
- [Tutoriales de Strapi](https://strapi.io/tutorials)

### React + Vite
- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de TailwindCSS](https://tailwindcss.com)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

## 👤 Autor

**Guido Perez R.**

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
