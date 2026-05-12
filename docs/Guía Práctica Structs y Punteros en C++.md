# Guía Práctica: Structs y Punteros en C++

Esta guía contiene 5 ejercicios básicos resueltos paso a paso. Se recomienda leer los comentarios en el código, ya que ahí está la explicación de **por qué** hacemos cada cosa.

## PARTE 1: Introducción a Structs

Los `structs` nos sirven para agrupar variables de distintos tipos bajo un mismo concepto.

### Ejercicio 1: Creando un perfil básico

**Objetivo:** Crear un `struct` simple para representar una Canción, llenarlo con datos y mostrarlo en pantalla.

```cpp
#include <iostream>
#include <string>

using namespace std;

// 1. Definimos el "molde" o plantilla
struct Cancion {
    string titulo;
    string artista;
    int duracionSegundos;
}; // ¡No olvides el punto y coma final!

int main() {
    // 2. Creamos una variable real de tipo Cancion
    Cancion miCancion;

    // 3. Accedemos a sus atributos usando el punto (.)
    miCancion.titulo = "Bohemian Rhapsody";
    miCancion.artista = "Queen";
    miCancion.duracionSegundos = 354;

    // 4. Imprimimos los datos
    cout << "--- Reproduciendo ahora ---" << endl;
    cout << "Tema: " << miCancion.titulo << endl;
    cout << "Banda: " << miCancion.artista << endl;
    cout << "Duracion: " << miCancion.duracionSegundos << " segundos." << endl;

    return 0;
}
```

### Ejercicio 2: Operaciones con Structs

**Objetivo:** Crear un `struct` para un Punto en un plano 2D (con coordenadas X e Y) y sumar dos puntos para crear un tercero.

```cpp
#include <iostream>

using namespace std;

struct Punto2D {
    float x;
    float y;
};

int main() {
    // Inicialización rápida usando llaves {}
    Punto2D puntoA = {2.5, 4.0}; 
    Punto2D puntoB = {1.5, 3.0};
    
    Punto2D puntoResultado; // Este guardará la suma

    // Sumamos las 'x' con las 'x', y las 'y' con las 'y'
    puntoResultado.x = puntoA.x + puntoB.x;
    puntoResultado.y = puntoA.y + puntoB.y;

    cout << "Punto A: (" << puntoA.x << ", " << puntoA.y << ")" << endl;
    cout << "Punto B: (" << puntoB.x << ", " << puntoB.y << ")" << endl;
    cout << "Suma   : (" << puntoResultado.x << ", " << puntoResultado.y << ")" << endl;

    return 0;
}
```

## PARTE 2: Introducción a Punteros Crudos (Raw Pointers)

Un puntero es una variable que **guarda direcciones de memoria**, no valores directos.

### Ejercicio 3: Los operadores `&` y `*`

**Objetivo:** Entender cómo sacar la dirección de una variable y cómo modificarla usando un puntero.

```cpp
#include <iostream>

using namespace std;

int main() {
    int saldo = 500; // Variable normal
    
    // Declaramos un puntero a un entero (int*)
    // El operador & significa "la dirección de memoria de..."
    int* ptrSaldo = &saldo; 

    cout << "1. Saldo original: $" << saldo << endl;
    cout << "2. Direccion secreta en la RAM: " << ptrSaldo << endl;

    // El operador * antes de un puntero significa "ir a esa dirección y acceder al valor"
    // Vamos a modificar el saldo indirectamente a través del puntero:
    *ptrSaldo = 1000; 

    cout << "3. Saldo despues del hackeo: $" << saldo << endl;

    return 0;
}
```

### Ejercicio 4: Memoria Dinámica (`new` y `delete`)

**Objetivo:** Pedirle memoria prestada al sistema operativo "al vuelo" para crear variables, y luego devolverla.

```cpp
#include <iostream>

using namespace std;

int main() {
    // Usamos 'new' para pedir memoria para un entero.
    // 'new' nos devuelve la DIRECCIÓN de esa memoria, así que la guardamos en un puntero.
    int* edadPtr = new int;

    // Le asignamos un valor a esa caja en la memoria
    *edadPtr = 25;

    cout << "La edad guardada dinamicamente es: " << *edadPtr << endl;

    // ¡REGLA DE ORO! Todo lo que pides con 'new', debes devolverlo con 'delete'.
    // Si no lo haces, causas una "fuga de memoria" (Memory Leak).
    delete edadPtr;
    
    // Es buena práctica "limpiar" el puntero para que no apunte a memoria basura
    edadPtr = nullptr; 

    return 0;
}
```

## PARTE 3: Combinando Structs y Punteros

Cuando unimos la Parte 1 y la Parte 2, usamos el **operador flecha (`->`)**.

### Ejercicio 5: Structs Dinámicos (La base de Estructuras de Datos)

**Objetivo:** Crear un `struct` en memoria dinámica usando `new` y acceder a sus datos con la flecha `->`.

```cpp
#include <iostream>
#include <string>

using namespace std;

// Nuestro molde
struct Personaje {
    string nombre;
    int nivel;
    float vida;
};

int main() {
    // 1. Pedimos memoria dinámica para un Struct completo
    Personaje* heroe = new Personaje;

    // 2. IMPORTANTE: Como 'heroe' es un PUNTERO, ya no usamos el punto (.).
    // Usamos la flecha (->) para "viajar" por el puntero y entrar a los atributos del struct.
    heroe->nombre = "Link";
    heroe->nivel = 15;
    heroe->vida = 100.0;

    // 3. Imprimimos usando la flecha
    cout << "--- Estado del Heroe ---" << endl;
    cout << "Nombre: " << heroe->nombre << endl;
    cout << "Nivel: " << heroe->nivel << endl;
    cout << "Vida: " << heroe->vida << "%" << endl;

    // 4. Liberamos la memoria del struct completo
    delete heroe;
    heroe = nullptr;

    return 0;
}
```