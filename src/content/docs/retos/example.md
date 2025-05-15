---
title: Example Reference
description: A reference page in my new Starlight docs site.
---

# RETOS

`runOpMode()`

**Ejemplo:**
```java
int numero = 5; // Guarda un número entero
double precio = 19.99; // Guarda un número decimal
String saludo = "Hola, mundo!"; // Guarda texto
boolean encendido = true; // Guarda verdadero o falso
```

→

- `runOpMode()` → Es el único método que debe implementarse. Contiene toda la lógica del OpMode y se ejecuta una sola vez de forma secuencial.
- `waitForStart()` → Detiene la ejecución hasta que se presione START. Es obligatorio en LinearOpMode.
- `opModeIsActive()` → Verifica si el OpMode aún está activo. Se usa dentro de bucles while para evitar que el código continúe ejecutándose después de que el OpMode haya terminado.