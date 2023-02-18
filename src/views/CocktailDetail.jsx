import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { CocktailInfo } from "../components/CocktailInfo";

import { useParams, useLocation } from "react-router-dom";
import { routes } from "../routes";
import { getCocktailDetail } from "../api/cocktail-service";
import { useEffect, useState } from "react";

export const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { cocktailId } = useParams();

  useEffect(() => {
    const getCoctail = async () => {
      setIsLoading(true);
      const response = await getCocktailDetail(cocktailId);
      console.log(response);
      setCocktail(response);
      setIsLoading(false);
    };

    getCoctail();
    console.log(cocktail);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {cocktail && (
        <Section>
          <CocktailInfo {...cocktail} />
        </Section>
      )}
    </>
  );
};
