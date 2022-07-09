import { useQuery } from "react-query";
import { getGuitars } from "./queryFunctions";

export const useGuitars = () => {
  return useQuery("guitars", getGuitars());
};
