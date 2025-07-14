import React, { useState } from "react";
import processBlockData from "../../data/processBlockData.js";
import ProcessBlock from "./ProcessBlock";

const ProcessGrid = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="w-full flex flex-col items-center mt-5 md:mt-10">
      {processBlockData.map((item, idx) => (
        <ProcessBlock
          key={item.id}
          number={item.id}
          title={item.title}
          description={item.description}
          expanded={expanded === idx}
          onClick={() => setExpanded(expanded === idx ? null : idx)}
        />
      ))}
    </div>
  );
};

export default ProcessGrid;
