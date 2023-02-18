import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout/Layout";
import { routes } from "../routes";
import { CocktailDetail, Cocktails, Home } from "../views";

export const App = () => {
  const { HOME, COCKTAILS, COCKTAIL_ID } = routes;
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={COCKTAILS} element={<Cocktails />} />
        <Route path={COCKTAIL_ID} element={<CocktailDetail />} />
      </Route>
      <Route path="*" element={<Navigate to={HOME} replace />} />
    </Routes>
  );
};
