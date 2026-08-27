"use client";

import { useState } from "react";

const steps = [
  {
    title: "What's your main goal?",
    subtitle: "We'll personalize your learning around it.",
    options: [
      "🎓 University & Education",
      "💼 Career & Work",
      "🗣️ Speaking & Communication",
      "🌍 Travel",
    ],
  },
  {
    title: "What's your English level?",
    subtitle: "Don't worry, you can change this later.",
    options: [
      "🌱 Beginner — A1",
      "🌿 Elementary — A2",
      "🚀 Intermediate — B1",
      "🔥 Upper-Intermediate — B2",
      "💎 Advanced — C1/C2",
    ],
  },
  {
    title: "How much time can you study?",
    subtitle: "Consistency matters more than long sessions.",
    options: [
      "⚡ 10 minutes a day",
      "🔥 20 minutes a day",
      "🚀 30 minutes a day",
      "💎 60+ minutes a day",
    ],
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);

  const currentStep = steps[step];

  function handleContinue() {
    if (!selected) return;

    if (step < steps.length - 1) {
      setStep(step + 1);
      setSelected(null);
    } else {
      alert("Your personalized plan is ready! 🔥");
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div className="text-2xl font-bold">
            Lingo<span className="text-blue-400">.</span>
          </div>

          <p className="text-sm text-slate-500">
            {step + 1} / {steps.length}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-500"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* Question */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Let's personalize your journey
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight">
            {currentStep.title}
          </h1>

          <p className="mt-4 text-slate-400">
            {currentStep.subtitle}
          </p>
        </div>

        {/* Options */}
        <div className="mt-8 space-y-4">
          {currentStep.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSelected(option)}
              className={`w-full rounded-2xl border p-5 text-left transition ${
                selected === option
                  ? "border-blue-400 bg-blue-500/10"
                  : "border-slate-800 bg-slate-900 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {option}
                </span>

                {selected === option && (
                  <span className="text-blue-400">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Continue */}
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selected}
          className={`mt-10 w-full rounded-full py-4 font-semibold transition ${
            selected
              ? "bg-blue-500 hover:bg-blue-400"
              : "cursor-not-allowed bg-slate-800 text-slate-500"
          }`}
        >
          {step === steps.length - 1
            ? "Create My Learning Plan →"
            : "Continue →"}
        </button>

      </div>
    </main>
  );
}
