# Gestión de Imágenes Favoritas

Esta es una aplicación web que permite gestionar tus imágenes favoritas. Incluye funcionalidades de autenticación, edición de perfil, y edición de imágenes. Además, permite cambiar el idioma de la interfaz entre español e inglés.

## Características

- **Gestión de usuarios**: Registro, inicio de sesión, cierre de sesión y eliminación de cuenta.
- **Gestión de imágenes**: Agregar, editar, eliminar y compartir imágenes.
- **Edición avanzada de imágenes**: Añadir texto, dibujar y aplicar filtros.
- **Cambio de idioma**: Soporte para español (por defecto) e inglés.
- **Interfaz responsive**: Utiliza Bootstrap para un diseño adaptativo.

## Tecnologías utilizadas

### Frontend
- **Angular**: Framework principal para el desarrollo del frontend.
- **Bootstrap**: Estilo y diseño responsive.
- **TypeScript**: Lenguaje principal para el desarrollo.
- **i18n**: Implementación para la traducción.

### Backend
- **Python**: Lenguaje principal para el backend.
- **Flask**: Framework utilizado para construir las API REST.
- **SQLite**: Base de datos ligera para almacenar datos.
- **Flask-JWT-Extended**: Manejo de autenticación con tokens JWT.

## Requisitos previos

- **Node.js** (v14 o superior)
- **Angular CLI** (v12 o superior)
- **Python** (v3.8 o superior)
- **pip** (Gestor de paquetes de Python)

## Instalación

### Backend

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd backend
    ```

2. Crea y activa un entorno virtual:
    ```bash
    python -m venv venv
    source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
    ```

3. Instala las dependencias:
    ```bash
    pip install -r requirements.txt
    ```

4. Ejecuta la aplicación:
    ```bash
    python app.py
    ```

El backend estará disponible en `http://127.0.0.1:5000`.

### Frontend

1. Ve al directorio del frontend:
    ```bash
    cd frontend
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Ejecuta la aplicación:
    ```bash
    ng serve
    ```

El frontend estará disponible en `http://localhost:4200`.

## Estructura del proyecto

### Frontend

