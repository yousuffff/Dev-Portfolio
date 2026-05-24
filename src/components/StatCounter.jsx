import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function StatCounter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = target / 38;
    const t = setInterval(() => {
      v = Math.min(v + step, target);
      setVal(Math.floor(v));
      if (v >= target) clearInterval(t);
    }, 28);
    return () => clearInterval(t);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {val}
      <em>{suffix}</em>
    </span>
  );
}

export default StatCounter;
