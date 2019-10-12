import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Context from "./context/Context";
import SingleRoom from "./pages/SingleRoom";

const App = () => {
   return (
      <>
         <Navbar />
         <Context>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/rooms" exact component={Rooms} />
               <Route path="/rooms/:slug" exact component={SingleRoom} />
            </Switch>
         </Context>
      </>
   );
};

export default App;
