export interface ChemicalElementProps {
  chemElement: string;
  value: number;
  bgColor: string;
}

export interface AirQualityData {
  aqi: string;
  city: string;
  "concentration-of-elements": ChemicalElementProps[];
}

export interface ChemicalElementSlider {
    chemicalElementList: ChemicalElementProps[] | undefined;
}
