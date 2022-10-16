import { useState, useEffect } from "react";
import { Card } from "../Card";
import "./AppPage.css";
import "./App.css";
import { Modal } from "../components/Modal";

const WebController = ({ onChange }) => {
  const [state, setState] = useState({
    pages: 1,
    languages: 1,
    modal1: false,
    modal2: false,
  });

  useEffect(() => {
    onChange(state);
  }, [onChange, state]);

  return (
    <>
      <div>
        <ul className="StyleWebPage">
          <li>
            Pages Number{" "}
            <button type="button" className="SumRestButtons" value={state.pages}
              onClick={() => setState((prev) => {
                  return {
                    ...prev,
                    pages: prev.pages + 1,
                  };
                })
              }
            >
              ➕
            </button>
            <span>{state.pages}</span>
            <button className="SumRestButtons" type="button" value={state.pages}
              onClick={() => setState((prev) => {
                  return {
                    ...prev,
                    pages: prev.pages > 1 ? prev.pages - 1 : 1,
                  };
                })
              }
            >
              ➖
            </button>
            <button className="WarningButtons" onClick={() => setState((prev) => {
                  return {...prev, modal1: true, }; })} > ⚠️ </button>{" "}
          </li>
          <li>
            Languages Number
            <button type="button" className="SumRestButtons" onClick={() => setState((prev) => {
                  return { ...prev, languages: prev.languages + 1, }; })} > ➕ </button>
            <span>
            {state.languages}
            </span>

            <button className="SumRestButtons" type="button" value={state.languages} onClick={() => setState((prev) => {
                  return {...prev, languages: prev.languages > 1 ? prev.languages - 1 : 1, }; })} > ➖ </button>

            <button className="WarningButtons" onClick={() => setState((prev) => { 
              return { ...prev, modal2: true, }; })}> ⚠️</button>
              
          </li>
        </ul>
      </div>
      {state.modal1 && (<Modal onClose={() => setState((prev) => {return {...prev, modal1: false,}; })}>
          This Component must point the pages number of your choice✅</Modal>)}

          {state.modal2 && (<Modal onClose={() => setState((prev) => {return {...prev, modal2: false,}; })}>
          This Component must point the languages number of your choice✅</Modal>)}
     
    </>
  );
};

export const AppPage = () => {
  const [total, setTotal] = useState(0);
  const [totalWeb, setTotalWeb] = useState(0);
  const [isWebInput, setWebInput] = useState(false);

  const handleWebPrice = ({ pages, languages }) => {
    const BASE_PRICE = 500;
    const PRICE_PER_PAGE = +pages > 1 ? 30 : 1;
    const PRICE_PER_LANGUAGE = +languages > 1 ? 30 : 1;
    let CALC_PRICE = 0;

    if (+pages > 1) CALC_PRICE += +pages < 0 ? 1 : pages * PRICE_PER_PAGE;
    if (+languages > 1)
      CALC_PRICE += +languages < 0 ? 1 : languages * PRICE_PER_LANGUAGE;

    const TOTAL = BASE_PRICE + CALC_PRICE;
    setTotalWeb(TOTAL);
  };

  useEffect(() => {
    if (!isWebInput && totalWeb) {
      setTotalWeb(0);
    }
  }, [isWebInput, totalWeb]);

  return (
    <>
      <Card>
        <ul className="card_options">
          <p className="card_app">What budget do you want to consult?</p>
          <li>
            <input
              type={"checkbox"}
              id="web"
              onInput={({ target }) => setWebInput(target.checked)}
            />
            <label htmlFor="web">💻Webpage (500€)</label>
            {isWebInput && <WebController onChange={handleWebPrice} />}
          </li>
          <li>
            <input
              type={"checkbox"}
              id="seo"
              onInput={({ target }) =>
                setTotal((prevValue) => (target.checked ? prevValue + 300 : 0))
              }
            />
            <label htmlFor="seo">🔍SEO consultancy(300€)</label>
          </li>

          <li>
            <input
              type={"checkbox"}
              id="ads"
              onInput={({ target }) =>
                setTotal((prevValue) => (target.checked ? prevValue + 200 : 0))
              }
            />
            <label htmlFor="ads">📢Google Ads Campaign (200€)</label>
          </li>

          <p>Precio: {total + totalWeb}€ 💶</p>
        </ul>
      </Card>
    </>
  );
};
