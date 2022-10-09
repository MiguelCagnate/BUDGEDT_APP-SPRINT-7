import { useState, useEffect } from "react";
import { Card } from "../Card";

import "./AppPage.css";

const WebController = ({ onChange }) => {
  const [state, setState] = useState({
    pages: 1,
    languages: 1,
  });

  const handleChange = ({ target }) => {
    setState((prevState) => {
      return {
        ...prevState,
        [target.name]: target.value,
      };
    });
  };

  useEffect(() => {
    onChange(state);
  }, [state]);

  return (
    <>
      <input
        type={"number"}
        name="pages"
        min={1}
        value={state.pages}
        onChange={handleChange}
      />
      <input
        type={"number"}
        min={1}
        name="languages"
        value={state.languages}
        onChange={handleChange}
      />
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

    if (+pages > 1) CALC_PRICE += +pages * PRICE_PER_PAGE;
    if (+languages > 1) CALC_PRICE += +languages * PRICE_PER_LANGUAGE;

    const TOTAL = BASE_PRICE + CALC_PRICE;
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
      <p>¿Qué quieres hacer?</p>
      <input
        type={"checkbox"}
        id="web"
        onInput={({ target }) => setWebInput(target.checked)}
      />
      <label htmlFor="web">Una página web (500€)</label>
      {isWebInput && <WebController onChange={handleWebPrice} />}

      <input
        type={"checkbox"}
        id="seo"
        onInput={({ target }) =>
          setTotal((prevValue) => (target.checked ? prevValue + 300 : 0))
        }
      />
      <label htmlFor="seo">Una consultoria SEO (300€)</label>

      <input
        type={"checkbox"}
        id="ads"
        onInput={({ target }) =>
          setTotal((prevValue) => (target.checked ? prevValue + 200 : 0))
        }
      />
      <label htmlFor="ads">Una campaña de Google Ads (200€)</label>

      <p>Precio: {total + totalWeb}€</p>
    </Card>
  );
};
