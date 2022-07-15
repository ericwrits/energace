import _mock from './_mock';

// ----------------------------------------------------------------------

export const _testimonials = [...Array(6)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  role: _mock.role(index),
  avatar: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
  rating: 5,
  review: _mock.testimonies(index),
}));
