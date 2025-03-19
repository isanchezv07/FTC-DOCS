---
title: Nombres de los componentes
description: Guía detallada sobre los componentes esenciales utilizados en el FIRST Tech Challenge (FTC).
---

# Introducción

En el **FIRST Tech Challenge (FTC)** se utilizan diversos componentes para controlar el robot y lograr que cumpla con las tareas de la competencia. A continuación, se explican los elementos más importantes y cómo funcionan.


---
## 1. Componentes esenciales en FTC

#### 1.1 Driver Station

La Driver Station es la tableta o dispositivo utilizado por los conductores para controlar el robot durante la competencia. A través de la Driver Station puedes:

- Ver el estado de la conexión del robot.
- Iniciar programas autónomos o teleoperados.
- Supervisar la batería y el estado de los componentes.

![A REV Robotics Driver Station](/driver_station.png)

---

#### 1.2 Control Hub

El Control Hub es el "cerebro" del robot. Este dispositivo ejecuta el código del robot y se conecta directamente a los motores, sensores y otros componentes. Se comunica con la Driver Station mediante una red Wi-Fi local.


![A REV Robotics Control Hub](/control_hub.png)

#### 1.3 Expansion Hub

El Expansion Hub es un dispositivo que se conecta al Control Hub para agregar puertos adicionales para motores, servos y sensores.

![A REV Robotics Expansion Hub](/expansion_hub.png)

#### 1.4 Motores

Los motores se encargan del movimiento del robot. En FTC, se controlan mediante comandos en Java.

##### Encoders
Los encoders son sensores que se instalan en los motores para medir la distancia que han recorrido. Son fundamentales para el control preciso del movimiento del robot.

![A GoBilda Yellow Jacket Planetary Gear Motors](/motor_gobilda.png)
![A REV Robotics Core Hex Motor](/motor_hex.png)
![A REV Robotics HD Hex Motor](/motor_hd_hex.png)


#### 1.5 Servos
Los servos son motores pequeños que giran a ángulos específicos (normalmente entre 0° y 180°). Se utilizan para mover mecanismos como garras o brazos.

Existen diferentes tipos de servos:
- Servos de velocidad (Speed): Diseñados para moverse rápidamente entre posiciones.
- Servos de torque: Diseñados para proporcionar máxima fuerza en lugar de velocidad.
- Servos continuos: No tienen un ángulo fijo de movimiento; en su lugar, giran indefinidamente en ambas direcciones dependiendo de la señal que reciben. Se utilizan para ruedas o mecanismos que requieren rotación continua.

![A GoBilda Standar Servo](/gobilda_servo.png)
![A REV Robotics Smart Robot Servo](/rev_servo.png)