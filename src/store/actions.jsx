export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const SUM = 'SUM';
export const MEMORY_PLUS = 'MEMORY_PLUS';
export const MEMORY_R = 'MEMORY_R';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const TYPE_TO_SCREEN = 'TYPE_TO_SCREEN';

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const sum = () => {
  return { type: SUM };
};

export const memoryPlus = () => {
  return { type: MEMORY_PLUS };
};

export const memoryR = () => {
  return { type: MEMORY_R };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};

export const typeToScreen = (num) => {
  return { type: TYPE_TO_SCREEN, payload: Number(num) };
};
