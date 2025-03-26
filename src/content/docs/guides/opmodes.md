---
title: Configuración y Estructura
description: Guía completa para configurar motores DC, servos y entender la estructura de TeleOp y Autónomo en FTC.
---

Este tutorial te enseñará a configurar motores DC, servos y sistemas avanzados de control en FTC. Además, aprenderás la diferencia entre `LinearOpMode` y `OpMode`, cuándo usar cada uno y cómo estructurar tu código para los modos **TeleOp** y **Autónomo**.

---

## 1. ¿Qué es un OpMode?

Un **OpMode** es el programa que controla tu robot. Hay dos tipos principales:

- **`LinearOpMode`**: Se ejecuta de forma secuencial, línea por línea. Ideal para el modo autónomo.
- **`OpMode`**: Se ejecuta en ciclos repetitivos (loop). Ideal para el modo TeleOp (control manual).

---

## 2. Estructura de un `OpMode` (Modo Autónomo)

El `OpMode` es ideal para ejecutar el código paso a paso. Su estructura básica es la siguiente:

### Código de ejemplo

```java
// Paquete donde se guarda el código del robot
package org.firstinspires.ftc.teamcode;

// Importamos las herramientas necesarias para programar el robot
import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor; // Importamos la clase para los motores

// Definimos que este programa es un TeleOp
@TeleOp(name="TeleOpSimple", group="Pruebas")
// Creamos la clase principal del OpMode
public class TeleOpSimple extends OpMode {

    // Declaramos los motores (pero aún no los inicializamos)
    private DcMotor motorIzquierdo;
    private DcMotor motorDerecho;

    // Método init(), se ejecuta una vez al iniciar el programa
    @Override
    public void init() {
        // Aquí es donde INICIALIZAMOS los motores usando el hardware del robot
        motorIzquierdo = hardwareMap.get(DcMotor.class, "motorIzq");
        motorDerecho = hardwareMap.get(DcMotor.class, "motorDer");

        // Indicamos que un motor gira en sentido contrario para que el robot avance recto
        motorIzquierdo.setDirection(DcMotor.Direction.REVERSE);
        motorDerecho.setDirection(DcMotor.Direction.FORWARD);

        // Mostramos en la Driver Station que todo está listo
        telemetry.addData("Estado", "Motores inicializados");
        telemetry.update();
    }

    // Método loop(), se ejecuta repetidamente mientras el programa está corriendo
    @Override
    public void loop() {
        // Controlamos los motores con los joysticks del gamepad
        double potenciaIzquierda = -gamepad1.left_stick_y; // Joystick izquierdo controla motor izquierdo
        double potenciaDerecha = -gamepad1.right_stick_y; // Joystick derecho controla motor derecho

        // Aplicamos la potencia a los motores
        motorIzquierdo.setPower(potenciaIzquierda);
        motorDerecho.setPower(potenciaDerecha);

        // Mostramos en la Driver Station la potencia de los motores
        telemetry.addData("Motor Izquierdo", potenciaIzquierda);
        telemetry.addData("Motor Derecho", potenciaDerecha);
        telemetry.update();
    }
}
```

### Explicación
###### @TeleOp(name="TeleOpSimple", group="Pruebas")
	- El símbolo @ se llama anotación.
	- @TeleOp indica que este programa aparecerá en la lista de programas TeleOp de la Driver Station.
	- "TeleOpSimple" es el nombre del programa que verás en la Driver Station.
	- "Pruebas" es el grupo en el que se clasificará tu programa (puedes usar nombres como “Final”, “Pruebas”, etc.).
###### public class TeleOpSimple extends OpMode 
	- public significa que esta clase se puede usar en cualquier parte del código.
	- class significa que estamos creando una nueva clase (como una plantilla de instrucciones para el robot).
	- TeleOpSimple es el nombre de nuestra clase (debe coincidir con el nombre del archivo).
	- extends OpMode significa que esta clase hereda las funciones de OpMode, que es la estructura que permite que el código se ejecute en bucle (ideal para TeleOp).
