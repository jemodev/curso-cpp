"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"

const topics = [
  {
    id: "recursividad",
    title: "Recursividad",
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    glowColor: "shadow-blue-500/20",
    textColor: "text-blue-400",
    image: "/images/recursion.jpg",
    description: "Una funcion que se llama a si misma para resolver problemas dividiendo en subproblemas.",
    prerequisites: [
      "Funciones (declaracion, parametros, retorno)",
      "Condicionales (if, else, switch)",
      "Ciclos (for, while) - para comparar",
      "Pila de llamadas (call stack)",
      "Caso base y caso recursivo",
    ],
  },
  {
    id: "structs",
    title: "Registros (Structs)",
    color: "bg-emerald-500",
    borderColor: "border-emerald-500",
    glowColor: "shadow-emerald-500/20",
    textColor: "text-emerald-400",
    image: "/images/structs.jpg",
    description: "Agrupa multiples variables de diferentes tipos bajo un mismo nombre.",
    prerequisites: [
      "Tipos de datos primitivos",
      "Variables y declaraciones",
      "Arreglos unidimensionales",
      "Operador punto (.)",
      "Paso por valor vs referencia",
    ],
  },
  {
    id: "punteros",
    title: "Punteros",
    color: "bg-amber-500",
    borderColor: "border-amber-500",
    glowColor: "shadow-amber-500/20",
    textColor: "text-amber-400",
    image: "/images/pointers.jpg",
    description: "Variables que almacenan direcciones de memoria para acceso directo.",
    prerequisites: [
      "Variables y direcciones de memoria",
      "Tipos de datos",
      "Operadores & (direccion) y * (desreferencia)",
      "Arreglos y su relacion con punteros",
      "Aritmetica de punteros",
      "Memoria dinamica (new, delete)",
    ],
  },
  {
    id: "listas",
    title: "Listas Enlazadas",
    color: "bg-rose-500",
    borderColor: "border-rose-500",
    glowColor: "shadow-rose-500/20",
    textColor: "text-rose-400",
    image: "/images/linked-list.jpg",
    description: "Estructura de datos dinamica donde cada nodo apunta al siguiente.",
    prerequisites: [
      "Punteros (completo)",
      "Structs / Registros",
      "Memoria dinamica (new, delete)",
      "Recursividad (para recorridos)",
      "Nodo: dato + puntero al siguiente",
      "NULL / nullptr",
    ],
  },
  {
    id: "poo",
    title: "Programacion Orientada a Objetos",
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    glowColor: "shadow-indigo-500/20",
    textColor: "text-indigo-400",
    image: "/images/oop.jpg",
    description: "Paradigma basado en objetos que encapsulan datos y comportamiento.",
    prerequisites: [
      "Structs (como base de clases)",
      "Funciones y paso de parametros",
      "Punteros y referencias",
      "Modificadores de acceso (public, private)",
      "Constructores y destructores",
      "Conceptos: Clase, Objeto, Atributo, Metodo",
    ],
  },
]

