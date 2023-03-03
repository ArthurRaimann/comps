import Button from "./Button";
function App() {
  return (
    <div className="App">
      <div><Button>normal</Button></div>
      <div><Button primary >primary</Button></div>
      <div><Button secondary>secondary</Button></div>
      <div><Button warning>warning</Button></div>
      <div><Button success>success</Button></div>
      <div><Button danger>danger</Button></div>
    </div>
  );
}

export default App;
