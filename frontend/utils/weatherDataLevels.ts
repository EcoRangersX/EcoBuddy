const tempLevel = (value: number) => {
  if (value < 0) return 'cold';
  else if (value >= 0 && value < 15) return 'moderate';
  else if (value >= 15 && value < 25) return 'warm';
  else if (value >= 25 && value < 35) return 'hot';
  else if (value >= 35) return 'very hot';
  return 'warm';
};

const windLevel = (value: number) => {
  if (value < 15) return 'calm';
  else if (value >= 15 && value < 30) return 'breezy';
  else if (value >= 20 && value < 30) return 'windy';
  else if (value >= 30) return 'stormy';
  return 'moderate';
};

const pollenLevel = (value: number) => {
  if (value < 50) return 'low';
  else if (value >= 50 && value < 150) return 'moderate';
  else if (value >= 150 && value < 500) return 'high';
  else if (value >= 500) return 'very high';
  return 'moderate';
};

const uvIndexLevel = (value: number) => {
  if (value < 3) return 'low';
  else if (value >= 3 && value < 6) return 'moderate';
  else if (value >= 6 && value < 8) return 'high';
  else if (value >= 8 && value < 11) return 'very high';
  else if (value >= 11) return 'extreme';
  return 'moderate';
};

const humidityLevel = (value: number) => {
  if (value < 30) return 'dry';
  else if (value >= 30 && value < 60) return 'comfortable';
  else if (value >= 60 && value < 80) return 'humid';
  else if (value >= 80) return 'very humid';
  return 'moderate';
};

const pressureLevel = (value: number) => {
  if (value < 1000) return 'low';
  else if (value >= 1000 && value < 1020) return 'normal';
  else if (value >= 1020 && value < 1030) return 'high';
  else if (value >= 1030) return 'very high';
  return 'normal';
};

export {
  pollenLevel,
  windLevel,
  tempLevel,
  humidityLevel,
  pressureLevel,
  uvIndexLevel,
};
