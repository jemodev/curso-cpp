"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Package, Box, Database, Dumbbell, Code2, Terminal, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function StructsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <Image
            src="/images/structs.jpg"
            alt="Structs Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>

          <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Package className="h-6 w-6" />
              </div>
              <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">Estructuras de Datos</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-4 bg-linear-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text">
              Structs: Empaquetando la Realidad
            </h1>
            <p className="max-w-2xl text-xl text-slate-400 border-l-4 border-emerald-500/50 pl-4">
              De la gestión de variables sueltas a la creación de entidades complejas en C++.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">

        {/* Intro */}
        <section className={`transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex gap-4 items-start">
            <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20 shrink-0">
              <Database className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">El Desafío de los Datos</h2>
              <p className="text-lg leading-relaxed text-slate-300 mb-4">
                En la programación introductoria, los datos suelen verse como cajas simples (como un <code className="text-emerald-400">int</code> o un <code className="text-emerald-400">float</code>). Sin embargo, el mundo real es heterogéneo y caótico.
              </p>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <p className="text-slate-400 mb-3">Imagina intentar guardar los datos de una persona usando variables separadas:</p>
                <ul className="space-y-2 font-mono text-sm">
                  <li><span className="text-blue-400">string</span> nombre = <span className="text-green-400">"Juan Pérez"</span>; <span className="text-slate-500 italic">// Cadena variable</span></li>
                  <li><span className="text-blue-400">int</span> edad = <span className="text-orange-400">35</span>; <span className="text-slate-500 italic">// Entero</span></li>
                  <li><span className="text-blue-400">float</span> promedio = <span className="text-orange-400">9.85</span>; <span className="text-slate-500 italic">// Flotante</span></li>
                </ul>
                <p className="mt-4 text-emerald-400 font-semibold">¿Cómo agrupamos todo esto para que no se nos pierdan los datos?</p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué es un struct? */}
        <section className={`transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Box className="h-6 w-6 text-emerald-400" />
            Structs al Rescate
          </h2>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-4">
                Un <strong className="text-emerald-400">struct</strong> nos permite agrupar variables de distintos tipos bajo un mismo concepto, empaquetando los datos para construir entidades reales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-slate-400"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Actúa como un "molde" o "plantilla".</li>
                <li className="flex items-center gap-2 text-slate-400"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Permite crear múltiples variables con la misma estructura.</li>
                <li className="flex items-center gap-2 text-slate-400"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Accedemos a los datos internos usando el "Punto" (<code className="text-emerald-400 font-bold">.</code>).</li>
              </ul>
            </div>

            <Card className="bg-slate-900 border-slate-800 overflow-hidden">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-400">ejemplo.cpp</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-rose-500/50" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
                </div>
              </div>
              <CardContent className="p-0">
                <pre className="p-6 text-sm font-mono overflow-x-auto">
                  <code className="text-slate-300">
                    <span className="text-blue-400">struct</span> <span className="text-emerald-400">Persona</span> {"{"}{"\n"}
                    {"    "}
                    <span className="text-blue-400">string</span> nombre;{"\n"}
                    {"    "}
                    <span className="text-blue-400">int</span> edad;{"\n"}
                    {"    "}
                    <span className="text-blue-400">float</span> promedio;{"\n"}
                    {"}"}; <span className="text-slate-500 italic">// ¡Importante el punto y coma!</span>{"\n"}
                    {"\n"}
                    <span className="text-emerald-400">Persona</span> estudiante;{"\n"}
                    estudiante.<span className="text-yellow-200">nombre</span> = <span className="text-green-400">"Juan"</span>;{"\n"}
                    estudiante.<span className="text-yellow-200">edad</span> = <span className="text-orange-400">20</span>;
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Ejercicios */}
        <section className={`transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Code2 className="h-8 w-8 text-emerald-400" />
            Guía Práctica: Paso a paso
          </h2>

          <div className="space-y-10">
            {/* Ejercicio 1 */}
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-sm">Ej 1</span>
                Creando un perfil básico
              </h3>
              <p className="text-slate-400 mb-4">
                <strong>Objetivo:</strong> Crear un <code className="text-emerald-400">struct</code> simple para representar una Canción, llenarlo con datos y mostrarlo en pantalla.
              </p>
              <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-400">cancion.cpp</span>
                </div>
                <CardContent className="p-0">
                  <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto text-slate-300">
                    <code>
                      <span className="text-blue-400">struct</span> <span className="text-emerald-400">Cancion</span> {"{"}{"\n"}
                      {"    "}
                      <span className="text-blue-400">string</span> titulo;{"\n"}
                      {"    "}
                      <span className="text-blue-400">string</span> artista;{"\n"}
                      {"    "}
                      <span className="text-blue-400">int</span> duracionSegundos;{"\n"}
                      {"}"};{"\n"}
                      {"\n"}
                      <span className="text-blue-400">int</span> <span className="text-yellow-200">main</span>() {"{"}{"\n"}
                      {"    "}
                      <span className="text-slate-500 italic">// 1. Creamos una variable real de tipo Cancion</span>{"\n"}
                      {"    "}
                      <span className="text-emerald-400">Cancion</span> miCancion;{"\n"}
                      {"\n"}
                      {"    "}
                      <span className="text-slate-500 italic">// 2. Accedemos a sus atributos usando el punto (.)</span>{"\n"}
                      {"    "}
                      miCancion.<span className="text-yellow-200">titulo</span> = <span className="text-green-400">"Bohemian Rhapsody"</span>;{"\n"}
                      {"    "}
                      miCancion.<span className="text-yellow-200">artista</span> = <span className="text-green-400">"Queen"</span>;{"\n"}
                      {"    "}
                      miCancion.<span className="text-yellow-200">duracionSegundos</span> = <span className="text-orange-400">354</span>;{"\n"}
                      {"\n"}
                      {"    "}
                      <span className="text-blue-400">return</span> <span className="text-orange-400">0</span>;{"\n"}
                      {"}"}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>

            {/* Ejercicio 2 */}
            <div>
              <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-sm">Ej 2</span>
                Operaciones con Structs
              </h3>
              <p className="text-slate-400 mb-4">
                <strong>Objetivo:</strong> Crear un <code className="text-emerald-400">struct</code> para un Punto en un plano 2D y sumar dos puntos para crear un tercero.
              </p>
              <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-slate-400" />
                  <span className="text-sm font-medium text-slate-400">puntos.cpp</span>
                </div>
                <CardContent className="p-0">
                  <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto text-slate-300">
                    <code>
                      <span className="text-blue-400">struct</span> <span className="text-emerald-400">Punto2D</span> {"{"}{"\n"}
                      {"    "}
                      <span className="text-blue-400">float</span> x;{"\n"}
                      {"    "}
                      <span className="text-blue-400">float</span> y;{"\n"}
                      {"}"};{"\n"}
                      {"\n"}
                      <span className="text-blue-400">int</span> <span className="text-yellow-200">main</span>() {"{"}{"\n"}
                      {"    "}
                      <span className="text-slate-500 italic">// Inicialización rápida usando llaves {"{}"}</span>{"\n"}
                      {"    "}
                      <span className="text-emerald-400">Punto2D</span> puntoA = {"{"}<span className="text-orange-400">2.5</span>, <span className="text-orange-400">4.0</span>{"}"};{"\n"}
                      {"    "}
                      <span className="text-emerald-400">Punto2D</span> puntoB = {"{"}<span className="text-orange-400">1.5</span>, <span className="text-orange-400">3.0</span>{"}"};{"\n"}
                      {"    "}
                      <span className="text-emerald-400">Punto2D</span> puntoResultado;{"\n"}
                      {"\n"}
                      {"    "}
                      <span className="text-slate-500 italic">// Sumamos las 'x' con las 'x', y las 'y' con las 'y'</span>{"\n"}
                      {"    "}
                      puntoResultado.<span className="text-yellow-200">x</span> = puntoA.<span className="text-yellow-200">x</span> + puntoB.<span className="text-yellow-200">x</span>;{"\n"}
                      {"    "}
                      puntoResultado.<span className="text-yellow-200">y</span> = puntoA.<span className="text-yellow-200">y</span> + puntoB.<span className="text-yellow-200">y</span>;{"\n"}
                      {"\n"}
                      {"    "}
                      <span className="text-blue-400">return</span> <span className="text-orange-400">0</span>;{"\n"}
                      {"}"}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reto */}
        <section className={`transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-500/20 p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Reto Propuesto</h2>
          </div>

          <Card className="bg-slate-900/80 border-slate-700 hover:border-emerald-500/50 transition-colors backdrop-blur-sm">
            <CardHeader>
              <Badge variant="outline" className="w-fit text-emerald-400 border-emerald-500/30 mb-2">Desafío Estructural</Badge>
              <CardTitle className="text-slate-200">Inventario de Videojuego</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400">
              <p className="mb-4">
                Diseña un <code>struct</code> llamado <code>Item</code> que tenga:
                nombre (string), peso (float), y cantidad (int).
                Luego crea un arreglo de 5 items y escribe un ciclo que sume el peso total del inventario.
              </p>
              <div className="bg-slate-950 p-3 rounded text-sm font-mono border border-slate-800">
                <span className="text-emerald-500">PISTA:</span> El peso total es <code className="text-orange-400">peso * cantidad</code> para cada item.
              </div>
            </CardContent>
          </Card>
        </section>

      </main>
    </div>
  )
}
