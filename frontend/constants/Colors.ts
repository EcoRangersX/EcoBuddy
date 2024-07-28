/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#3366ff';

const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
};

const basicWeatherElementColors: { [status: string]: string } = {
  low: '#2abb49',
  moderate: '#f6b930',
  high: '#ff7f00',
};

const tempColors: { [status: string]: string } = {
  cold: '#03c13d',
  cool: '#56cade',
  moderate: '#f6b930',
  warm: '#ff7f00',
  hot: '#ff0000',
};

const windColors: { [status: string]: string } = {
  ...basicWeatherElementColors,
  'very high': '#ff0000',
};

const pollenColors: { [status: string]: string } = {
  ...basicWeatherElementColors,
  'very high': '#ff0000',
};

const uvIndexColors: { [status: string]: string } = {
  ...basicWeatherElementColors,
  'very high': '#ff0000',
  extreme: '#ff0000',
};

const humidityColors: { [status: string]: string } = {
  ...basicWeatherElementColors,
};

const pressureColors: { [status: string]: string } = {
  ...basicWeatherElementColors,
};

export {
  Colors,
  tempColors,
  windColors,
  pollenColors,
  uvIndexColors,
  humidityColors,
  pressureColors,
};
