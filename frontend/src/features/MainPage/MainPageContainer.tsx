import { MainPagePresentation } from "./MainPagePresentation";

export async function MainPageContainer() {
  const res = await fetch("http://ms-playground-backend-service:8080/api/ping");
  console.log(res);
  if (!res.ok) return null;
  const data = await res.json();

  return <MainPagePresentation message={data?.message || ""} />;
}
