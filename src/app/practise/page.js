"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    situation: "You're at the airport.",
    speaker: "Airport Staff",
    question: "Good morning. May I see your passport?",
    options: [
      "Sure, here you go.",
      "I am seeing my passport.",
      "Give passport me.",
      "No, I don't see.",
    ],
    correct: 0,
    explanation:
      '"Sure, here you go." is a natural and polite way to give someone something they asked for.',
  },
  {
    situation: "You're at a coffee shop.",
    speaker: "Barista",
    question: "What would you like to drink?",
    options: [
      "I like drink coffee.",
      "I'd like a cappuccino, please.",
      "I am drinking cappuccino.",
      "Give me coffee.",
    ],
    correct: 1,
    explanation:
      '"I\'d like..." is a natural and polite way to order something.',
  },
  {
    situation: "You're meeting someone new.",
    speaker: "Alex",
    question: "Nice to meet you! Where are you from?",
    options: [
      "I am from Uzbekistan.",
      "I from Uzbekistan.",
      "Yes, I am.",
      "I have Uzbekistan.",
    ],
    correct: 0,
    explanation:
      '"I am from..." is the correct way to say where you are from.',
  },
];

export default function Practice() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[questionIndex];

  function handleAnswer(index) {
    if (selected !== null) return;

    setSelected(index);

    if (index === question.correct) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function nextQuestion() {
    if (questionIndex === questions.length - 1) {
      setFinished(true);
      return;
    }

    setQuestionIndex((prevIndex) => prevIndex + 1);
    setSelected(null);
  }

  function restartPractice() {
    setQuestionIndex(0);
    setSelected(null);
    setFinished(false);
    setScore(0);
  }

  // Finished screen
  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-white">
        <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">

          <div className="text-6xl">
            🎉
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Practice complete
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Great job!
          </h1>

          <p className="mt-4 text-slate-400">
            You completed today&apos;s real-life practice.
          </p>

          {/* Score */}
          <div className="mx-auto mt-8 flex h-32 w-32 items-center justify-center rounded-full border-8 border-blue-500">
            <div>
              <p className="text-3xl font-bold">
                {score}/{questions.length}
              </p>

              <p className="text-xs text-slate-400">
                {percentage}% score
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <button
              type="button"
              onClick={restartPractice}
              className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-300 hover:bg-slate-800"
            >
              Try Again
            </button>

            <Link
              href="/dashboard"
              className="rounded-full bg-blue-500 px-7 py-3.5 font-semibold hover:bg-blue-400"
            >
              Back to Dashboard →
            </Link>

          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">

      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="flex items-center justify-between">

          <Link
            href="/dashboard"
            className="text-slate-400 transition hover:text-white"
          >
            ← Dashboard
          </Link>

          <p className="text-sm text-slate-500">
            {questionIndex + 1} / {questions.length}
          </p>

        </div>

        {/* Progress */}
        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-blue-500 transition-all duration-500"
            style={{
              width: `${((questionIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Situation */}
        <div className="mt-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Real-life situation
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            {question.situation}
          </h1>

        </div>

        {/* Conversation */}
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-7">

          <p className="text-sm text-slate-500">
            {question.speaker}
          </p>

          <p className="mt-3 text-xl font-medium leading-8">
            “{question.question}”
          </p>

        </div>

        {/* Answers */}
        <div className="mt-6 space-y-4">

          {question.options.map((option, index) => {

            const isSelected = selected === index;
            const isCorrect = index === question.correct;

            let style =
              "border-slate-800 bg-slate-900 hover:border-slate-600";

            if (selected !== null) {

              if (isCorrect) {
                style =
                  "border-green-500 bg-green-500/10";
              } else if (isSelected) {
                style =
                  "border-red-500 bg-red-500/10";
              } else {
                style =
                  "border-slate-800 bg-slate-900 opacity-60";
              }

            }

            return (
              <button
                key={option}
                type="button"
                onClick={() => handleAnswer(index)}
                disabled={selected !== null}
                className={`w-full rounded-2xl border p-5 text-left transition ${style}`}
              >

                <div className="flex items-center justify-between gap-4">

                  <span className="font-medium">
                    {option}
                  </span>

                  {selected !== null && isCorrect && (
                    <span className="text-xl text-green-400">
                      ✓
                    </span>
                  )}

                  {isSelected && !isCorrect && (
                    <span className="text-xl text-red-400">
                      ✕
                    </span>
                  )}

                </div>

              </button>
            );
          })}

        </div>

        {/* Feedback */}
        {selected !== null && (

          <div
            className={`mt-6 rounded-2xl border p-6 ${
              selected === question.correct
                ? "border-green-500/30 bg-green-500/10"
                : "border-orange-500/30 bg-orange-500/10"
            }`}
          >

            <p className="font-semibold">
              {selected === question.correct
                ? "✅ Excellent!"
                : "💡 Almost there!"}
            </p>

            <p className="mt-2 leading-7 text-slate-300">
              {question.explanation}
            </p>

          </div>

        )}

        {/* Next */}
        {selected !== null && (

          <button
            type="button"
            onClick={nextQuestion}
            className="mt-6 w-full rounded-full bg-blue-500 py-4 font-semibold transition hover:bg-blue-400"
          >
            {questionIndex === questions.length - 1
              ? "Finish Practice 🎉"
              : "Next Question →"}
          </button>

        )}

      </div>
    </main>
  );
}
