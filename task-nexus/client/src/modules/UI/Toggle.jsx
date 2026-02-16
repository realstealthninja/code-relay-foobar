import { useEffect, useState } from "react";

import { Sun } from "lucide-react";

function Toggle() {
  const [darkmode, setDarkmode] = useState(false);

  const theme = localStorage.getItem("theme");
  if (theme) {
    if (theme == "theme-dark") {
      setDarkmode(true);
    } else {
      setDarkmode(false);
    }
  }

  const setTheme = (theme) => {
    if (theme) {
      setDarkmode(true);
      localStorage.setItem("theme", "theme-dark");
    } else {
      setDarkmode(false);
      localStorage.setItem("theme", "theme-light");
    }
  };

  const toggle = () => {
    if (darkmode) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };
  return (
    <button class="darkmode" onClick={() => toggle()}>
      <Sun />
    </button>
  );
}

export default Toggle;
