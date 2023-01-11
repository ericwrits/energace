import _mock from './_mock';

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'image001',
  'image010',
  'image011',
  'image009',
  'images',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `https://mt.zhavialayout.net/images/${brand}.png`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `https://mt.zhavialayout.net/images/${brand}.png`,
}));
