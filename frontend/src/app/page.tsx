import { MainPageContainer } from "@/features/MainPage/MainPageContainer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <MainPageContainer />
      </Suspense>
    </div>
  );
}
