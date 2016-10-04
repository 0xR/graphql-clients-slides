import 'prismjs';
import 'prismjs/components/prism-jsx';
import "prismjs/themes/prism-solarizedlight.css";

import React from "react";
import { render } from "react-dom";

import Presentation from "./presentation";

render(<Presentation/>, document.getElementById("root"));
