---
title: Declaración de Motores, Sensores y Cámaras
description: Guía completa para declarar y configurar componentes electrónicos en tu robot FTC.
---

# Declaración de Componentes

Esta guía te enseñará cómo declarar y configurar los elementos esenciales de tu robot FTC, incluyendo:

✅ Motores DC  
✅ Servos  
✅ Sensores (de distancia, color, toque, etc.)  
✅ Cámaras (como el sistema de visión del Control Hub o cámaras externas)  

Cada explicación se acompaña de ejemplos detallados para principiantes.

---

## 1. Importar las Librerías Necesarias
Las librerías en Java son conjuntos de herramientas que te permiten realizar ciertas tareas sin tener que escribir todo el código desde cero. En FTC, las librerías incluyen funciones y clases que facilitan el control de motores, sensores y otros componentes del robot.

### Librerías clave en FTC
- **import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;** → Permite crear un programa que se ejecute de forma lineal (paso a paso). Es la base para que el robot entienda las instrucciones.
- **import com.qualcomm.robotcore.hardware.DcMotor;** → Permite controlar motores de corriente directa (DC).
- **import com.qualcomm.robotcore.hardware.ColorSensor;** → Permite obtener datos del sensor de color.

:::tip[Tip: Estas librerías son fundamentales para que el robot pueda interpretar tu código]
:::

## 2. ¿Qué es la declaración de componentes?

**Declarar un componente** significa decirle a tu robot que existe un dispositivo físico (motor, sensor, etc.) y que podrá controlarlo mediante el código.

Cuando declaras un componente, le estás dando un **nombre en el código** que debe coincidir con el nombre que configuraste en la **Driver Station**.

---

## 3. Cómo se declaran los componentes

Todos los componentes se declaran usando el siguiente formato:

```java
<tipo de componente> <nombre en el código> = hardwareMap.get(<tipo de componente>.class, "<nombre en la Driver Station>");
```

### 3.1 Declaración de Motores 
Los motores DC se utilizan para mover las ruedas del robot u otros mecanismos como elevadores o sistemas de recolección.

**Ejemplo de declaración de un motor:**
```java
DcMotor motorIzquierdo = hardwareMap.get(DcMotor.class, "motorIzquierdo");
```

##### Configuración básica del motor
Después de declarar un motor, puedes configurarlo para que funcione correctamente.

**Ejemplo de configuración de un motor:**
```java
motorIzquierdo.setDirection(DcMotor.Direction.FORWARD);  // Dirección normal
motorIzquierdo.setMode(DcMotor.RunMode.RUN_USING_ENCODER);  // Usa el encoder para control preciso
motorIzquierdo.setZeroPowerBehavior(DcMotor.ZeroPowerBehavior.BRAKE);  // Se detiene en seco cuando no recibe potencia
```
- setDirection(): Establece la dirección del motor (FORWARD o REVERSE).
- setMode(): Controla cómo se moverá el motor (por ejemplo, usando encoders para mayor precisión).
- setZeroPowerBehavior(): Define el comportamiento del motor cuando no tiene potencia (BRAKE para detenerlo de golpe o FLOAT para que siga girando libremente).

## 4. Declaración de Servos
Los servos se utilizan para mover brazos, ganchos, pinzas o cualquier otro mecanismo que requiera movimientos precisos en ángulos específicos.

**Ejemplo de declaración de un servo:**
```java
Servo brazo = hardwareMap.get(Servo.class, "brazo");
```
##### Control básico del servo

```java
//Este comando depende si el servo esta configurado por posiciones o continuo
brazo.setPosition(0.5); // Mueve el servo a la posición intermedia (0 = mínimo, 1 = máximo)
```
- setPosition(): Controla la posición del servo. El valor va de 0 (mínimo) a 1 (máximo).

## 5. Declaración de Sensores

### 5.1 Sensor de distancia
Los sensores de distancia permiten medir la proximidad de objetos.

**Declaración del sensor de distancia:**
```java
DistanceSensor sensorDistancia = hardwareMap.get(DistanceSensor.class, "sensorDistancia");

//Lectura del sensor
double distancia = sensorDistancia.getDistance(DistanceUnit.CM); // Obtiene la distancia en centímetros
```

