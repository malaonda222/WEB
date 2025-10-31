import React, { use, useEffect, useState } from "react";

const CheckboxMultiple = () => {
  const maxSelection = 4;
  const skills = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "React" },
    { id: 3, name: "Vue" },
    { id: 4, name: "Angular"},
    { id: 5, name: "TypeScript" },
    { id: 6, name: "Node.js" },
    { id: 7, name: "PHP" },
    { id: 8, name: "Laravel" },
    { id: 9, name: "WordPress" },
    { id: 10, name: "CSS/SASS" }
  ]

  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    if (selectedSkills.length > maxSelection) {
      alert("Hai superato il limite massimo di skills!")
    }
  }, [selectedSkills]);

  const handleChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    }else{
      if (selectedSkills.length < maxSelection) {
        setSelectedSkills([...selectedSkills, skill]);
      }
    }
  };

  const handleReset = () => {
    setSelectedSkills([])
  }

  return (
    <div>
      <h2>Seleziona le tue skill (max {maxSelection})</h2>
      {skills.map((skill) => (
          <div key= {skill.id}
          style={{
            padding: "5px",
            margin: "2px 0",
            borderRadius: "4px",
            backgroundColor: selectedSkills.includes(skill.name) ? "red" : "transparent"
          }}
          >
            <label>
              <input
              type="checkbox"
              checked={selectedSkills.includes(skill.name)}
              onChange={() => handleChange(skill.name)}
            />
            {skill.name}
          </label>
          </div>
      ))};

      {/*Counter con colore dinamico*/}
      <p style={{color: selectedSkills.length > maxSelection ? 'red' : 'black'}}>
        Selezionate: {selectedSkills.length}/{skills.length}
      </p>

      {/*Riepilogo delle skills selezionate*/}
      {selectedSkills.length > 0 && (
        <div>
          <h2>Skills selezionate: </h2>
          <ul>
            {selectedSkills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/*Bottone per resettare*/}
      <button onClick={handleReset}>Reset</button>
      </div> 
  );
};
      

export default CheckboxMultiple;
