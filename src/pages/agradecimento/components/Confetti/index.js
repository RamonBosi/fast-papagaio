import { useEffect } from "react";
import ConfettiGenerator from "confetti-js";
import confettiConfig from './confettiConfig.json'

export const Confetti = ({ className, inlineStyle }) => {

  useEffect(() => {
    const confetti = new ConfettiGenerator(confettiConfig);
    confetti.render();

    return () => confetti.clear();
  }, [])

  return <canvas id="confetti" className={className} style={inlineStyle} />
}