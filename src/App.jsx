import { useContext, useEffect } from "react";
import Router from "../Router";
import { auth } from "./Utility/fireBase";
import { DataContext } from "./Compenents/DataProvider/DataProvider";
import { Types } from "./Utility/actionType";
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Types.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Types.SET_USER,
          user: null,
        });
      }
    });

    return  unsubscribe;
  }, []);

  return <Router />;
}

export default App;
