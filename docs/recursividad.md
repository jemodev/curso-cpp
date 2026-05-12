# Introducción a la Recursividad
> Descubriendo la magia (y la lógica) de las funciones que se llaman a sí mismas.

---

## ¿Qué es la recursividad?

En lugar de resolver un problema gigante de un solo golpe, **la recursividad divide el problema en versiones idénticas, pero más pequeñas, de sí mismo** — hasta llegar a un problema tan pequeño que la respuesta es obvia.

---

## La recursividad en la programación

En programación, la recursividad ocurre cuando una **función se invoca a sí misma** dentro de su propio código para resolver un **problema menor**.

> Es como tener un trabajador que, al encontrarse con una tarea grande, clona una versión de sí mismo para que le ayude con la mitad del trabajo.

---

## Las dos reglas de oro

### 1. El paso recursivo
La parte del código donde la función se llama a sí misma con un problema más pequeño.

### 2. La condición base
El momento de detenerse. Una condición simple que se resuelve sin necesidad de llamarse a sí misma.
> ¡Sin esto, el ciclo nunca terminaría!

---

## Anatomía de una función recursiva

```cpp
void cuentaRegresiva(int numero) {
    if (numero == 0) {       // Condición base
        print("¡Despegue!");
        return;
    }
    print(numero);
    cuentaRegresiva(numero - 1);  // Llamada recursiva
}
```

- **Condición base** — el freno de emergencia. Aquí la función se detiene y no hace más llamadas.
- **Llamada recursiva** — la función se llama a sí misma, pero reduciendo el problema (`numero - 1`).

---

## El motor invisible: ¿cómo lo procesa la computadora?

Para entender la recursividad, debemos mirar dentro de la memoria de la computadora, en un lugar llamado **Call Stack (Pila de Llamadas)**.

Imagina un escritorio. Cada vez que una función se llama a sí misma, la computadora pausa la tarea actual y pone una nueva carpeta encima de la pila.

> **Regla del escritorio:** ¡Solo puedes trabajar en la carpeta que está en la cima!

---

## Fase 1: Apilando las tareas (Winding)

Mientras no se cumpla la condición base, la computadora sigue apilando nuevas versiones de la función. Las funciones anteriores se quedan "congeladas", esperando pacientemente su turno.

```
[ cuentaRegresiva(0) ]  ← tope (en ejecución)
[ cuentaRegresiva(1) ]  ← pausada
[ cuentaRegresiva(2) ]  ← pausada
```

## Fase 2: Resolviendo el problema (Unwinding)

¡Alcancé la condición base! Ahora la computadora resuelve la carpeta de arriba, la elimina, y continúa con la que estaba justo debajo. Este proceso en cadena se repite hasta vaciar el escritorio.

```
[ cuentaRegresiva(0) ]  ← resuelta y eliminada
[ cuentaRegresiva(1) ]  ← ahora en ejecución
[ cuentaRegresiva(2) ]  ← esperando
```

---

## Un ejemplo clásico: calculando el factorial (5!)

La magia ocurre al regresar. Ninguna multiplicación se realiza hasta que tocamos el fondo (la condición base). ¡Las respuestas se pasan hacia arriba!

```
5! = 5 × 4!          ↑  Pasa el 24 → 5 × 24 = 120
  4! = 4 × 3!        ↑  Pasa el 6  → 4 × 6  = 24
    3! = 3 × 2!      ↑  Pasa el 2  → 3 × 2  = 6
      2! = 2 × 1!    ↑  Pasa el 1  → 2 × 1  = 2
        1! = 1  ← Condición base
```

---

## La zona de peligro: el temido Stack Overflow

¿Qué pasa si olvidamos nuestra condición base o si nuestro problema nunca se hace más pequeño?

La computadora seguirá apilando carpetas en la memoria infinitamente. Eventualmente, el "escritorio" (la memoria asignada al Call Stack) se queda sin espacio y se derrumba. A esto se le llama **Stack Overflow**, y hará que tu programa colapse instantáneamente.

---

## ¿Recursividad o ciclos tradicionales?

| Criterio | Ciclos (for / while) | Recursividad |
|---|---|---|
| **Facilidad de lectura** | Buena para tareas secuenciales simples | Excelente para problemas complejos que se dividen en partes iguales |
| **Uso de memoria** | Muy bajo. Reutiliza el mismo espacio en cada vuelta | Alto. Cada llamada crea una nueva carpeta en el Call Stack |
| **Casos ideales** | Recorrer listas, conteos simples, sumar números | Navegar laberintos, estructuras de árbol, fórmulas matemáticas anidadas |

---

## Dos formas de pensar: la carrera de relevos

### Recursividad regular (esperando)
Cada función debe quedarse congelada esperando a que la siguiente termine.

### Tail recursion (pasar el testigo)
Si enviamos todo el cálculo hacia adelante (como pasar el testigo), la computadora no necesita guardar la carpeta antigua en el escritorio. ¡Ahorra memoria y actúa casi como un ciclo normal!

---

## 3 reglas de oro para recordar

1. **Todo es un clon más pequeño** — la recursividad es resolver un problema grande dividiéndolo en versiones idénticas y más pequeñas de sí mismo.

2. **Nunca olvides el freno** — siempre debes programar una condición base para detener las llamadas y evitar un desastre de Stack Overflow.

3. **La magia está en la memoria** — la computadora apila las tareas una sobre otra, y luego las resuelve y elimina de arriba hacia abajo.

> ¡Ahora tienes el modelo mental para conquistar la recursividad en la programación!
