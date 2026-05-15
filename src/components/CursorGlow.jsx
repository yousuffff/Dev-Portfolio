export default function CursorGlow() {
  const x = useSpring(-400, { stiffness: 55, damping: 16 });
  const y = useSpring(-400, { stiffness: 55, damping: 16 });
  useEffect(() => {
    const fn = (e) => {
      x.set(e.clientX - 280);
      y.set(e.clientY - 280);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return (
    <motion.div
      style={{
        x,
        y,
        position: "fixed",
        top: 0,
        left: 0,
        width: 560,
        height: 560,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,
        background:
          "radial-gradient(circle, var(--cursor-glow) 0%, transparent 65%)",
      }}
    />
  );
}
