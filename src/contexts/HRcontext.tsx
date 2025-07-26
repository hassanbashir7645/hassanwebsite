// contexts/HRContext.tsx
import { createContext, useContext } from 'react';

const HRContext = createContext({
  employees: [],
  departments: [],
  tasks: [],
  recognitions: [],
  onboarding: [],
});

export const useHR = () => useContext(HRContext);
export default HRContext;
