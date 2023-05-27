import Layout from "@/components/Layout";
import React from "react";

const answers = [
  {
    question: 1,
    answer: "4",
  },
  {
    question: 2,
    answer: "4",
  },
  {
    question: 3,
    answer: "4",
  },
  {
    question: 4,
    answer: "22",
  },
  {
    question: 5,
    answer: "22",
  },
];

const questions = [
  {
    id: 1,
    question: "2 + 2 = ?",
    options: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    options: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    id: 3,
    question: "2 + 2 = ?",
    options: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    id: 4,
    question: "2 + 2 = ?",
    options: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    id: 5,
    question: "2 + 2 = ?",
    options: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "5", correct: false },
    ],
  },
];

const Result = () => {
  const renderQuestions = () => {
    return questions.map((question, index) => {
      return (
        <div key={index} className="w-full border-2 my-4 p-4 rounded-md	">
          <h1 className="text-2xl mb-4">{question.question}</h1>
          {question.options.map((option, index) => {
            const checkAnswer =
              answers.find((answer) => answer.question === question.id)
                ?.answer === option.text;

            return (
              <div className="flex items-center mb-4" key={index}>
                <input
                  id={question.id + "-option-" + index}
                  type="radio"
                  name={question.id.toString()}
                  value={option.text}
                  disabled
                  checked={checkAnswer}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={question.id + "-option-" + index}
                  className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {option.text}
                </label>
              </div>
            );
          })}
        </div>
      );
    });
  };

  const correctAnswers = questions.filter((question) => {
      const answer = answers.find((a) => a.question === question.id);
      return answer?.answer === question.options.find((o) => o.correct)?.text;
    }).length,
    rate = (correctAnswers / questions.length) * 5;

  return (
    <Layout>
      <div className="flex flex-col w-full h-full">
        <h1 className="text-2xl font-bold">Taller Calculo I</h1>
        <h1 className="text-xl ">Nota final</h1>
        <h1 className="text-sm font-bold">{rate} / 5</h1>

        <div>{renderQuestions()}</div>
      </div>
    </Layout>
  );
};

export default Result;
