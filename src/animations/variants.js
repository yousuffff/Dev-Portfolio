export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};
export const slideIn = {
  hidden: { opacity: 0, x: -18 },
  show: (d = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.52, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};
