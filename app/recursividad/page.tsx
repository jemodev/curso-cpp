"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Brain, Terminal, Cpu, AlertTriangle, Repeat, Code2, Layers, CheckCircle2, Users, Box, Wand2, Dumbbell, Target } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function RecursividadPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <Image
            src="/images/recursion.jpg"
            alt="Recursividad Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
          
          <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <Repeat className="h-6 w-6" />
              </div>
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Concepto Avanzado</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Introducción a la Recursividad
            </h1>
            <p className="max-w-2xl text-xl text-slate-400 border-l-4 border-blue-500/50 pl-4">
              Descubriendo la magia (y la lógica) de las funciones que se llaman a sí mismas.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">
        
        {/* Intro */}
        <section className={`transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex gap-4 items-start">
            <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 shrink-0">
              <Brain className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">¿Qué es la recursividad?</h2>
              <p className="text-lg leading-relaxed text-slate-300">
                En lugar de resolver un problema gigante de un solo golpe, <strong className="text-blue-400 font-semibold">la recursividad divide el problema en versiones idénticas, pero más pequeñas, de sí mismo</strong> — hasta llegar a un problema tan pequeño que la respuesta es obvia.
              </p>
            </div>
          </div>
        </section>

        {/* Analogías Visuales */}
        <section className={`transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-2xl font-bold text-white mb-6">Analogías Visuales para entenderla mejor</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardHeader className="pb-2">
                <Box className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle className="text-purple-300 text-lg">Muñecas Rusas (Matrioshkas)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-400">
                Abre una muñeca y encontrarás una más pequeña adentro (<strong className="text-purple-400 font-medium">paso recursivo</strong>). Repites esto hasta llegar a la muñeca sólida que no se abre más (<strong className="text-purple-400 font-medium">caso base</strong>).
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-amber-500/20 hover:border-amber-500/40 transition-colors">
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-amber-400 mb-2" />
                <CardTitle className="text-amber-300 text-lg">La fila del cine</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-400">
                ¿En qué fila estás? Le preguntas al de adelante. Él al siguiente. Al llegar a la primera fila (<strong className="text-amber-400 font-medium">caso base</strong>), la respuesta viaja de vuelta sumando 1 por persona.
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
              <CardHeader className="pb-2">
                <Wand2 className="h-8 w-8 text-cyan-400 mb-2" />
                <CardTitle className="text-cyan-300 text-lg">El clon ayudante</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-400">
                Tienes una tarea colosal. Creas un clon tuyo exacto y le delegas una parte un poco más pequeña. Él hace lo mismo. ¡Delega el trabajo difícil a la magia de la recursión!
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Las dos reglas de oro */}
        <section className={`transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-400" />
            Las dos reglas de oro
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-900/50 border-emerald-500/20 hover:border-emerald-500/50 transition-colors">
              <CardHeader>
                <div className="text-4xl font-black text-emerald-500/20 mb-2">01</div>
                <CardTitle className="text-emerald-400">El paso recursivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">La parte del código donde la función se llama a <strong className="text-slate-200">sí misma</strong> pero con un problema un paso más pequeño.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-rose-500/20 hover:border-rose-500/50 transition-colors">
              <CardHeader>
                <div className="text-4xl font-black text-rose-500/20 mb-2">02</div>
                <CardTitle className="text-rose-400">La condición base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">El momento de detenerse. Una condición simple que se resuelve <strong className="text-slate-200">sin necesidad</strong> de llamarse a sí misma. ¡Sin esto, el ciclo nunca terminaría!</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Anatomia (Code) */}
        <section className={`transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <Card className="bg-slate-900 border-slate-800 overflow-hidden">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-400">main.cpp</span>
              </div>
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-rose-500/50" />
                <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
              </div>
            </div>
            <CardContent className="p-0">
              <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto">
                <code className="text-slate-300">
                  <span className="text-blue-400">void</span> <span className="text-yellow-200">cuentaRegresiva</span>(<span className="text-blue-400">int</span> numero) {"{"}{"\n"}
                  {"    "}
                  <span className="text-slate-500 italic">{"// Condición base"}</span>{"\n"}
                  {"    "}
                  <span className="text-blue-400">if</span> (numero == <span className="text-orange-400">0</span>) {"{"}{"\n"}
                  {"        "}
                  <span className="text-yellow-200">print</span>(<span className="text-green-400">"¡Despegue!"</span>);{"\n"}
                  {"        "}
                  <span className="text-blue-400">return</span>;{"\n"}
                  {"    "}{"}"}{"\n"}
                  {"\n"}
                  {"    "}
                  <span className="text-yellow-200">print</span>(numero);{"\n"}
                  {"    "}
                  <span className="text-slate-500 italic">{"// Llamada recursiva"}</span>{"\n"}
                  {"    "}
                  <span className="text-yellow-200">cuentaRegresiva</span>(numero - <span className="text-orange-400">1</span>);{"\n"}
                  {"}"}
                </code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Call Stack */}
        <section className={`bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/20 rounded-2xl p-8 relative overflow-hidden transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Layers className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="h-8 w-8 text-indigo-400" />
              <h2 className="text-2xl font-bold text-indigo-100">El motor invisible: Call Stack</h2>
            </div>
            <p className="text-indigo-200 mb-8 max-w-2xl">
              Imagina un escritorio. Cada vez que una función se llama a sí misma, la computadora pausa la tarea actual y pone una nueva carpeta encima de la pila. <strong>¡Solo puedes trabajar en la carpeta que está en la cima!</strong>
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-indigo-300 mb-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-400">1</span>
                  Winding (Apilando)
                </h3>
                <div className="space-y-3 bg-slate-950/50 p-4 rounded-lg font-mono text-sm border border-slate-800">
                  <div className="text-slate-300">[ cuentaRegresiva(0) ] <span className="text-emerald-400 text-xs ml-2">← tope (en ejecución)</span></div>
                  <div className="text-slate-500">[ cuentaRegresiva(1) ] <span className="text-slate-600 text-xs ml-2">← pausada</span></div>
                  <div className="text-slate-600">[ cuentaRegresiva(2) ] <span className="text-slate-600 text-xs ml-2">← pausada</span></div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-indigo-300 mb-4 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-400">2</span>
                  Unwinding (Resolviendo)
                </h3>
                <div className="space-y-3 bg-slate-950/50 p-4 rounded-lg font-mono text-sm border border-slate-800">
                  <div className="text-slate-600 line-through opacity-50">[ cuentaRegresiva(0) ] <span className="text-slate-700 text-xs ml-2 no-underline">← resuelta</span></div>
                  <div className="text-slate-300">[ cuentaRegresiva(1) ] <span className="text-emerald-400 text-xs ml-2">← retomada</span></div>
                  <div className="text-slate-500">[ cuentaRegresiva(2) ] <span className="text-slate-600 text-xs ml-2">← esperando</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Classic Examples */}
        <section className={`transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Code2 className="h-8 w-8 text-blue-400" />
            Ejemplos de Código Clásicos
          </h2>

          <div className="space-y-10">
            {/* Factorial Example */}
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">1. Factorial matemático (5!)</h3>
              <Card className="bg-slate-900 border-slate-800">
                <CardContent className="p-6 md:p-8">
                  <p className="text-slate-400 mb-6 font-medium">
                    La magia ocurre al regresar. Ninguna multiplicación se realiza hasta que tocamos el fondo (la condición base). ¡Las respuestas se pasan hacia arriba!
                  </p>
                  <div className="font-mono text-sm md:text-base space-y-2 text-slate-300">
                    <div className="flex items-center"><span className="w-32">5! = 5 × <span className="text-blue-400">4!</span></span> <span className="text-emerald-400 ml-4 hidden md:inline">↑ Pasa el 24 → 5 × 24 = 120</span></div>
                    <div className="flex items-center pl-4"><span className="w-32">4! = 4 × <span className="text-blue-400">3!</span></span> <span className="text-emerald-400 ml-4 hidden md:inline">↑ Pasa el 6  → 4 × 6  = 24</span></div>
                    <div className="flex items-center pl-8"><span className="w-32">3! = 3 × <span className="text-blue-400">2!</span></span> <span className="text-emerald-400 ml-4 hidden md:inline">↑ Pasa el 2  → 3 × 2  = 6</span></div>
                    <div className="flex items-center pl-12"><span className="w-32">2! = 2 × <span className="text-blue-400">1!</span></span> <span className="text-emerald-400 ml-4 hidden md:inline">↑ Pasa el 1  → 2 × 1  = 2</span></div>
                    <div className="flex items-center pl-16"><span className="w-32">1! = <span className="text-orange-400">1</span></span> <span className="text-slate-500 ml-4 italic">← Condición base</span></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fibonacci Example */}
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-4">2. Sucesión de Fibonacci</h3>
              <p className="text-slate-400 mb-4 font-medium">
                Un ejemplo perfecto de <strong>recursividad múltiple</strong>. Cada número es la suma de los dos anteriores, por lo tanto, ¡la función se llama a sí misma en dos ramas distintas por cada paso!
              </p>
              <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-medium text-slate-400">fibonacci.cpp</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-rose-500/50" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
                  </div>
                </div>
                <CardContent className="p-0">
                  <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto">
                    <code className="text-slate-300">
                      <span className="text-blue-400">int</span> <span className="text-yellow-200">fibonacci</span>(<span className="text-blue-400">int</span> n) {"{"}{"\n"}
                      {"    "}
                      <span className="text-slate-500 italic">{"// ¡Múltiples condiciones base!"}</span>{"\n"}
                      {"    "}
                      <span className="text-blue-400">if</span> (n == <span className="text-orange-400">0</span>) <span className="text-blue-400">return</span> <span className="text-orange-400">0</span>;{"\n"}
                      {"    "}
                      <span className="text-blue-400">if</span> (n == <span className="text-orange-400">1</span>) <span className="text-blue-400">return</span> <span className="text-orange-400">1</span>;{"\n"}
                      {"\n"}
                      {"    "}
                      <span className="text-slate-500 italic">{"// Dos ramas recursivas"}</span>{"\n"}
                      {"    "}
                      <span className="text-blue-400">return</span> <span className="text-yellow-200">fibonacci</span>(n - <span className="text-orange-400">1</span>) + <span className="text-yellow-200">fibonacci</span>(n - <span className="text-orange-400">2</span>);{"\n"}
                      {"}"}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Zona de peligro */}
        <section className={`transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6 md:p-8 flex items-start gap-4">
            <div className="bg-rose-500/20 p-3 rounded-full shrink-0">
              <AlertTriangle className="h-6 w-6 text-rose-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-rose-400 mb-2">La zona de peligro: Stack Overflow</h3>
              <p className="text-rose-200/80 mb-4">
                ¿Qué pasa si olvidamos nuestra condición base o si nuestro problema nunca se hace más pequeño?
              </p>
              <p className="text-rose-200/60 text-sm">
                La computadora seguirá apilando carpetas en la memoria infinitamente. Eventualmente, el "escritorio" (la memoria asignada al Call Stack) se queda sin espacio y se derrumba. Esto hará que tu programa colapse instantáneamente.
              </p>
            </div>
          </div>
        </section>

        {/* Comparativa */}
        <section className={`transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-2xl font-bold text-white mb-6">¿Recursividad o Ciclos?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400">
                  <th className="py-4 font-medium uppercase text-xs tracking-wider">Criterio</th>
                  <th className="py-4 font-medium uppercase text-xs tracking-wider">Ciclos (for / while)</th>
                  <th className="py-4 font-medium uppercase text-xs tracking-wider text-blue-400">Recursividad</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-800/50">
                  <td className="py-4 font-medium text-slate-300">Facilidad de lectura</td>
                  <td className="py-4 text-slate-400 pr-4">Buena para tareas secuenciales simples.</td>
                  <td className="py-4 text-slate-400">Excelente para problemas complejos que se dividen repetitivamente.</td>
                </tr>
                <tr className="border-b border-slate-800/50">
                  <td className="py-4 font-medium text-slate-300">Uso de memoria</td>
                  <td className="py-4 text-emerald-400 pr-4">Muy bajo. Reutiliza el mismo espacio.</td>
                  <td className="py-4 text-rose-400">Alto. Cada llamada usa memoria adicional.</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-slate-300">Casos ideales</td>
                  <td className="py-4 text-slate-400 pr-4">Recorrer listas, conteos, sumar números.</td>
                  <td className="py-4 text-slate-400">Navegar árboles, laberintos, fórmulas anidadas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Ejercicios Propuestos */}
        <section className={`transition-all duration-700 delay-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-500/20 p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Pon a prueba tu mente: Retos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
              <Target className="w-64 h-64" />
            </div>
            
            <Card className="bg-slate-900/80 border-slate-700 hover:border-emerald-500/50 transition-colors z-10 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-emerald-400 border-emerald-500/30">Nivel 1: Calentamiento</Badge>
                  <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🔥</span>
                </div>
                <CardTitle className="text-slate-200 mt-2">Palíndromo Recursivo</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-400">
                <p className="mb-3">
                  Escribe una función que verifique si una palabra se lee igual al derecho y al revés (ej. "reconocer").
                </p>
                <div className="bg-slate-950 p-3 rounded text-xs font-mono border border-slate-800">
                  <span className="text-emerald-500">PISTA:</span> Compara la primera y última letra. Si son iguales, llama a la función pasándole la palabra sin esas dos letras.
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 border-slate-700 hover:border-orange-500/50 transition-colors z-10 backdrop-blur-sm group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-orange-400 border-orange-500/30">Nivel 2: Desafío</Badge>
                  <span className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">🧠</span>
                </div>
                <CardTitle className="text-slate-200 mt-2">Número a Binario</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-400">
                <p className="mb-3">
                  Crea una función recursiva que imprima la representación en binario de un número entero base 10.
                </p>
                <div className="bg-slate-950 p-3 rounded text-xs font-mono border border-slate-800">
                  <span className="text-orange-500">PISTA:</span> Divide el número entre 2 iterativamente. El truco está en imprimir el "residuo" (% 2) <strong className="text-slate-200">después</strong> de la llamada recursiva (aprovechando el Unwinding).
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Summary Footer */}
        <section className={`pb-20 transition-all duration-700 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <div className="w-16 h-1 bg-blue-500/50 rounded-full mb-8"></div>
            <h3 className="text-xl font-bold text-white mb-4">3 Reglas para recordar</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300">
              <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">1. Todo es un clon más pequeño</span>
              <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">2. Nunca olvides el freno</span>
              <span className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">3. La resolución va de arriba a abajo</span>
            </div>
            <p className="mt-8 text-blue-400 font-medium">¡Con este modelo mental puedes conquistar la recursividad!</p>
          </div>
        </section>

      </main>
    </div>
  )
}
