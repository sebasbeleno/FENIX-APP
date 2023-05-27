import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

// 3 math questions, with 3 options each and 1 correct answer
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

interface Answer {
  question: number;
  answer: string;
}

const Quiz = () => {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const router = useRouter();
  const { id } = router.query;

  const onAnswer = (question: any, answer: any) => {
    // prevent duplicate answers
    const index = answers.findIndex((a) => a.question === question);
    if (index !== -1) {
      answers.splice(index, 1);
    }

    setAnswers([...answers, { question, answer }]);
  };

  const renderQuestions = () => {
    return questions.map((question, index) => {
      return (
        <div key={index} className="w-full border-2 my-4 p-4 rounded-md	">
          <h1 className="text-2xl mb-4">{question.question}</h1>
          {question.options.map((option, index) => {
            return (
              <div className="flex items-center mb-4" key={index}>
                <input
                  id={question.id + "-option-" + index}
                  type="radio"
                  name={question.id.toString()}
                  value={option.text}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  onClick={() => onAnswer(question.id, option.text)}
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

  const onSend = () => {
    // calculate grade
    const correctAnswers = questions.filter((question) => {
        const answer = answers.find((a) => a.question === question.id);
        return answer?.answer === question.options.find((o) => o.correct)?.text;
      }).length,
      rate = (correctAnswers / questions.length) * 5;

    // send to backend

    router.push("/quiz/result");
  };

  return (
    <Layout>
      <fieldset className="flex flex-col w-full h-full py-20">
        <h1 className="text-2xl font-bold">Taller CALCULO 1</h1>
        <p>ESTUDIANTE: Sebastian</p>

        {renderQuestions()}

        <button
          onClick={onSend}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </fieldset>
    </Layout>
  );
};

export default Quiz;
