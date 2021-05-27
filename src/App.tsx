import { useState } from "react";
import "./App.css";
import { css } from "@emotion/react";

function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((currentState) => !currentState);
  return (
    <div className="App">
      {open && (
        <div css={window}>
          <img
            src="https://picsum.photos/360/240"
            alt=""
            css={image}
            width="360"
            height="240"
          />
        </div>
      )}
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
`;

const image = css`
  display: block;
`;

export default App;
