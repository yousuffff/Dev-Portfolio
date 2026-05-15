import React from "react";
import {skills} from "../data/skills";

const SkillCard = () => {
  return (
    <section className="section" id="skills">
      <div className="sec-header">
        <div>
          <div className="sec-tag">What I know</div>
          <div className="sec-title">Skills & Tools</div>
        </div>
        <span className="sec-count">{skills.length} skills</span>
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <SkillCard key={s.name} s={s} i={i} />
        ))}
      </div>
    </section>
  );
};

export default SkillCard;