const fundamentals = [
  {
    name: "Variables y tipos de datos",
    icon: "x",
    color: "cyan",
    description: "Almacenamiento de informacion en memoria",
    elements: [
      { name: "int", desc: "Numeros enteros" },
      { name: "float / double", desc: "Numeros decimales" },
      { name: "char", desc: "Caracteres individuales" },
      { name: "string", desc: "Cadenas de texto" },
      { name: "bool", desc: "Valores true/false" },
    ],
  },
  {
    name: "Operadores aritmeticos y logicos",
    icon: "+",
    color: "violet",
    description: "Operaciones matematicas y comparaciones",
    elements: [
      { name: "+ - * / %", desc: "Operadores aritmeticos" },
      { name: "== != < > <= >=", desc: "Operadores relacionales" },
      { name: "&& || !", desc: "Operadores logicos" },
      { name: "++ --", desc: "Incremento y decremento" },
      { name: "+= -= *= /=", desc: "Asignacion compuesta" },
    ],
  },
  {
    name: "Entrada/Salida (cin, cout)",
    icon: ">",
    color: "teal",
    description: "Comunicacion con el usuario",
    elements: [
      { name: "cout <<", desc: "Mostrar en pantalla" },
      { name: "cin >>", desc: "Leer del teclado" },
      { name: "endl", desc: "Salto de linea" },
      { name: "#include <iostream>", desc: "Libreria necesaria" },
      { name: "using namespace std", desc: "Espacio de nombres" },
    ],
  },
  {
    name: "Condicionales",
    icon: "?",
    color: "amber",
    description: "Toma de decisiones en el codigo",
    elements: [
      { name: "if", desc: "Condicion simple" },
      { name: "else", desc: "Alternativa" },
      { name: "else if", desc: "Condiciones multiples" },
      { name: "switch", desc: "Seleccion por casos" },
      { name: "? :", desc: "Operador ternario" },
    ],
  },
  {
    name: "Ciclos (for, while, do-while)",
    icon: "O",
    color: "rose",
    description: "Repeticion de instrucciones",
    elements: [
      { name: "for", desc: "Iteracion controlada" },
      { name: "while", desc: "Mientras condicion" },
      { name: "do-while", desc: "Al menos una vez" },
      { name: "break", desc: "Salir del ciclo" },
      { name: "continue", desc: "Siguiente iteracion" },
    ],
  },
  {
    name: "Funciones",
    icon: "f",
    color: "blue",
    description: "Bloques de codigo reutilizable",
    elements: [
      { name: "Declaracion", desc: "Definir la funcion" },
      { name: "Parametros", desc: "Datos de entrada" },
      { name: "return", desc: "Valor de retorno" },
      { name: "void", desc: "Sin retorno" },
      { name: "Prototipos", desc: "Declaracion anticipada" },
    ],
  },
  {
    name: "Arreglos",
    icon: "[]",
    color: "emerald",
    description: "Colecciones de datos del mismo tipo",
    elements: [
      { name: "Declaracion", desc: "tipo nombre[tam]" },
      { name: "Indices", desc: "Acceso por posicion [0..n-1]" },
      { name: "Recorrido", desc: "Iterar con ciclos" },
      { name: "Multidimensionales", desc: "Matrices y mas" },
      { name: "sizeof", desc: "Tamano del arreglo" },
    ],
  },
]

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  cyan: { bg: "bg-cyan-500", text: "text-cyan-400", border: "border-cyan-500/30", glow: "shadow-cyan-500/20" },
  violet: { bg: "bg-violet-500", text: "text-violet-400", border: "border-violet-500/30", glow: "shadow-violet-500/20" },
  teal: { bg: "bg-teal-500", text: "text-teal-400", border: "border-teal-500/30", glow: "shadow-teal-500/20" },
  amber: { bg: "bg-amber-500", text: "text-amber-400", border: "border-amber-500/30", glow: "shadow-amber-500/20" },
  rose: { bg: "bg-rose-500", text: "text-rose-400", border: "border-rose-500/30", glow: "shadow-rose-500/20" },
  blue: { bg: "bg-blue-500", text: "text-blue-400", border: "border-blue-500/30", glow: "shadow-blue-500/20" },
  emerald: { bg: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", glow: "shadow-emerald-500/20" },
}

