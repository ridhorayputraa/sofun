import React, { useLayoutEffect, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = React.lazy(() => import("./pages/home"));

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  if (!element) return null;

  return (
    // <Suspense
    //   fallback={
    //     <AnimatePresence mode="wait">
    //       <Transitions />
    //     </AnimatePresence>
    //   }
    // >
    <AnimatePresence mode="wait" initial={true}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
    // </Suspense>
  );
}

export default App;
