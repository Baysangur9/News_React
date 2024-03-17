import {useState} from "react";
import { IFilteres } from "../../interfaces";

export const useFilteres = (inialFilteres: IFilteres) => {
  const [filteres, setFilteres] = useState<IFilteres>(inialFilteres);

  const changeFilteres = (key:string, value: string | number | null) => {
    setFilteres((prev) => {
      return {...prev, [key]: value};
    });
  };

  return {filteres, changeFilteres};
};
