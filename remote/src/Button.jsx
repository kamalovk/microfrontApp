import { useState } from "react";

export const Button = () => {
  const [state, setState] = useState();
  return (
    <div>
      <button className="shared-btn" onClick={() => setState((s) => s + 1)}>
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
