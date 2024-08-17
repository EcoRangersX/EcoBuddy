export interface ChemicalElementProps {
  chemElement: string;
  value: number;
  bgColor: string;
}

export interface AqiData {
  aqi: string;
  city: string;
  'concentration-of-elements': ChemicalElementProps[];
}

export interface AiQuestions {
  questions: string[];
}

export interface QuizTitles {
  'quiz-titles': string[];
}

export interface EcoTipProps {
  title: string;
  description: string;
}

export interface EcoTips {
  'eco-tips': EcoTipProps[];
}

export interface ChemicalElementSlider {
  chemicalElementList: ChemicalElementProps[] | undefined;
}
