import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropDownPage from "./pages/DropDownPage";

function App() {

  return (
    <div >
      <Link to='/accordion'>Go to Accordion</Link>
      <Link to='/dropdown'>Go to DropDown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>

        <Route path="/dropdown">
          <DropDownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
