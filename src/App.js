import "./App.css";

export function App() {
  return (
    <div className="App">
      <div className="card_body">
        <div className="card_title">BUDGET APP</div>
        <div className="card_secondtitle">
          {" "}
          With this app you can calculate your Digital Marketing budget
           (websitecreation, SEO and SEM){" "}
        </div>
        <p className="card_p">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vivamus in
          lorem eu ante feugiat rhoncus. Suspendisse in ligula urna. Aliquam
          vulputate orci lacus, in pulvinar purus fermentum quis. In sed velit
          at sem molestie luctus quis egestas nisl.Donec molestie massa sit amet
          lacus eleifend, sit amet varius felis ullamcorper. Morbi urna ante,
          condimentum at est et, rhoncus feugiat metus.
        </p>
        <button className="card_button"> Calculate Budget</button>
      </div>
    </div>
  );
}
