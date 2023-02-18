import { useEffect, useState } from "react";

import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";

import { getTrendingCocktails } from "../api/cocktail-service";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCoctails = async () => {
      setIsLoading(true);
      const response = await getTrendingCocktails();
      console.log(response);
      const items = response.map(({ drinks }) => drinks[0]);
      setCocktails(items);
      setIsLoading(false);
    };

    getCoctails();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        <CocktailsList cocktails={cocktails} />
      </Section>
    </>
  );
};
