import confetti from "canvas-confetti";

export const LikedButtonEffect = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      x: x / window.innerWidth,
      y: y / window.innerHeight,
    },
  });
};
