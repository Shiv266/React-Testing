import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

function Skills({ skills }: { skills: Array<string> }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="flex justify-center mt-8">
      <ul className="list-disc py-4 leading-8">
        {skills.map((skill) => (
          <li
            className={`${theme?.isLightmode ? "text-gray-800" : "text-white"}`}
            key={skill}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
