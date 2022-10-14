import { useState, useEffect } from "react";
import { Card } from "../Card";
import "./AppPage.css";
import "./App.css";

const WebController = ({ onChange }) => {
  const [state, setState] = useState({
    pages: 1,
    languages: 1,
  });

  const handleChange = ({ target }) => {
    setState((prevState) => {return {
        ...prevState,
        [target.name]: target.value,
      };
    });
  };

  useEffect(() => {
    onChange(state);
  }, [state]);

  return (
    <div>
    <ul className="StyleWebPage">
    <li>Pages Number <button className="SumRestButtons" type={"number"} name="pages" min={1} value={state.pages} onChange={handleChange}>
    ➕
    </button><button className="SumRestButtons">
    ➖
    </button>
    

    <button className="WarningButtons">⚠️</button> </li>
    
   
    <li>Languages Number<input type={"number"} name="languages" min={1} value={state.languages} onChange={handleChange}/>
    <button className="SumRestButtons" type={"number"} name="pages" min={1} value={state.pages} onChange={handleChange}>
    ➕
    </button><button className="SumRestButtons">
    ➖
    </button>
    <button className="WarningButtons">⚠️</button>
    </li> 
 
    </ul>
    </div>
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

    if (+pages > 1) CALC_PRICE += +pages * PRICE_PER_PAGE;
    if (+languages > 1) CALC_PRICE += +languages * PRICE_PER_LANGUAGE;

      const TOTAL = BASE_PRICE + CALC_PRICE
    setTotalWeb(TOTAL);
  };

  useEffect(() => {
    const BASE_PRICE = 500;
    if (!isWebInput && totalWeb > BASE_PRICE) {
      setTotal((prevValue) => prevValue - totalWeb);
    }
  }, [isWebInput]);

  return (
    <Card>
    <ul className="card_options">
      <p className='card_app'>What budget do you want to consult?</p>
      <li><input
        type={"checkbox"}
        id="web"
        onInput={({ target }) => setWebInput(target.checked)}
      />
      <label htmlFor="web">💻Webpage (500€)</label>
      {isWebInput && <WebController onChange={handleWebPrice} />}
      </li>     
<li>
<input type={"checkbox"} id="seo" onInput={({ target }) =>
          setTotal((prevValue) => (target.checked ? prevValue + 300 : 0))
        }/>
      <label htmlFor="seo">🔍SEO consultancy(300€)</label>
</li>
    
<li><input type={"checkbox"}id="ads" onInput={({ target }) =>
          setTotal((prevValue) => (target.checked ? prevValue + 200 : 0))
        }
      />
      <label htmlFor="ads">📢Google Ads Campaign (200€)</label>
</li>
    
      <p>Precio: {total + totalWeb}€ 💶</p>
    </ul>
    </Card>
  );
};
