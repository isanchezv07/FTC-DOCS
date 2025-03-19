---
title: Instalación de Android Studio y Configuración del SDK
description: Guía paso a paso para instalar Android Studio, configurar el SDK y clonar el repositorio.
---

Este tutorial te llevará a través de los pasos necesarios para instalar Android Studio, configurar el SDK de Android y clonar el repositorio de FTC para que puedas empezar a programar.

## 1. Instalación de Android Studio

**Paso 1: Descargar Android Studio**
1. Dirígete al [sitio oficial de Android Studio](https://developer.android.com/studio).
2. Haz clic en "Download Android Studio".
3. Elige la versión que corresponde a tu sistema operativo (Windows, macOS o Linux) y descarga el archivo correspondiente.

**Paso 2: Instalar Android Studio**
- **Windows:**
  1. Ejecuta el archivo `.exe` descargado.
  2. Selecciona la opción de instalación estándar, que incluye Android Studio, el SDK de Android y el Android Virtual Device.
  3. Sigue las instrucciones para completar la instalación.
- **macOS:**
  1. Abre el archivo `.dmg` descargado.
  2. Arrastra Android Studio a la carpeta "Aplicaciones".
  3. Abre Android Studio desde la carpeta de aplicaciones y sigue las instrucciones para completar la configuración inicial.
- **Linux:**
  1. Extrae el archivo `.zip` descargado en un directorio adecuado, por ejemplo, `~/android-studio`.
  2. Desde la terminal, navega a la carpeta `bin` dentro de `android-studio` y ejecuta `studio.sh`.
  3. Sigue las instrucciones para completar la configuración.

## 2. Configuración del SDK de Android

Una vez que Android Studio esté instalado, es necesario configurar el SDK de Android.

**Paso 1: Abrir Android Studio**
1. Abre Android Studio.
2. En la pantalla de bienvenida, selecciona "Start a new Android Studio project" o "Configure" si ya tienes un proyecto abierto.
3. Si es la primera vez que abres Android Studio, se descargará automáticamente el SDK y las herramientas necesarias. Si no lo hace, puedes configurarlo manualmente.

**Paso 2: Descargar el SDK**
1. Dirígete a **File** > **Settings** (en macOS, **Android Studio** > **Preferences**).
2. En el panel izquierdo, selecciona **Appearance & Behavior** > **System Settings** > **Android SDK**.
3. Si aún no tienes el SDK, selecciona los paquetes recomendados, como `Android 11.0 (R)` y las herramientas de construcción, y haz clic en "Apply" para descargarlos.

**Paso 3: Verificar la configuración del SDK**
1. Asegúrate de que el SDK esté bien instalado. La ubicación por defecto en Windows es algo como `C:\Users\<tu_usuario>\AppData\Local\Android\Sdk` o en macOS `/Users/<tu_usuario>/Library/Android/sdk`.

## 3. Instalación del Java Development Kit (JDK)

Android Studio necesita el JDK para compilar el código.

**Paso 1: Verificar JDK**
1. En Android Studio, ve a **File** > **Project Structure**.
2. Verifica que la ruta del JDK esté correctamente configurada. Android Studio debería configurarlo automáticamente, pero puedes seleccionar una versión compatible si es necesario.

## 4. Clonar el Repositorio de FTC

Para empezar a trabajar, necesitas clonar el repositorio desde GitHub.

**Paso 1: Clonar el repositorio**
1. **Ve al repositorio en GitHub**:  
   Dirígete a la página del repositorio que deseas descargar, por ejemplo:  
   [FtcRobotController en GitHub](https://github.com/FIRST-Tech-Challenge/FtcRobotController)

2. **Descargar como ZIP**:  
   En la página del repositorio, haz clic en el botón verde **Code** y luego selecciona **Download ZIP**. Esto descargará el repositorio como un archivo comprimido en formato `.zip`.

3. **Descomprimir el archivo ZIP**:  
   Una vez que el archivo ZIP se haya descargado, descomprímelo en la carpeta de tu elección. Esto te dará acceso a los archivos del repositorio.


**Paso 2: Abrir el proyecto clonado**
1. **Abre Android Studio**.
2. En la pantalla inicial de Android Studio, selecciona **Open an existing project**.
3. Navega a la carpeta donde descomprimiste el archivo ZIP del repositorio.
4. Selecciona la carpeta que contiene los archivos del repositorio y haz clic en **OK**.
5. Android Studio abrirá el proyecto y comenzará a sincronizar los archivos.

## 5. Configuración del Proyecto

**Paso 1: Verificar Gradle**
1. Android Studio utiliza Gradle para compilar el proyecto. Si es la primera vez que abres el proyecto, Gradle se descargará automáticamente.
2. Si es necesario, verifica que el archivo `build.gradle` esté configurado correctamente.

**Paso 2: Sincronizar el Proyecto**
1. Si hay algún error, ve a **File** > **Sync Project with Gradle Files** para asegurarte de que todas las dependencias estén correctamente descargadas.

## 6. Comenzar a Desarrollar

¡Ahora estás listo para comenzar a desarrollar! Puedes empezar a modificar el código, agregar nuevas funcionalidades y probar tu aplicación en el dispositivo o emulador.

---

Este es el proceso básico para instalar Android Studio, configurar el SDK y clonar el repositorio de FTC. Si necesitas más ayuda o detalles, no dudes en preguntar. ¡Buena suerte con tu desarrollo!