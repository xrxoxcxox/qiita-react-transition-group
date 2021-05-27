import { useState } from "react";
import "./App.css";
import { css } from "@emotion/react";
import { CSSTransition } from "react-transition-group";

function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((currentState) => !currentState);
  return (
    <div className="App">
      <CSSTransition in={open} timeout={200} classNames="my-node" unmountOnExit>
        <div css={window}>
          <img
            src="https://picsum.photos/360/240"
            alt=""
            css={image}
            width="360"
            height="240"
          />
        </div>
      </CSSTransition>
      <button css={appLink} onClick={toggleOpen}>
        {open ? "Close" : "Open"}
      </button>
    </div>
  );
}

const appLink = css`
  align-self: flex-start;
  background-color: #61dafb;
  border: none;
  border-radius: 8px;
  color: #212121;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  grid-row: 2 / 3;
  justify-self: center;
  padding: 20px 40px;
  text-decoration: none;
  width: 200px;
`;

const window = css`
  align-self: center;
  background-color: #fff;
  border-radius: 8px;
  color: #212121;
  font-size: 40px;
  justify-self: center;
  padding: 20px;
  width: 400px;
  &.my-node-enter {
    opacity: 0;
    transform: translateY(50%);
  }
  &.my-node-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition-duration: 300ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  &.my-node-exit {
    opacity: 1;
    transform: translateY(0);
  }
  &.my-node-exit-active {
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

export default App;
