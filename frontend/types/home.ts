export interface ChemicalElementProps {
  chemElement: string;
  value: number;
  bgColor: string;
}

export interface AqiData {
  aqi: string;
  city: string;
  "concentration-of-elements": ChemicalElementProps[];
}

export interface AiQuestions {
  questions: string[];
}

export interface ChemicalElementSlider {
    chemicalElementList: ChemicalElementProps[] | undefined;
}
