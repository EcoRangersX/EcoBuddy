const tempLevel = (value: number) => {
  if (value < 0) return 'cold';
  if (value >= 0 && value < 15) return 'cool';
  if (value >= 15 && value < 25) return 'moderate';
  if (value >= 25 && value < 35) return 'warm';
  if (value >= 35) return 'hot';
  return 'warm';
};

const windLevel = (value: number) => {
  if (value < 10) return 'low';
  if (value >= 10 && value < 20) return 'moderate';
  if (value >= 20 && value < 30) return 'high';
  if (value >= 30) return 'very high';
  return 'moderate';
};

const pollenLevel = (value: number) => {
  if (value < 20) return 'low';
  if (value >= 20 && value < 40) return 'moderate';
  if (value >= 40 && value < 60) return 'high';
  if (value >= 60) return 'very high';
  return 'moderate';
};

const uvIndexLevel = (value: number) => {
  if (value < 3) return 'low';
  if (value >= 3 && value < 6) return 'moderate';
  if (value >= 6 && value < 8) return 'high';
  if (value >= 8 && value < 11) return 'very high';
  if (value >= 11) return 'extreme';
  return 'moderate';
};

const humidityLevel = (value: number) => {
  if (value < 30) return 'low';
  if (value >= 30 && value < 60) return 'moderate';
  if (value >= 60) return 'high';
  return 'moderate';
};

const pressureLevel = (value: number) => {
  if (value < 1000) return 'low';
  if (value >= 1000 && value < 1010) return 'moderate';
  if (value >= 1010) return 'high';
  return 'moderate';
};

export {
  pollenLevel,
  windLevel,
  tempLevel,
  humidityLevel,
  pressureLevel,
  uvIndexLevel,
};
