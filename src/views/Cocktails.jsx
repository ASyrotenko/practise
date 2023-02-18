import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { CocktailsList } from "../components/CocktailsList";
import { Loader } from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchByName } from "../api/cocktail-service";

export const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const query = searchParams.get("query");

  const handleFormSubmit = (value) => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    const getCoctailByQueryId = async () => {
      try {
        setIsLoading(true);
        const response = await searchByName(query);
        console.log(response);
        setCocktails(response.drinks);
        setSuccess(true);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCoctailByQueryId();
  }, [query]);

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <SearchForm handleFormSubmit={handleFormSubmit} />
        {success && <CocktailsList cocktails={cocktails} />}
      </Section>
    </>
  );
};
