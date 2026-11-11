import React, { useState, useEffect } from 'react';
import { READINESS_QUIZ_QUESTIONS } from '../data/quizData';
import { X, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, Award } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(READINESS_QUIZ_QUESTIONS.length).fill(-1));
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentQ = READINESS_QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currentQuestionIndex < READINESS_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers(Array(READINESS_QUIZ_QUESTIONS.length).fill(-1));
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  // Calculate final score
  const totalScore = selectedAnswers.reduce((sum, optIdx, qIdx) => {
    if (optIdx === -1) return sum;
    return sum + READINESS_QUIZ_QUESTIONS[qIdx].options[optIdx].score;
  }, 0);

  const getResultFeedback = (score: number) => {
    if (score >= 90) {
      return {
        grade: 'A+ (준비 완료)',
        title: '책임감 넘치는 최고의 예비 견주입니다!',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        advice: '가족과의 충분한 소통, 주거 환경의 안전성, 경제적 지속 가능성까지 완벽하게 고려하셨습니다. 평생을 함께할 새 가족을 맞이하셔도 좋습니다. 상업적 펫샵 구매 대신 유기견 입양(포인핸드 등)도 적극적으로 검토해 보세요!'
      };
    } else if (score >= 70) {
      return {
        grade: 'B (양호한 자격)',
        title: '따뜻한 마음과 충분한 잠재력을 갖추셨습니다.',
        color: 'text-amber-700 bg-amber-50 border-amber-200',
        advice: '반려견을 키울 기본적인 여건은 갖추셨으나, 가족 중 알레르기 사전 검사나 비상 의료비 저축 계획, 홀로 두는 시간의 분담에 대해 1~2가지 보완이 필요합니다. 체크리스트를 다시 한번 확인해 보세요.'
      };
    } else if (score >= 50) {
      return {
        grade: 'C (신중한 재점검 필요)',
        title: '아직은 조금 더 준비와 대화가 필요합니다.',
        color: 'text-orange-700 bg-orange-50 border-orange-200',
        advice: '귀여움에 이끌린 충동적인 입양이 될 우려가 있습니다. 반려견이 하루 8시간 이상 혼자 있거나, 가족의 동의가 불명확하다면 분리불안과 파양으로 이어지기 쉽습니다. 충분한 환경 개선 후 다시 도전하세요.'
      };
    } else {
      return {
        grade: 'D (입양 재검토 권고)',
        title: '지금 당장의 반려견 입양은 권장하지 않습니다.',
        color: 'text-rose-700 bg-rose-50 border-rose-200',
        advice: '현재 생활 패턴이나 경제적·주거 여건상 강아지를 온전히 책임지기 어려운 상태입니다. 강아지에게 큰 상처를 주기보다, 유기견 보호소 주말 산책 봉사활동이나 펫시터 경험을 먼저 쌓아보시길 진심으로 권장합니다.'
      };
    }
  };

  const feedback = getResultFeedback(totalScore);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/65 backdrop-blur-xs">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {!isFinished ? (
          <div>
            {/* Header & Progress */}
            <div className="pr-8 mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>견주 준비도 10문항 자가진단</span>
              </div>
              <h2 className="text-xl font-extrabold text-neutral-900 mt-1 leading-snug">
                Q{currentQuestionIndex + 1}. {currentQ.question}
              </h2>

              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-600 transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / READINESS_QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-neutral-500 tabular-nums">
                  {currentQuestionIndex + 1} / {READINESS_QUIZ_QUESTIONS.length}
                </span>
              </div>
            </div>

            {/* Options List */}
            <div className="space-y-3 my-6">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between text-xs sm:text-sm ${
                      isSelected
                        ? 'bg-amber-50/80 border-amber-400 font-bold text-neutral-900 shadow-xs'
                        : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300'
                    }`}
                  >
                    <span>{option.text}</span>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                      isSelected ? 'border-amber-600 bg-amber-600' : 'border-neutral-300'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Question Explanation Note */}
            <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 leading-relaxed mb-6">
              <span className="font-bold text-neutral-800">문항 취지:</span> {currentQ.explanation}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-900 disabled:opacity-40 disabled:hover:text-neutral-600 cursor-pointer"
              >
                이전 문항
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestionIndex] === -1}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-amber-600 rounded-xl hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
              >
                <span>{currentQuestionIndex === READINESS_QUIZ_QUESTIONS.length - 1 ? '결과 분석 보기' : '다음 문항'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Finished Result View */
          <div className="text-center py-2 space-y-6">
            <div className="inline-flex p-4 rounded-full bg-amber-100 text-amber-700 mb-1">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                진단 결과 리포트
              </span>
              <h2 className="text-2xl font-extrabold text-neutral-900 mt-1">
                당신의 반려 준비 점수: <span className="text-amber-600 tabular-nums">{totalScore}점</span> / 100점
              </h2>
            </div>

            {/* Feedback Box */}
            <div className={`p-6 rounded-2xl border text-left space-y-2 ${feedback.color}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-white/70 shadow-2xs">
                  {feedback.grade}
                </span>
              </div>
              <h3 className="text-base font-bold">
                {feedback.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                {feedback.advice}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleRestart}
                className="w-full sm:flex-1 py-3 bg-neutral-100 text-neutral-700 hover:bg-neutral-200 rounded-xl font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                테스트 다시 하기
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:flex-1 py-3 bg-neutral-900 text-white hover:bg-neutral-800 rounded-xl font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                가이드 계속 둘러보기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
