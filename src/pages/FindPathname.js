import { useLocation } from "react-router-dom";

export const FindLocation = () => {
  const { pathname } = useLocation();
  return pathname
};
