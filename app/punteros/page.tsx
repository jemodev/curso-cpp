"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Cpu, Zap, Code2, Terminal, MemoryStick, ShieldCheck, ShieldAlert } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function PunterosPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <Image
            src="/images/pointers.jpg"
            alt="Pointers Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
          
          <div className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                <Cpu className="h-6 w-6" />
              </div>
              <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20">Manejo de Memoria</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent">
              Punteros y Memoria
            </h1>
            <p className="max-w-2xl text-xl text-slate-400 border-l-4 border-amber-500/50 pl-4">
              Variables que guardan direcciones de memoria. El verdadero poder de C++.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">
        
        {/* Intro */}
        <section className={`transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex gap-4 items-start">
            <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 shrink-0">
              <Zap className="h-6 w-6 text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Punteros Crudos (Raw Pointers)</h2>
              <p className="text-lg leading-relaxed text-slate-300 mb-4">
                Un puntero es una variable especial que no guarda un valor (como 5 o "Hola"), sino que <strong className="text-amber-400">guarda una dirección de memoria</strong>. Es como tener un papel que dice "La información está en el casillero #42".
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h3 className="font-bold text-slate-200 mb-2 flex items-center gap-2">
                    <span className="text-amber-400 font-mono text-xl">&amp;</span>
                    El operador de dirección
                  </h3>
                  <p className="text-slate-400 text-sm">Significa "la dirección de memoria de...". Se usa para obtener dónde está guardada una variable en la RAM.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                  <h3 className="font-bold text-slate-200 mb-2 flex items-center gap-2">
                    <span className="text-amber-400 font-mono text-xl">*</span>
                    El operador de desreferencia
                  </h3>
                  <p className="text-slate-400 text-sm">Significa "ir a esa dirección y acceder al valor". Permite leer o modificar el contenido.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ejercicio 1 */}
        <section className={`transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <Card className="bg-slate-900 border-slate-800 overflow-hidden">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-400">punteros.cpp</span>
              </div>
              <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">Ejemplo Básico</Badge>
            </div>
            <CardContent className="p-0">
              <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto text-slate-300">
                <code>
                  <span className="text-blue-400">int</span> saldo = <span className="text-orange-400">500</span>; <span className="text-slate-500 italic">// Variable normal</span>{"\n"}
                  {"\n"}
                  <span className="text-slate-500 italic">// Declaramos un puntero y guardamos la dirección de 'saldo'</span>{"\n"}
                  <span className="text-blue-400">int</span>* ptrSaldo = &saldo; {"\n"}
                  {"\n"}
                  <span className="text-yellow-200">cout</span> &lt;&lt; <span className="text-green-400">"Dirección en RAM: "</span> &lt;&lt; ptrSaldo &lt;&lt; <span className="text-blue-400">endl</span>;{"\n"}
                  {"\n"}
                  <span className="text-slate-500 italic">// Modificamos el saldo indirectamente a través del puntero</span>{"\n"}
                  *ptrSaldo = <span className="text-orange-400">1000</span>; {"\n"}
                </code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Memoria Dinámica y Structs */}
        <section className={`transition-all duration-700 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <MemoryStick className="h-6 w-6 text-amber-400" />
            Memoria Dinámica y Structs
          </h2>
          <div className="space-y-6">
            <p className="text-slate-300">
              Con <code className="text-amber-400 font-mono bg-amber-400/10 px-1 rounded">new</code> le pedimos memoria prestada al sistema operativo "al vuelo". Todo lo que pides, debes devolverlo con <code className="text-rose-400 font-mono bg-rose-400/10 px-1 rounded">delete</code> para evitar fugas de memoria (Memory Leaks).
            </p>
            <p className="text-slate-300">
              Cuando combinamos <strong className="text-slate-100">Punteros</strong> con <strong className="text-emerald-400">Structs</strong>, ya no usamos el punto (<code className="text-slate-400">.</code>) para acceder a los atributos. Usamos el <strong className="text-amber-400">operador flecha (<code className="text-amber-400">-&gt;</code>)</strong>.
            </p>

            <Card className="bg-slate-900 border-slate-800 overflow-hidden">
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-400">struct_dinamico.cpp</span>
              </div>
              <CardContent className="p-0">
                <pre className="p-6 text-sm md:text-base font-mono overflow-x-auto text-slate-300">
                  <code>
                    <span className="text-blue-400">struct</span> <span className="text-emerald-400">Personaje</span> {"{"}{"\n"}
                    {"    "}
                    <span className="text-blue-400">string</span> nombre;{"\n"}
                    {"    "}
                    <span className="text-blue-400">int</span> nivel;{"\n"}
                    {"    "}
                    <span className="text-blue-400">float</span> vida;{"\n"}
                    {"}"};{"\n"}
                    {"\n"}
                    <span className="text-blue-400">int</span> <span className="text-yellow-200">main</span>() {"{"}{"\n"}
                    {"    "}
                    <span className="text-slate-500 italic">// Pedimos memoria dinámica para un Struct completo</span>{"\n"}
                    {"    "}
                    <span className="text-emerald-400">Personaje</span>* heroe = <span className="text-blue-400">new</span> <span className="text-emerald-400">Personaje</span>;{"\n"}
                    {"\n"}
                    {"    "}
                    <span className="text-slate-500 italic">// IMPORTANTE: Como es un PUNTERO, usamos la flecha (-&gt;)</span>{"\n"}
                    {"    "}
                    heroe-&gt;<span className="text-yellow-200">nombre</span> = <span className="text-green-400">"Link"</span>;{"\n"}
                    {"    "}
                    heroe-&gt;<span className="text-yellow-200">nivel</span> = <span className="text-orange-400">15</span>;{"\n"}
                    {"    "}
                    heroe-&gt;<span className="text-yellow-200">vida</span> = <span className="text-orange-400">100.0</span>;{"\n"}
                    {"\n"}
                    {"    "}
                    <span className="text-slate-500 italic">// Liberamos la memoria del struct completo</span>{"\n"}
                    {"    "}
                    <span className="text-blue-400">delete</span> heroe;{"\n"}
                    {"    "}
                    heroe = <span className="text-blue-400">nullptr</span>;{"\n"}
                    {"\n"}
                    {"    "}
                    <span className="text-blue-400">return</span> <span className="text-orange-400">0</span>;{"\n"}
                    {"}"}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scope y Pasaje de Punteros */}
        <section className={`transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Scope y Pasaje por Referencia</h2>
          </div>
          <p className="text-slate-300 mb-4 leading-relaxed">
            Al trabajar con estructuras dinámicas en funciones, modificar el puntero dentro de la función (como cambiar la <code>head</code> de una lista enlazada) puede perderse al salir de ella si no pasamos el puntero correctamente. La solución ideal en C++ es usar <strong className="text-amber-400">Punteros por Referencia</strong>.
          </p>
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 font-mono text-sm inline-block">
            <span className="text-blue-400">void</span> <span className="text-yellow-200">Push</span>(<span className="text-emerald-400">Node</span>*& head, <span className="text-blue-400">int</span> data);
          </div>
        </section>

        {/* C++ Moderno */}
        <section className={`transition-all duration-700 delay-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">C++ Moderno: Punteros Inteligentes</h2>
            </div>
            <p className="text-slate-300 mb-8 max-w-3xl leading-relaxed">
              En el C++ moderno (C++11 en adelante), automatizamos la gestión de memoria vinculando la vida del recurso al ciclo de vida del objeto mediante el paradigma <strong>RAII</strong> (Resource Acquisition Is Initialization). Estos punteros evitan los Memory Leaks y eliminan la necesidad de usar <code>delete</code> manualmente.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                <h4 className="font-bold text-blue-400 font-mono mb-3 text-lg">std::unique_ptr</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Tiene la <strong className="text-slate-200">propiedad exclusiva</strong> del objeto. Coste cero de rendimiento. Utiliza semántica de movimiento para transferir la propiedad. Recomendado por defecto.</p>
              </div>
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                <h4 className="font-bold text-blue-400 font-mono mb-3 text-lg">std::shared_ptr</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Permite la <strong className="text-slate-200">propiedad compartida</strong>. Mantiene un contador de referencias (sabe cuántos punteros lo apuntan) y se destruye automáticamente al llegar a cero.</p>
              </div>
              <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                <h4 className="font-bold text-blue-400 font-mono mb-3 text-lg">std::weak_ptr</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Funciona como un <strong className="text-slate-200">observador sin propiedad</strong>. Es vital para romper dependencias circulares cuando dos <code>shared_ptr</code> se apuntan mutuamente.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