###### private DcMotor motorIzquierdo
	- private significa que este motor solo se puede usar dentro de esta clase.
	- DcMotor es el tipo de objeto que estamos creando (en este caso, un motor de corriente directa).
	- motorIzquierdo es el nombre que estamos dándole al motor en el código (puede ser cualquier nombre que elijas).
###### public void init()
- Este bloque se ejecuta una sola vez cuando inicias el programa en la Driver Station.

Aquí se configuran los motores y otros dispositivos.

**Ejemplo:**
```java
motorIzquierdo = hardwareMap.get(DcMotor.class, "motorIzquierdo");
```
- hardwareMap conecta el código con el hardware configurado en la Driver Station.
- "motorIzquierdo" debe coincidir exactamente con el nombre que asignaste al motor en la configuración del robot.

###### public void loop()
- Este bloque se repite constantemente mientras el programa esté activo.
- Dentro de este ciclo colocamos las instrucciones que queremos que el robot repita todo el tiempo.

**Ejemplo:**
```java
double power = -gamepad1.left_stick_y;
motorIzquierdo.setPower(power);
motorDerecho.setPower(power);
```

- double significa que la variable power almacenará un número decimal.
- gamepad1.left_stick_y lee la posición del joystick izquierdo del control.
- motorIzquierdo.setPower(power) ajusta la potencia del motor según el valor del joystick.

El signo negativo (-) es necesario porque en FTC el joystick está invertido por defecto.

## 3. Estructura de un LinearOpMode (Modo Autónomo)
En el modo autónomo, el robot sigue una serie de instrucciones paso a paso.
### Código de ejemplo
```java
@Autonomous(name="AutonomoSimple", group="Pruebas")
public class AutonomoSimple extends LinearOpMode {
    @Override
    public void runOpMode() throws InterruptedException {
        DcMotor motorIzquierdo = hardwareMap.get(DcMotor.class, "motorIzquierdo");
        DcMotor motorDerecho = hardwareMap.get(DcMotor.class, "motorDerecho");

        waitForStart();

        motorIzquierdo.setPower(0.5);
        motorDerecho.setPower(0.5);
        sleep(1000);

        motorIzquierdo.setPower(0);
        motorDerecho.setPower(0);
    }
}
```

| Característica  | LinearOpMode | OpMode |
| ------------- | ------------- | ------------- |
| Estructura de ejecución  | Secuencial | En bucle |
| Ideal para… | Modo autónomo  | Modo TeleOp  |
| Uso de waitForStart() | Sí  | No  |
| Uso de sleep() | Sí |  No necesario |

## 4. Recomendaciones Finales
- Si vas a programar un modo autónomo, utiliza LinearOpMode.
- Si vas a programar un modo TeleOp (control manual), utiliza OpMode.
- Mantén el código limpio y organizado usando nombres claros para tus motores y servos.

## RETO: Mostrar Datos con Telemetría

**Objetivo:** Mostrar información en la pantalla del driver station sobre el estado del robot y los valores de los joysticks.

**Descripción:** En este reto, aprenderás a usar telemetría para mostrar datos en la Driver Station. Esto es útil para ver información en tiempo real sobre el estado de tu robot mientras lo estás controlando.

:::tip
Recuerda usar **telemetry.update()** para actualizar los datos en la pantalla del driver station.
:::

**Respuesta:**
```java

@TeleOp(name="Telemetria", group="Ejemplo")
public class Telemetria extends OpMode {

    @Override
    public void init() {
        // Este mensaje aparecerá cuando el OpMode se inicie
        telemetry.addData("Estado", "Listo para empezar");
        telemetry.update(); // Actualiza la información en la Driver Station
    }

    @Override
    public void loop() {
        // Se obtienen los valores de los joysticks
        double joystickIzq = gamepad1.left_stick_y;
        double joystickDer = gamepad1.right_stick_y;

        // Mostramos los valores de los joysticks en la pantalla de la Driver Station
        telemetry.addData("Joystick Izq", joystickIzq);
        telemetry.addData("Joystick Der", joystickDer);

        // Actualizamos la pantalla para que muestre la información más reciente
        telemetry.update();
    }
}
```