import React, { useState } from "react";

const CheckboxMultiple = () => {
  const skills = [
    {
      id: 1,
      name: "Javascript",
    },
    {
      id: 2,
      name: "React",
    },
    {
      id: 3,
      name: "Vue",
    },
    {
      id: 4,
      name: "Angular",
    },
    {
      id: 5,
      name: "TypeScript",
    },
    {
      id: 6,
      name: "Node.js",
    },
    {
      id: 7,
      name: "PHP",
    },
    {
      id: 8,
      name: "Laravel",
    },
    {
      id: 9,
      name: "WordPress",
    },
    {
      id: 10,
      name: "CSS/SASS",
    },
  ];
  
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.value);
  };

  return (
    <div>
      <input
        type="checkbox"
        value={skills}
        checked={isChecked}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default CheckboxMultiple;
