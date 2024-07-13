import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  SUM,
  MEMORY_PLUS,
  MEMORY_CLEAR,
  MEMORY_R,
  TYPE_TO_SCREEN,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temp: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_OPERATION:
      return {
        ...state,
        total: 0,
        operation: action.payload,
        temp: state.total,
      };

    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0,
      };

    case SUM:
      return {
        ...state,
        total: calculateResult(
          Number(state.temp),
          Number(state.total),
          state.operation
        ),
      };

    case MEMORY_PLUS:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_R:
      return {
        ...state,
        total: state.memory,
      };

    case MEMORY_CLEAR:
      return {
        ...state,
        memory: 0,
      };
    case TYPE_TO_SCREEN:
      return {
        ...state,
        total:
          state.total === 0
            ? action.payload
            : state.total.toString() + action.payload.toString(),
      };

    default:
      return state;
  }
};

export default reducer;
