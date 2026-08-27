"use client";

import { useState } from "react";
import Link from "next/link";

const article = `Technology has changed the way people communicate.

In the past, people often communicated through letters or expensive phone calls. Today, we can send messages instantly using smartphones and computers.

Social media has also made it easier to stay connected with friends and family around the world. People can share photos, videos, and ideas within seconds.

However, technology also has some disadvantages. People sometimes spend too much time on their phones and have fewer face-to-face conversations.

For this reason, it is important to use technology wisely and find a healthy balance between online and real-life communication.`;

const questions = [
  {
    question: "How did people often communicate in the past?",
    options: [
      "Through social media",
      "Through letters and phone calls",
      "Through video games",
      "Through smartphones",
    ],
    correct: 1,
  },
  {
    question: "What can people share using social media?",
    options: [
      "Only letters",
      "Only phone calls",
      "Photos, videos, and ideas",
      "Only books",
    ],
    correct: 2,
  },
  {
    question: "What is one disadvantage of technology?",
    options: [
      "People communicate faster",
      "People can stay connected",
      "People may spend too much time on their phones",
      "People can share photos",
    ],
    correct: 2,
  },
  {
    question: "What does the article recommend?",
    options: [
      "Stop using technology completely",
      "Use technology wisely and find a healthy balance",
      "Use social media all day",
      "Only communicate online",
    ],
    correct: 1,
  },
];

export default function Reading() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

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

  function restartReading() {
    setQuestionIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-white">
        <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl">

          <div className="text-6xl">
            📚
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Reading complete
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Great reading! 🎉
          </h1>

          <p className="mt-4 text-slate-400">
            You completed the reading exercise.
          </p>

          <div className="mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-full border-8 border-blue-500">
            <div>
              <p className="text-3xl font-bold">
                {score}/{questions.length}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {percentage}% score
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <button
              type="button"
              onClick={restartReading}
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
            className="text-slate-400 hover:text-white"
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

        {/* Title */}
        <div className="mt-12">

          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400">
            B1 • Reading
          </span>

          <h1 className="mt-4 text-4xl font-bold">
            Technology & Communication
          </h1>

          <p className="mt-3 text-slate-400">
            Read the article carefully and answer the questions.
          </p>

        </div>

        {/* Article */}
        <article className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-7">

          <h2 className="text-2xl font-bold">
            How Technology Changed Communication
          </h2>

          <div className="mt-6 whitespace-pre-line text-lg leading-9 text-slate-300">
            {article}
          </div>

        </article>

        {/* Question */}
        <section className="mt-10">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Question
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            {question.question}
          </h2>

        </section>

        {/* Options */}
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

          <div className="mt-6 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">

            <p className="font-semibold">
              {selected === question.correct
                ? "✅ Correct!"
                : "💡 Keep practicing!"}
            </p>

            <p className="mt-2 text-slate-300">
              {selected === question.correct
                ? "Excellent! You understood the text."
                : `The correct answer is "${question.options[question.correct]}".`}
            </p>

          </div>

        )}

        {/* Next */}
        {selected !== null && (

          <button
            type="button"
            onClick={nextQuestion}
            className="mt-6 w-full rounded-full bg-blue-500 py-4 font-semibold hover:bg-blue-400"
          >
            {questionIndex === questions.length - 1
              ? "Finish Reading 🎉"
              : "Next Question →"}
          </button>

        )}

      </div>
    </main>
  );
}
