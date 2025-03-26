---
title: Guía Rápida
description: Implementación de FTCLib en un Proyecto FTC
---

## Introducción
FTCLib es una biblioteca para FTC (FIRST Tech Challenge) que facilita la programación de robots. En esta guía aprenderás a:
- Configurar FTCLib en Android Studio.
- Implementar control teleoperado con GamepadEx.


## 1.Uso de GamepadEx para Teleoperado
Cuando controlas un robot, usas un gamepad (un control remoto). Para hacer esto más fácil, FTCLib ofrece una herramienta llamada [**GamepadEx**](https://docs.ftclib.org/ftclib/features/gamepad-extensions#gamepadex). Esta herramienta hace que interactuar con el gamepad sea más sencillo y más organizado, ya que te ayuda a obtener la información de los botones y palancas del control de una forma más clara.

### ¿Para qué sirve?

GamepadEx te permite acceder a los botones y joysticks del control remoto de una forma más intuitiva, lo que significa que puedes escribir menos código y hacerlo de manera más fácil.

```java
GamepadEx gamepad = new GamepadEx(gamepad1);
double power = gamepad.getTrigger(GamepadKeys.Trigger.RIGHT_TRIGGER);
boolean isPressed = gamepad.getButton(GamepadKeys.Button.A);
```
### ¿Qué hace esto?
- **getTrigger()** lee cuánta presión tiene el gatillo derecho del control, lo que te permite usarlo de manera precisa.
- **getButton()** te dice si el botón A está siendo presionado, devolviendo verdadero (si está presionado) o falso (si no lo está).

### ¿Por qué es útil?
- Hace que controlar el robot con el gamepad sea más fácil y rápido.
- Te permite usar tanto botones como gatillos de manera sencilla.

---

## 2.Creando un Subsystem
Un [Subsystem](https://docs.ftclib.org/ftclib/command-base/command-system/subsystems#terminology) es una forma de organizar tu código para que cada parte del robot (como los motores, los sensores o las ruedas) esté claramente separada en diferentes bloques. Piensa en un Subsystem como un “módulo” que solo se encarga de una tarea, como controlar el motor del elevador del robot.

### ¿Para qué sirve?

Crear un Subsystem te ayuda a organizar tu código de manera más clara y evitar que todo el código esté mezclado. Esto también hace que sea más fácil solucionar problemas y añadir nuevas funcionalidades en el futuro.

```java
public class Elevator extends SubsystemBase {  // Crea un Subsystem para el elevador
    private final Motor elevatorMotor;  // Declara el motor del elevador
    
    public Elevator(HardwareMap hardwareMap) {
        elevatorMotor = new Motor(hardwareMap, "elevator");  // Asocia el motor con el hardware del robot
    }
    
    public void setPower(double power) {
        elevatorMotor.set(power);  // Controla el motor para mover el elevador
    }

    public double getPower() {
        return elevatorMotor.getPower();  // Obtiene la potencia actual del elevador
    }
}
```
### ¿Qué hace esto?
- Crea un Subsystem llamado Elevator (elevador) que tiene un motor.
- Usamos el método setPower() para decirle al motor qué tan rápido mover el elevador.

### ¿Por qué es útil?
- Te ayuda a dividir el código en partes pequeñas y fáciles de entender.
- Si alguna parte del robot no funciona correctamente, puedes arreglarla sin afectar las demás partes.

## ¿Cómo llamar y usar un Subsystem?
Para usar un Subsystem como el que acabamos de crear, debes declararlo en tu código principal y controlarlo de la siguiente manera:
```java
Elevator elevator = new Elevator(hardwareMap);  // Declara el Subsystem del elevador

// Para mover el elevador hacia arriba
elevator.setPower(1.0);  // Establece la potencia máxima para mover el elevador hacia arriba

// Para detener el elevador
elevator.setPower(0);  // Detiene el motor del elevador
```

---

## 3.Implementando Comandos con RunCommand

### ¿Qué es RunCommand?

En FTC, los comandos son instrucciones que le dicen al robot qué hacer. A veces, necesitas ejecutar una acción de inmediato, sin crear un comando completo desde cero. [RunCommand](https://docs.ftclib.org/ftclib/pathing/pure-pursuit#running-the-command) es una herramienta que te permite hacer esto de manera rápida y sencilla.

### ¿Para qué sirve?

RunCommand te permite ejecutar un comando en el momento que lo necesites, sin tener que crear clases adicionales para eso. Es útil para tareas pequeñas y rápidas.

```java
Elevator elevator = new Elevator(hardwareMap);
CommandScheduler.getInstance().schedule(
    new RunCommand(() -> elevator.setPower(0.5), elevator)
);
```
:::note[¿Qué es getInstance()?]
getInstance() es un patrón de diseño llamado Singleton. Este patrón asegura que solo haya una única instancia (copia) de una clase durante toda la ejecución del programa.

Esto significa que no se crean múltiples copias de CommandScheduler, solo hay una, lo que ayuda a mantener un control centralizado y organizado de los comandos que deben ejecutars
:::

:::note[¿Qué es () ->?]
() -> es una expresión lambda en Java, que es una forma corta de escribir una función o un bloque de código que puede ser ejecutado más tarde. En términos sencillos, las lambdas te permiten pasar funciones como parámetros a otras funciones.

() significa que esta lambda no toma ningún parámetro.

-> indica que lo que sigue es el bloque de código que debe ejecutarse cuando se invoque la función. En este caso, el bloque de código es elevator.setPower(0.5), que es una instrucción para mover el elevador con una potencia de 0.5.
:::

### ¿Qué hace esto?
- **RunCommand** ejecuta la acción de mover el elevador con una potencia de 0.5 (a la mitad de su capacidad).
- **CommandScheduler** se encarga de gestionar los comandos para que se ejecuten en el momento adecuado.

### ¿Por qué es útil?
- Es rápido y no necesitas crear un archivo o clase aparte para ejecutar algo simple.
- Hace el código más limpio y fácil de entender.

---

## 4.Creando un Comando de Botón
### ¿Qué es un Comando de Botón?

En FTC, puedes asignar comandos a los botones del gamepad. Esto significa que cuando presionas un botón, se ejecuta una acción específica, como mover el elevador o encender una luz.

### ¿Para qué sirve?

Los Comandos de Botón te permiten hacer que el robot responda a tus interacciones con el gamepad, de manera que el robot haga cosas automáticamente cuando presionas un botón.

```java
GamepadEx gamepad = new GamepadEx(gamepad1);
Elevator elevator = new Elevator(hardwareMap);
gamepad.getGamepadButton(GamepadKeys.Button.Y).whenPressed(
    new InstantCommand(() -> elevator.setPower(1.0))
);
```
### ¿Qué hace esto?
- **getGamepadButton**(GamepadKeys.Button.Y) detecta cuándo se presiona el botón Y del gamepad.
- **whenPressed()** ejecuta el comando de mover el elevador a su máxima potencia cuando presionas el botón Y.

## RETO: Control Avanzado de TeleOp

**Objetivo:**
Crear un programa para controlar un robot con dos motores, un servo para el brazo y un elevador. El robot debe ser capaz de:
- Moverse hacia adelante y hacia atrás utilizando los joysticks del gamepad.
- Controlar el servo del brazo para moverlo hacia arriba y hacia abajo con los botones del gamepad.
- Controlar un elevador utilizando los gatillos del gamepad para subirlo o bajarlo.
- Mostrar en la pantalla de telemetría los valores de potencia de los motores, la posición del brazo y la potencia del elevador.

**Requisitos:**
- Crear un subsistema para el Elevador
- El servo debe moverse a una posición específica cuando se presionen los botones correspondientes del gamepad.
:::tip
- Usa **InstantCommand** para realizar acciones inmediatas como mover el brazo cuando se presiona un botón.
- Usa **RunCommand** para ejecutar acciones continuas, como el control del elevador.
:::

**Respuesta:**
```java

@TeleOp(name = "Advanced TeleOp", group = "TeleOp")
public class AdvancedTeleOpControl extends OpMode {

    // Declaración de componentes
    private DcMotor leftMotor;
    private DcMotor rightMotor;
    private Servo armServo;
    private GamepadEx gamepadEx;

    private Elevator elevator;

    // Variables para el control del robot
    private static double armUpPosition = 1.0;
    private static double armDownPosition = 0.0;

    @Override
    public void init() {
        // Inicialización de los componentes
        leftMotor = hardwareMap.get(DcMotor.class, "left_drive");
        rightMotor = hardwareMap.get(DcMotor.class, "right_drive");
        armServo = hardwareMap.get(Servo.class, "arm_servo");

        // Configuración de los motores
        leftMotor.setZeroPowerBehavior(DcMotor.Direction.FORWARD);
        rightMotor.setZeroPowerBehavior(DcMotor.Direction.REVERSE);

        // Inicialización de GamepadEx
        gamepadEx = new GamepadEx(gamepad1);

        // Inicialización del Subsystem Elevator
        elevator = new Elevator(hardwareMap);
        
        // Configuración de los botones del gamepad para control del brazo
        gamepadEx.getGamepadButton(GamepadKeys.Button.Y).whenPressed(
            new InstantCommand(() -> armServo.setPosition(armUpPosition))  // Mueve el brazo hacia arriba al presionar Y
        );
        gamepadEx.getGamepadButton(GamepadKeys.Button.A).whenPressed(
            new InstantCommand(() -> armServo.setPosition(armDownPosition))  // Mueve el brazo hacia abajo al presionar A
        );
    }

    @Override
    public void loop() {
        // Control de los motores con GamepadEx
        double leftPower = gamepadEx.getLeftY();  // Movimiento del joystick izquierdo (eje Y)
        double rightPower = gamepadEx.getRightY();  // Movimiento del joystick derecho (eje Y)

        // Asignación de poder a los motores para el movimiento
        leftMotor.setPower(leftPower);
        rightMotor.setPower(rightPower);

        // Control del elevador con el gatillo del Gamepad
        double leftTrigger = gamepadEx.getTrigger(GamepadKeys.Trigger.LEFT_TRIGGER);
        double rightTrigger = gamepadEx.getTrigger(GamepadKeys.Trigger.RIGHT_TRIGGER);

        // El elevador sube cuando se presiona el gatillo izquierdo
        if (leftTrigger > 0) {
            elevator.setPower(leftTrigger);  // Subir
        } else if (rightTrigger > 0) {
            elevator.setPower(-rightTrigger);  // Bajar
        } else {
            elevator.setPower(0);  // Parar si no se presionan los gatillos
        }

        // Ejemplo de uso de RunCommand para ejecutar acciones rápidas
        if (gamepadEx.getButton(GamepadKeys.Button.B)) {
            CommandScheduler.getInstance().schedule(
                new RunCommand(() -> elevator.setPower(0.5), elevator)
            );
        }

        // Telemetría para mostrar información en el Driver Station
        telemetry.addData("Left Motor Power", leftMotor.getPower());
        telemetry.addData("Right Motor Power", rightMotor.getPower());
        telemetry.addData("Elevator Power", elevator.getPower());
        telemetry.addData("Arm Position", armServo.getPosition());
        telemetry.update();
    }

    // Subsystem para controlar el elevador
    public class Elevator extends SubsystemBase {
        private DcMotor elevatorMotor;

        public Elevator(HardwareMap hardwareMap) {
            elevatorMotor = hardwareMap.get(DcMotor.class, "elevator_motor");
        }

        public void setPower(double power) {
            elevatorMotor.setPower(power);  // Controla el motor del elevador
        }

        public double getPower() {
            return elevatorMotor.getPower();  // Obtiene la potencia actual del elevador
        }
    }
}
```