// import { useState, useEffect } from "react";

import GlobalStyle from "./styles/globalStyle.ts";
// import Loading from "./components/loading.tsx";
import { MainRouter } from "./routes/index.tsx";

function App() {
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // setIsLoading(true);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //     // setIsLoading(false);
  //   };
  // }, []);

  return (
    <>
      <GlobalStyle />
      {/* {isLoading ? <Loading /> : } */}
      <MainRouter />
    </>
  );
}

export default App;
