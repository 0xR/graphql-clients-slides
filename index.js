import "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-solarizedlight.css";
import "./assets/prism-override.css";
import "./assets/google-fonts.css";

import React from "react";
import { render } from "react-dom";

import Presentation from "./presentation";

render(<Presentation/>, document.getElementById("root"));
