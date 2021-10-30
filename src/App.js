import { Route } from "react-router";
import Course from "./page/Course";
import Food from "./page/Food";
import Home from "./page/Home";
import Area from "./page/Area";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Route path="/" component={Home} exact={true} />
        <Route path="/course" component={Course} />
        <Route path="/food" component={Food} />
        <Route path="/area" component={Area} />
      </main>
    </>
  );
};

export default App;