### 5.2 Sensor de color
Los sensores de color detectan colores específicos en el entorno.
**Declaración del sensor de color:**
```java
ColorSensor sensorColor = hardwareMap.get(ColorSensor.class, "sensorColor");

//Lectura del sensor
int rojo = sensorColor.red();
int verde = sensorColor.green();
int azul = sensorColor.blue();
```

### 5.3 Sensor de toque
Los sensores de toque detectan cuando se presiona un botón o un interruptor.
**Declaración del sensor de toque:**
```java
TouchSensor sensorToque = hardwareMap.get(TouchSensor.class, "sensorToque");

//Lectura del sensor
if (sensorToque.isPressed()) {
    telemetry.addData("Toque", "Activado");
} else {
    telemetry.addData("Toque", "Desactivado");
}
```

## 6. Declaración de Cámaras
Las cámaras se utilizan para visión computarizada, detección de objetos o seguimiento de balizas.
**Declaración de la cámara:**
```java
WebcamName webcam = hardwareMap.get(WebcamName.class, "Webcam 1");
```

## 7. Recomendaciones Finales

- ✅ Usa nombres claros y específicos para tus componentes (por ejemplo, motorIzquierdo, sensorColor, brazo).
- ✅ Asegúrate de que el nombre del componente en el código coincida exactamente con el nombre asignado en la configuración de la Driver Station.
- ✅ Siempre inicializa los motores y servos en el método init() o runOpMode().

## Reto para declarar Componentes
**Objetivo:**
Crear un programa que controle un robot con un motor, un servo, un sensor de distancia y un sensor de color. El robot deberá:
- 1.	Moverse hacia adelante hasta que el sensor de distancia detecte un objeto a menos de 30 cm.
- 2.	Detenerse cuando el objeto esté cerca y mover el servo para que realice una acción (por ejemplo, levantar un brazo).
- 3.	Detectar el color de un objeto con el sensor de color y mostrar el valor en la pantalla de telemetría.

**Requisitos:**
- 1.	El robot debe utilizar un motor para moverse hacia adelante y detenerse al detectar un objeto cercano con el sensor de distancia.
- 2.	Debe mover un servo a una posición específica cuando el robot se detenga.
- 3.	Debe utilizar el sensor de color para mostrar los valores RGB en la pantalla de telemetría.
- 4.	Usa nombres coherentes para los componentes en el código y la configuración de la Driver Station.


:::tip
- Usa los métodos de los sensores y componentes para obtener las lecturas y realizar acciones.
- Usa telemetry.addData() para mostrar información en la Driver Station.
:::

**Respuesta:**
```java
@TeleOp(name="RetoControlComponentes", group="Reto")
public class RetoControlComponentes extends OpMode {

    // Declaración de componentes
    private DcMotor motorIzquierdo;
    private Servo brazo;
    private DistanceSensor sensorDistancia;
    private ColorSensor sensorColor;

    @Override
    public void init() {
        // Inicializa los componentes
        motorIzquierdo = hardwareMap.get(DcMotor.class, "motorIzquierdo");
        brazo = hardwareMap.get(Servo.class, "brazo");
        sensorDistancia = hardwareMap.get(DistanceSensor.class, "sensorDistancia");
        sensorColor = hardwareMap.get(ColorSensor.class, "sensorColor");

        // Configura los motores y servos
        motorIzquierdo.setDirection(DcMotor.Direction.FORWARD);
    }

    @Override
    public void loop() {
        // Leer la distancia del sensor
        double distancia = sensorDistancia.getDistance(DistanceUnit.CM);

        // Si la distancia es mayor de 30 cm, el robot avanza
        if (distancia > 30) {
            motorIzquierdo.setPower(0.5);  // Avanza a media potencia
            telemetry.addData("Estado", "Avanzando");
        } else {
            motorIzquierdo.setPower(0);  // Detiene el robot
            brazo.setPosition(1.0);  // Mueve el servo (por ejemplo, levantar el brazo)
            telemetry.addData("Estado", "Detenido - Brazo levantado");
        }

        // Leer el color del sensor
        int rojo = sensorColor.red();
        int verde = sensorColor.green();
        int azul = sensorColor.blue();

        // Mostrar los valores de color en la pantalla
        telemetry.addData("Rojo", rojo);
        telemetry.addData("Verde", verde);
        telemetry.addData("Azul", azul);
        telemetry.update();
    }
}
```