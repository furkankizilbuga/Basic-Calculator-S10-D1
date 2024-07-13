import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  typeToScreen,
  changeOperation,
  clearDisplay,
  memoryClear,
  memoryPlus,
  memoryR,
  sum,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numHandler = (evt) => {
    dispatch(typeToScreen(evt.target.value));
  };

  const operationHandler = (evt) => {
    dispatch(changeOperation(evt.target.value));
  };

  const clearHandler = () => {
    dispatch(clearDisplay());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton
                onClick={() => {
                  dispatch(memoryPlus());
                }}
                value={'M+'}
              />
              <CalcButton
                onClick={() => {
                  dispatch(memoryR());
                }}
                value={'MR'}
              />
              <CalcButton
                onClick={() => {
                  dispatch(memoryClear());
                }}
                value={'MC'}
              />
            </div>
            <div className="row">
              <CalcButton onClick={numHandler} value={1} />
              <CalcButton onClick={numHandler} value={2} />
              <CalcButton onClick={numHandler} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={numHandler} value={4} />
              <CalcButton onClick={numHandler} value={5} />
              <CalcButton onClick={numHandler} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={numHandler} value={7} />
              <CalcButton onClick={numHandler} value={8} />
              <CalcButton onClick={numHandler} value={9} />
            </div>
            <div className="row">
              <CalcButton onClick={operationHandler} value={'+'} />
              <CalcButton onClick={numHandler} value={0} />
              <CalcButton onClick={operationHandler} value={'-'} />
            </div>
            <div className="row">
              <CalcButton onClick={operationHandler} value={'*'} />
              <CalcButton onClick={operationHandler} value={'/'} />
              <CalcButton onClick={clearHandler} value={'CE'} />
            </div>

            <div className="row eq_button">
              <CalcButton
                onClick={() => {
                  dispatch(sum());
                }}
                value={'='}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
