import React from "react";

import { deploy } from "../redux/actions";

const LaunchButton = ({ deploy }) => <button onClick={ ()=> deploy() }>Launch the rocket!</button>;

export default LaunchButton;
