---
title: Conceptos y lógica de programación para FTC
description: Guía paso a paso para aprender los conceptos fundamentales de Java aplicados al FIRST Tech Challenge (FTC).
---

# Introducción

Si nunca has programado antes, no te preocupes. En esta guía, te llevaré a través de los conceptos básicos de programación en Java y cómo se aplican específicamente al **FIRST Tech Challenge (FTC)**.


---
## 1. Fundamentos de Java

#### 1.1 ¿Qué es Java?

Java es un lenguaje de programación que le dice a la computadora cómo debe ejecutar ciertas tareas. Es como un conjunto de instrucciones que el robot sigue para realizar una acción, como mover un motor o leer un sensor.

---

#### 1.2 Variables y tipos de datos

En Java, usamos **variables** para almacenar información que nuestro programa necesita. Piensa en una variable como una caja donde puedes guardar diferentes tipos de información. 

Los **tipos de datos** son las categorías de información que puedes almacenar. Los tipos más comunes son:

- **Números enteros**: como 1, 2, 3 (se llaman `int`).
- **Números decimales**: como 3.14, 2.5 (se llaman `double`).
- **Texto**: como "Hola, mundo!" (se llama `String`).
- **Valores verdadero o falso**: como `true` o `false` (se llama `boolean`).

**Ejemplo:**
```java
int numero = 5; // Guarda un número entero
double precio = 19.99; // Guarda un número decimal
String saludo = "Hola, mundo!"; // Guarda texto
boolean encendido = true; // Guarda verdadero o falso
```

#### 1.3 Operaciones básicas

En Java, puedes realizar operaciones con las variables, como sumar, restar, multiplicar, etc.
- **Suma**: 5 + 3 da como resultado 8.
- **Resta**: 10 - 4 da como resultado 6.
- **Multiplicación**: 4 * 2 da como resultado 8.
- **División**: 8 / 2 da como resultado 4.

**Ejemplo:**
```java
int suma = 5 + 3; // Como resultado 8
int resta = 10 - 4; // Como resultado 6
int multiplicacion = 4 * 2; // Como resultado 8
double division = 8 / 2; // Como resultado 4
```

#### 1.4 Condicionales
Las condiciones permiten que el robot haga una cosa o otra dependiendo de la situación.

**Condicional if:**
```java
if (distancia < 10) {
    // El robot hace algo si la distancia es menor que 10
} else {
    // El robot hace algo diferente si la distancia no es menor que 10
}
```
#### 1.5 Ciclos(Loops)
Un bucle o loop repite una acción varias veces. El bucle más común es el while, que sigue ejecutándose mientras se cumpla una condición.

**Loop:**
```java
while (motorIzquierdo.isBusy()) {
    // El robot sigue moviendo el motor mientras está ocupado
}
```

## 2. ¿Como se usan estos conceptos en FTC?

Ahora que entiendes los conceptos básicos de Java, veamos cómo se aplican en FTC para programar un robot. En FTC, usamos Java para controlar los motores, los sensores y otros componentes del robot.

#### 2.1 Controlando los motores
 
Los motores son una parte fundamental de cualquier robot, ya que permiten que el robot se mueva. En Java, puedes decirle al robot cuánto debe girar un motor y en qué dirección.

**Ejemplo:**
```java
motor.setPower(1.0); // El motor se mueve a máxima velocidad
```
El número 1.0 indica la velocidad del motor, donde 1.0 es la velocidad máxima.

#### 2.2 Usando sensores

Los sensores permiten que el robot “sienta” su entorno, como la distancia a objetos o la inclinación del robot. En FTC, puedes usar sensores como el IMU (Unidad de Medición Inercial) para medir la orientación del robot o sensores de distancia para evitar obstáculos.

**Ejemplo:**
```java
double distancia = sensorDeDistancia.getDistance(); // Obtiene la distancia al objeto más cercano
```

## 3. Escribiendo tu primer programa para FTC

Para poner en práctica lo que hemos aprendido, veamos cómo escribir un programa básico para controlar un motor y un sensor.


**Ejemplo:**
```java
// Controlar un motor
motor.setPower(1.0); // El motor se mueve a máxima velocidad

// Leer un sensor de distancia
double distancia = sensorDeDistancia.getDistance();
System.out.println("Distancia al objeto: " + distancia);
```
Este programa hace dos cosas:
- 1.Mueve el motor a la máxima velocidad.
- 2.Lee la distancia desde el sensor de distancia y la muestra en la consola.

### 3.1  Métodos Importantes
**telemetry.addData():** Este método se usa para enviar datos a la pantalla del robot para ver lo que está haciendo.

```java
telemetry.addData("Motor Izquierdo", motorIzquierdo.getPower());
telemetry.update();
```

## 4. ¿Qué sigue?

A medida que sigas practicando y aprendiendo más sobre Java y FTC, podrás programar algoritmos más avanzados. Algunos de los siguientes temas que aprenderás incluyen:
- Programación autónoma: decirle al robot cómo moverse sin intervención humana.
- Teleoperación: controlar el robot a distancia usando un control.
- Algoritmos avanzados para optimizar el rendimiento del robot. 