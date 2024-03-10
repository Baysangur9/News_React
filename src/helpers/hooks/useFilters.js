import {useState} from "react";

export const useFilteres = (inialFilteres) => {
  const [filteres, setFilteres] = useState(inialFilteres);

  const changeFilteres = (key, value) => {
    setFilteres((prev) => {
      return {...prev, [key]: value};
    });
  };

  return {filteres, changeFilteres};
};
