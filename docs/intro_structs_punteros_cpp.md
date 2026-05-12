# Structs y Punteros: Construyendo en la Memoria

> De la gestión manual a las estructuras dinámicas en C++

## 1. El Desafío de los Datos

En la programación introductoria, los datos suelen verse como cajas simples (como un `int` o un `float`). Sin embargo, existe una gran diferencia entre la teoría básica y la realidad:

- **Arreglos Estáticos:** Son rígidos, uniformes y requieren tamaños fijos (ej. un índice fijo con un tamaño de 64 unidades).
- **El Mundo Real:** Es heterogéneo y caótico. Los datos no son de un solo tipo. Por ejemplo:
  - `nombre: "Juan Pérez"` *(Cadena variable)*
  - `edad: 35` *(Entero)*
  - `promedio: 9.85` *(Flotante)*

**Pregunta central:** ¿Cómo modelamos entidades complejas sin perder el control de la memoria (el *Heap*)?

## 2. Parte 1: Structs - El Empaquetado

Un `struct` nos permite resolver el desafío anterior. Sirve para agrupar variables de distintos tipos bajo un mismo concepto, empaquetando los datos para construir entidades que modelen el mundo real.

## 3. Scope y Pasaje de Punteros en Funciones

Al trabajar con estructuras dinámicas y nodos, existe un límite estricto entre el alcance del que llama a la función (*Caller Scope*) y el de la función misma (*Function Scope*).

Si intentamos modificar la cabeza (`head`) de una lista dentro de una función, la modificación puede perderse al salir de ella si no pasamos el puntero correctamente.

**La Solución:** Debemos usar "Punteros a Punteros" (`Node` tradicional en C) o la sintaxis mucho más limpia de C++: **"Punteros por Referencia" (`Node\*&`)**.

```
// Ejemplo de declaración de un puntero por referencia en C++
void Push(Node*& head, int data);
```

## 4. C++ Moderno: Punteros Inteligentes (RAII)

En el C++ moderno (C++11/14/17), automatizamos la gestión de memoria vinculando la vida del recurso al ciclo de vida del objeto mediante el paradigma **RAII** *(Resource Acquisition Is Initialization)*. Estos punteros evitan los *Memory Leaks* y eliminan la necesidad de usar `delete` manualmente.

Se dividen en tres tipos principales:

1. **`std::unique_ptr`**
   - Tiene la **propiedad exclusiva** del objeto en memoria.
   - Tiene un coste de rendimiento igual a cero (es el recomendado por defecto).
   - Utiliza semántica de movimiento (*Move semantics*) para transferir la propiedad.
2. **`std::shared_ptr`**
   - Permite la **propiedad compartida** de un objeto.
   - Mantiene un contador de referencias (sabe cuántos punteros están apuntando a ese bloque de datos y lo destruye cuando el contador llega a cero).
3. **`std::weak_ptr`**
   - Funciona como un **observador sin propiedad**.
   - No aumenta el contador de referencias.
   - Es vital para romper dependencias circulares (cuando dos `shared_ptr` se apuntan mutuamente).

## 5. Conclusión: El Paradigma del Ingeniero

- Los **Structs** nos dan el poder de empaquetar y modelar la complejidad del mundo real.
- Al combinarlos con **Punteros** formamos *Linked Lists* (Listas Enlazadas) y otras estructuras dinámicas, permitiéndonos crear programas eficientes que asignan y liberan memoria según se necesite.