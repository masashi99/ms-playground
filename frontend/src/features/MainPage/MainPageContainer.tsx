import { MainPagePresentation } from "./MainPagePresentation";

export async function MainPageContainer() {
  const res = await fetch("http://localhost:8080/api/ping");
  const data = await res.json();
  return <MainPagePresentation message={data.message} />;
}
