import { Link } from "react-router-dom";

import { Card } from "../Card";

import "./App.css";

export function App() {
  return (
    <Card>
      <div className="card_title">BUDGET APP💰</div>
      <div className="card_secondtitle">
        {" "}
        Every time you'd like to set an estimate budget for you digital needs there are different factors that come into the picture. Here you could calculate your Digital Marketing budget
        (Webpage, SEO consultancy and Google ads){" "}
      </div>
      <p className="card_p">
        {" "}
        Please press the button to calculate your final product according to your needs
      </p>
      <Link to={"/MyApp"} className="card_button">
        Calculate Budget
      </Link>
    </Card>
  );
}
