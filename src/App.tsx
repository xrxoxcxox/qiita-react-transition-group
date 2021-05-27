import { useState } from "react";
import "./App.css";
import { css, keyframes } from "@emotion/react";
import { CSSTransition } from "react-transition-group";

function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((currentState) => !currentState);

  const [reactTransitionGroupOpen, setReactTransitionGroupOpen] =
    useState(false);
  const toggleReactTransitionGroupOpen = () =>
    setReactTransitionGroupOpen((currentState) => !currentState);
  return (
    <div className="App">
      <p css={title}>CSS Only</p>
      {open && (
        <div css={window} className={open ? "open" : "close"}>
          <img
            src="https://picsum.photos/360/240"
            alt=""
            css={image}
            width="360"
            height="240"
          />
        </div>
      )}
      <button css={button} onClick={toggleOpen}>
        {open ? "Close" : "Open"}
      </button>
      <p css={title}>React Transition Group</p>
      <CSSTransition
        in={reactTransitionGroupOpen}
        timeout={200}
        classNames="react-transition-group"
        unmountOnExit
      >
        <div css={reactTransitionGroupWindow}>
          <img
            src="https://picsum.photos/360/240"
            alt=""
            css={image}
            width="360"
            height="240"
          />
        </div>
      </CSSTransition>
      <button css={button} onClick={toggleReactTransitionGroupOpen}>
        {reactTransitionGroupOpen ? "Close" : "Open"}
      </button>
    </div>
  );
}

const title = css`
  align-self: flex-end;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
`;

const windowOpenKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const windowCloseKeyframes = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20%);
  }
`;

const window = css`
  align-self: center;
  background-color: #fff;
  border-radius: 8px;
  color: #212121;
  font-size: 40px;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  justify-self: center;
  opacity: 0;
  padding: 20px;
  transform: translateY(0);
  transition-duration: 300ms;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  width: 400px;
  &.open {
    animation: ${windowOpenKeyframes} ease 300ms both;
  }
  &.close {
    animation: ${windowCloseKeyframes} ease 300ms both;
  }
`;

const reactTransitionGroupWindow = css`
  align-self: center;
  background-color: #fff;
  border-radius: 8px;
  color: #212121;
  font-size: 40px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  justify-self: center;
  padding: 20px;
  width: 400px;
  &.react-transition-group-enter {
    opacity: 0;
    transform: translateY(50%);
  }
  &.react-transition-group-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 300ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  &.react-transition-group-exit {
    opacity: 1;
    transform: translateY(0);
  }
  &.react-transition-group-exit-active {
    opacity: 0;
    transform: translateY(-20%);
    transition-duration: 150ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }
`;

const image = css`
  background-color: #eee;
  border-radius: 4px;
  display: block;
`;

const button = css`
  align-self: flex-start;
  background-color: #61dafb;
  border: none;
  border-radius: 8px;
  color: #212121;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  grid-row: 3 / 4;
  justify-self: center;
  padding: 20px 40px;
  text-decoration: none;
  width: 200px;
`;

export default App;
