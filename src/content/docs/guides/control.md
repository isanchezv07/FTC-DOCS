---
title: Sistemas avanzados de control para FTC
description: Guía detallada para aprender sistemas avanzados de control desde cero, explicada de forma clara para principiantes.
---

# Introducción

Imagina que quieres que tu robot siga una línea, levante un objeto o se mueva con precisión. Para lograrlo, necesitamos usar sistemas avanzados de control. Aunque suene complicado, te explicaré cada parte de forma clara, como si estuviera hablando con alguien que nunca ha programado.

:::note[¿Por qué no basta con decirle al robot que avance y ya?]
Porque un robot no es perfecto. Puede resbalar,
 girar de más o de menos, y si no corregimos esos errores, podría chocar o perderse. Un sistema de control se encarga de que el robot haga lo correcto aunque algo salga mal.
:::


---
## 1. ¿Qué es un sistema de control?

Un sistema de control es como un entrenador de fútbol: observa cómo juega el equipo, identifica errores y da instrucciones para mejorar.

---

### 1.1 Componentes de un sistema de control

Un sistema de control avanzado tiene tres partes:
- Entrada: Lo que queremos que haga el robot (como moverse 1 metro hacia adelante).
- Proceso: El robot intenta hacer lo que le pedimos (mueve sus ruedas).
- Salida: Lo que realmente hizo el robot (quizá se movió solo 0.9 metros).

:::tip[¿Y si el robot se equivoca?]
Ahí es donde entra la parte más importante: el feedback (retroalimentación), que corrige los errores.
:::

## 2. Tipos de sistemas de control
Existen diferentes formas de corregir errores en un robot. Veamos las más importantes:

### 2.1 Control abierto (Open-loop)
Este es el sistema más básico. Simplemente le decimos al robot "avanza 1 metro" y esperamos que lo haga bien.

:::tip[¿Pero qué pasa si el robot se movió?]
El robot no se dará cuenta porque no está verificando si hizo bien el movimiento.
:::

### 2.2 Control cerrado (Closed-loop)

Este sistema usa sensores para verificar que el robot esté haciendo lo correcto y corregirlo si se equivoca.

:::tip[¿Por qué es mejor este método?]
Que pasa si el robot se resvala, el encoder se dará cuenta y el robot avanzará más hasta llegar al punto correcto.
:::

## 3. Control PID: El más preciso
El **control PID** es como un robot que piensa y corrige sus errores. Se llama así porque usa tres conceptos:
- P (Proporcional): Corrige los errores dependiendo de cuán lejos está del objetivo.
- I (Integral): Corrige los errores pequeños que se acumulan con el tiempo.
- D (Derivativo): Previene que el robot se pase del objetivo.

:::tip[¿Pero qué es ese Kp, Ki y Kd?]
Son valores que ajustamos para que el robot se mueva de forma precisa. Es como decidir cuánto debe apurarse o frenar para llegar al punto exacto.
:::

## 4. Consejos para principiantes
- Empieza con el control abierto para entender el movimiento del robot.
- Agrega sensores y prueba el control cerrado para obtener mejores resultados.
- Si tu robot necesita ser muy preciso, el control PID es la mejor opción.
:::tip[¿Y si me equivoco mucho al principio?]
No te preocupes, cada error es parte del aprendizaje. ¡Practica y verás que tu robot se moverá como un profesional!
:::

## 5. ¿Qué sigue?
Pronto aprenderás a combinar estos sistemas para crear rutinas autónomas avanzadas, donde el robot pueda tomar decisiones por sí solo.
:::tip[¿Y si quiero que mi robot haga trucos especiales?]
Con tiempo y paciencia, podrás programar tu robot para hacer movimientos complejos, seguir trayectorias curvas y hasta esquivar objetos. ¡El límite es tu creatividad!
:::

## RETO
Tu robot debe seguir una línea negra en el piso para llegar a la meta.

- ✅ El robot usará dos motores para moverse.
- ✅ Un sensor de color detectará si está sobre la línea (negra) o fuera de ella.
- ✅ Si el sensor detecta negro, el robot sigue avanzando.
- ✅ Si el sensor detecta blanco, el robot debe girar ligeramente para volver a la línea.

**Materiales Necesarios**
- 2 Motores (para las ruedas izquierda y derecha)
- 1 Sensor de color

Pseudocódigo Explicado
- 1.Iniciar el robot.
- 2.Si el sensor detecta negro, el robot avanza recto.
- 3.Si el sensor detecta blanco, el robot gira ligeramente hacia la izquierda o derecha para corregir su trayectoria.
- 4.El robot repite este ciclo hasta llegar a la meta.

:::tip
- Usa setPower() para ajustar la velocidad de cada motor:
- 0.5 = Velocidad media (ideal para avanzar recto con control).
- 0.3 = Velocidad más baja (para giros suaves o correcciones de trayectoria).
- Si los valores de rojo, verde y azul son menores a 10, el sensor está detectando la línea negra.
:::

:::caution[Importante]
Si alguna parte del código no funciona porque falta una librería, tu editor de código te avisará con un mensaje. La mayoría de las veces, el problema se soluciona automáticamente al guardar el archivo o actualizar la página.
:::

**RESPUESTA:**
```java

@TeleOp(name="Seguidor de Línea", group="Pruebas")
public class SeguidorDeLinea extends LinearOpMode {
    
    private DcMotor motorIzq, motorDer;
    private ColorSensor sensorColor;

    @Override
    public void runOpMode() {
        motorIzq = hardwareMap.get(DcMotor.class, "motorIzq");
        motorDer = hardwareMap.get(DcMotor.class, "motorDer");
        sensorColor = hardwareMap.get(ColorSensor.class, "sensorColor");

        waitForStart();

        while (opModeIsActive()) {
            // Si detecta negro (línea)
            if (sensorColor.red() < 10 && sensorColor.green() < 10 && sensorColor.blue() < 10) {
                motorIzq.setPower(0.5);
                motorDer.setPower(0.5); // Avanza recto
            } 
            // Si detecta blanco (fuera de la línea)
            else {
                motorIzq.setPower(0.3); // Gira suavemente
                motorDer.setPower(0.0);
            }

            // Mostrar información en la Driver Station
            telemetry.addData("Color Rojo", sensorColor.red());
            telemetry.addData("Color Verde", sensorColor.green());
            telemetry.addData("Color Azul", sensorColor.blue());
            telemetry.update();
        }
    }
}
```