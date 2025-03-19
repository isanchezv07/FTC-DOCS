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

## 2. Estructura de un `LinearOpMode` (Modo Autónomo)

El `LinearOpMode` es ideal para ejecutar el código paso a paso. Su estructura básica es la siguiente:

### Código de ejemplo

```java
/*
    @TeleOp es para decir que estas programando un TeleOp
    en el caso de querer hacer un autonomo, seria @Autonomous
*/
// 1. Este nombre aparecerá en la Driver Station
@TeleOp(name="TeleOpSimple", group="Pruebas")

// 2. Definición de la clase principal del programa y el tipo de OpMode
public class TeleOpSimple extends OpMode {

    // 3. Declaración de los motores
    private DcMotor motorIzquierdo;
    private DcMotor motorDerecho;

    // 4. Método que se ejecuta una sola vez al iniciar el programa
    @Override
    public void init() {
        // Vincular el hardware del robot con el código
        motorIzquierdo = hardwareMap.get(DcMotor.class, "motorIzquierdo");
        motorDerecho = hardwareMap.get(DcMotor.class, "motorDerecho");
    }

    // 5. Método que se ejecuta continuamente mientras el programa esté activo
    @Override
    public void loop() {
        double power = -gamepad1.left_stick_y;
        motorIzquierdo.setPower(power);
        motorDerecho.setPower(power);
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