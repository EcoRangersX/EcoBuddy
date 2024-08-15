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

const AqiLevelColors = {
  good: '#4bce67',
  moderate: '#2abb49',
  sensitiveGroups: '#22a03d',
  unhealthy: '#1f8435',
  veryUnhealthy: '#216e32',
  hazardous: '#164b21',
};

const tempColors: { [status: string]: string } = {
  cold: '#03c13d', // Dark Green
  moderate: '#56cade', // Blue
  warm: '#ff7f00', // Orange
  hot: '#ff0000', // Red
  'very hot': '#b30000', // Dark Red
};

const windColors: { [status: string]: string } = {
  calm: '#2abb49', // Green
  breezy: '#56cade', // Blue
  windy: '#ff7f00', // Orange
  stormy: '#ff0000', // Red
};

const pollenColors: { [status: string]: string } = {
  low: '#2abb49', // Green
  moderate: '#56cade', // Blue
  high: '#ff7f00', // Orange
  'very high': '#ff0000', // Red
};

const uvIndexColors: { [status: string]: string } = {
  low: '#2abb49', // Green
  moderate: '#56cade', // Blue
  high: '#ff7f00', // Orange
  'very high': '#ff0000', // Red
  extreme: '#b30000', // Dark Red
};

const humidityColors: { [status: string]: string } = {
  dry: '#2abb49', // Green
  comfortable: '#56cade', // Blue
  humid: '#ff7f00', // Orange
  'very humid': '#ff0000', // Red
};

const pressureColors: { [status: string]: string } = {
  low: '#2abb49', // Green
  normal: '#56cade', // Blue
  high: '#ff7f00', // Orange
  'very high': '#b30000', // Dark Red
};

export {
  Colors,
  tempColors,
  windColors,
  pollenColors,
  uvIndexColors,
  humidityColors,
  pressureColors,
  AqiLevelColors
};
