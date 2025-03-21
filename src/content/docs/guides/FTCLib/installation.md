---
title: Instalación de FTCLib
description: Instalación de FTCLib en tu Proyecto FTC en Android Studio
---

Para usar FTCLib, debes hacer algunos cambios en los archivos de configuración de tu proyecto en Android Studio. Sigue estos pasos:

## 1. Agregar el repositorio de Maven
Abre el archivo `build.gradle` que está en la raíz del proyecto y asegúrate de que tienes lo siguiente dentro de repositories:

```java
repositories {
    mavenCentral()
}
```
Esto permitirá que Android Studio descargue la librería FTCLib.

## 2. Ajustar la versión de Android
En el archivo `build.common.gradle`, cambia la versión mínima (minSdkVersion) a `24` y `habilita multiDexEnabled` para evitar problemas de memoria:
```java
defaultConfig {
    applicationId 'com.qualcomm.ftcrobotcontroller'
    minSdkVersion 24
    targetSdkVersion 28
    multiDexEnabled true
```

## 3. Cambiar la versión de Java
FTCLib necesita `Java 8`. Para configurarlo, en `build.common.gradle`, agrega lo siguiente:
```java
compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
}
```


## 4. Agregar FTCLib al código del robot

En el archivo `build.gradle` de la carpeta `TeamCode`, agrega esta línea en la sección de dependencies:

Para usar solo FTCLib sin visión:
```java
dependencies {
    implementation 'org.ftclib.ftclib:core:2.1.1' // core
```

## 5. *(Solo si usas visión con FTCLib)
Si vas a usar Computer Vision (CV), elimina todas las referencias a `"arm64-v8a"`. En su lugar, usa:
```java
ndk {
    abiFilters "armeabi-v7a"
}

ndk {
    abiFilters "armeabi-v7a"
}
```
Esto asegurará que el código funcione en la mayoría de los dispositivos compatibles con FTC.

## 6. Agregar FTCLib al código del robot

En el archivo build.gradle de la carpeta TeamCode, agrega esta línea en la sección de dependencies:

Para usar solo FTCLib sin visión:
```java
dependencies {
    implementation 'org.ftclib.ftclib:core:2.1.1' // Librería principal de FTCLib
}
```
Si también quieres usar visión (cámaras) con FTCLib:
```java
dependencies {
    implementation 'org.ftclib.ftclib:vision:2.1.0' // vision
    implementation 'org.ftclib.ftclib:core:2.1.1' // core
}
```

## Cualquier duda, puedes consultar la documentación: [Documentación Oficial](https://docs.ftclib.org/ftclib)