export const COLORS = {
  primary: '#2F7E79',
  secondary: '#FFC107',
  background: '#c6d4d2ff',
  textPrimary: '#212121',
  textSecondary: '#757575',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#9E9E9E',
};
const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  h1: 32,
  h2: 24,
  h3: 18,
};
const FONTS = {
  h1: { fontSize: SIZES.h1, fontWeight: '700' },
  h2: { fontSize: SIZES.h2, fontWeight: '600' },
  h3: { fontSize: SIZES.h3, fontWeight: '500' },
  body: { fontSize: SIZES.font, fontWeight: '400' },
};
const IMAGES = {
  bottomTab: require('../src/assets/tab-bar-bg.png'),
};

export default { COLORS, SIZES, FONTS, IMAGES };