const flowSteps = [
  { label: "Funciones", color: "bg-slate-600", delay: 0 },
  { label: "Structs", color: "bg-emerald-500", delay: 100 },
  { label: "Punteros", color: "bg-amber-500", delay: 200 },
  { label: "Recursividad", color: "bg-blue-500", delay: 300 },
  { label: "Listas Enlazadas", color: "bg-rose-500", delay: 400 },
  { label: "POO", color: "bg-indigo-500", delay: 500 },
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [unlockedSteps, setUnlockedSteps] = useState<number[]>([0])
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleStepClick = (index: number) => {
    if (!unlockedSteps.includes(index)) return

    if (expandedStep === index) {
      setExpandedStep(null)
    } else {
      setExpandedStep(index)
    }

    // Unlock next step when clicking current
    if (index === Math.max(...unlockedSteps) && index < fundamentals.length - 1) {
      setTimeout(() => {
        setUnlockedSteps((prev) => [...prev, index + 1])
      }, 300)
    }
  }

  const unlockAll = () => {
    setUnlockedSteps(fundamentals.map((_, i) => i))
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section with Image */}
      <header className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0">
          <Image
            src="/images/cpp-hero.jpg"
            alt="C++ Programming"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950" />
        </div>
        <div
          className={`relative mx-auto max-w-7xl px-4 py-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 font-mono text-xl font-bold animate-pulse">
              {"C++"}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Prerrequisitos en{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              C++
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Mapa visual de los temas previos requeridos para dominar cada concepto avanzado en programacion
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Fundamentals Section - Cascading Steps */}
        <section
          className={`mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-200">Base Fundamental</h2>
              <Badge className="bg-slate-800 text-slate-400">Requerido para todos</Badge>
            </div>
            <button
              onClick={unlockAll}
              className="px-4 py-2 text-sm bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50"
            >
              Desbloquear todos
            </button>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-slate-700 to-slate-800 md:left-8" />

            {/* Cascading Steps */}
            <div className="space-y-4">
              {fundamentals.map((item, index) => {
                const isUnlocked = unlockedSteps.includes(index)
                const isExpanded = expandedStep === index
                const isNext = index === Math.max(...unlockedSteps) + 1
                const colors = colorClasses[item.color]

                return (
                  <div
                    key={index}
                    className={`relative pl-14 md:pl-20 transition-all duration-500 ${
                      isUnlocked ? "opacity-100" : isNext ? "opacity-50" : "opacity-20"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Step Number Circle */}
                    <button
                      onClick={() => handleStepClick(index)}
                      disabled={!isUnlocked}
                      className={`absolute left-0 top-0 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
                        isUnlocked
                          ? `${colors.border} ${colors.bg}/20 hover:scale-110 cursor-pointer`
                          : "border-slate-700 bg-slate-800/50 cursor-not-allowed"
                      } ${isExpanded ? `scale-110 ${colors.glow} shadow-xl` : ""}`}
                    >
                      <span
                        className={`font-mono text-lg md:text-xl font-bold transition-colors ${
                          isUnlocked ? colors.text : "text-slate-600"
                        }`}
                      >
                        {item.icon}
                      </span>
                    </button>

                    {/* Step Card */}
                    <Card
                      className={`border transition-all duration-500 overflow-hidden ${
                        isUnlocked
                          ? `${colors.border} bg-slate-900/70 hover:bg-slate-900/90 cursor-pointer`
                          : "border-slate-800 bg-slate-900/30"
                      } ${isExpanded ? `${colors.glow} shadow-xl` : ""}`}
                      onClick={() => isUnlocked && handleStepClick(index)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                                isUnlocked ? `${colors.bg} text-white` : "bg-slate-700 text-slate-400"
                              }`}
                            >
                              {index + 1}
                            </span>
                            <CardTitle
                              className={`text-lg transition-colors ${
                                isUnlocked ? colors.text : "text-slate-500"
                              }`}
                            >
                              {item.name}
                            </CardTitle>
                          </div>
                          {isUnlocked && (
                            <svg
                              className={`h-5 w-5 transition-transform duration-300 ${colors.text} ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </div>
                        <p className={`text-sm ${isUnlocked ? "text-slate-400" : "text-slate-600"}`}>
                          {item.description}
                        </p>
                      </CardHeader>

                      {/* Expandable Content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <CardContent className="pt-0 pb-4">
                          <div className={`h-px w-full ${colors.bg}/30 mb-4`} />
                          <p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-3">
                            Elementos clave:
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {item.elements.map((element, elemIndex) => (
                              <div
                                key={elemIndex}
                                className={`group rounded-xl bg-slate-800/50 p-3 transition-all duration-300 hover:bg-slate-800 hover:scale-105 border ${colors.border}`}
                                style={{ animationDelay: `${elemIndex * 100}ms` }}
                              >
                                <code
                                  className={`text-sm font-mono font-semibold ${colors.text} block mb-1`}
                                >
                                  {element.name}
                                </code>
                                <span className="text-xs text-slate-400">{element.desc}</span>
                              </div>
                            ))}
                          </div>

                          {/* Next Step Prompt */}
                          {index < fundamentals.length - 1 && index === Math.max(...unlockedSteps) && (
                            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                              <svg
                                className="h-4 w-4 animate-bounce"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                              <span>Haz clic para desbloquear el siguiente tema</span>
                            </div>
                          )}
                        </CardContent>
                      </div>
                    </Card>

                    {/* Locked Overlay */}
                    {!isUnlocked && (
                      <div className="absolute inset-0 flex items-center justify-center pl-14 md:pl-20">
                        <div className="flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-500">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span>Completa el tema anterior</span>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Completion Badge */}
            {unlockedSteps.length === fundamentals.length && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-6 py-4 animate-pulse">
                  <svg className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <p className="text-lg font-semibold text-cyan-400">Base Completa</p>
                    <p className="text-sm text-slate-400">Estas listo para los temas avanzados</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Animated Flow Diagram */}
        <section
          className={`mb-16 transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
              <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-slate-200">Orden de Aprendizaje</h2>
          </div>
          <div className="relative rounded-2xl border border-slate-800 bg-slate-900/30 p-8 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-4 top-1/2 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl animate-pulse" />
              <div className="absolute -right-4 top-1/2 h-32 w-32 rounded-full bg-indigo-500/5 blur-3xl animate-pulse delay-500" />
            </div>
            
            <div className="relative flex flex-wrap items-center justify-center gap-4">
              {flowSteps.map((step, index) => (
                <div key={step.label} className="flex items-center gap-4">
                  <FlowItem
                    label={step.label}
                    color={step.color}
                    delay={step.delay}
                    isVisible={isVisible}
                  />
                  {index < flowSteps.length - 1 && (
                    <AnimatedArrow delay={step.delay + 50} isVisible={isVisible} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Topics Grid with Images */}
        <section
          className={`transition-all duration-700 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
              <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-slate-200">Prerrequisitos por Tema</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <Card
                key={topic.id}
                className={`group relative border-2 ${topic.borderColor} bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl ${topic.glowColor} cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveCard(topic.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Image Header */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      activeCard === topic.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900`} />
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${topic.color} transition-all duration-300 ${
                    activeCard === topic.id ? "opacity-100" : "opacity-50"
                  }`} />
                </div>

                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-3 w-3 rounded-full ${topic.color} transition-all duration-300 ${
                        activeCard === topic.id ? "scale-125 animate-pulse" : ""
                      }`}
                    />
                    <CardTitle className={`text-lg ${topic.textColor} transition-colors`}>
                      {topic.title}
                    </CardTitle>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{topic.description}</p>
                </CardHeader>
                
                <CardContent className="pt-2">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">
                    Debes dominar:
                  </p>
                  <ul className="space-y-2">
                    {topic.prerequisites.map((prereq, prereqIndex) => (
                      <li
                        key={prereqIndex}
                        className={`flex items-start gap-2 text-sm text-slate-400 transition-all duration-300 ${
                          activeCard === topic.id ? "translate-x-1 text-slate-300" : ""
                        }`}
                        style={{ transitionDelay: `${prereqIndex * 50}ms` }}
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${topic.color} transition-all duration-300 ${
                            activeCard === topic.id ? "scale-125" : ""
                          }`}
                        />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Dependencies Note with Animation */}
        <section
          className={`mt-16 transition-all duration-700 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Card className="relative overflow-hidden border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-slate-900/50">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl" />
            <CardContent className="relative p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                    Nota sobre dependencias
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    <strong className="text-slate-200">Listas Enlazadas</strong> es el tema que mas
                    prerrequisitos tiene, ya que combina punteros, structs, memoria dinamica y
                    opcionalmente recursividad. Asegurate de dominar cada tema previo antes de
                    avanzar.{" "}
                    <strong className="text-slate-200">POO</strong> se puede estudiar en paralelo
                    con listas enlazadas una vez que domines structs y punteros.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-800 bg-slate-900/30 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-sm text-slate-500">
            Curso de Introduccion a la Programacion con C++
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {["Recursividad", "Structs", "Punteros", "Listas", "POO"].map((topic, index) => (
              <div
                key={topic}
                className="h-1.5 w-8 rounded-full transition-all duration-300 hover:w-12"
                style={{
                  backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#f43f5e", "#6366f1"][index],
                }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

function FlowItem({
  label,
  color,
  delay,
  isVisible,
}: {
  label: string
  color: string
  delay: number
  isVisible: boolean
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl bg-slate-800/80 px-5 py-3 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay + 600}ms` }}
    >
      <div className={`h-3 w-3 rounded-full ${color} animate-pulse`} />
      <span className="text-sm font-medium text-slate-200">{label}</span>
    </div>
  )
}

function AnimatedArrow({ delay, isVisible }: { delay: number; isVisible: boolean }) {
  return (
    <div
      className={`transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
      }`}
      style={{ transitionDelay: `${delay + 600}ms` }}
    >
      <svg
        className="h-5 w-5 shrink-0 text-cyan-500/50 animate-pulse"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  )
}
