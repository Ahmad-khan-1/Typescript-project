import Counter from "./components/CounterApp";
import EventTyping from "./components/EventTyping";
import ClickaButton from "./components/General";
import GenericComp from "./components/Generic_in_typscript";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <Header
        heading={"Hello World"}
        count={23}
        func1={(a: string) => {
          console.log(a);
        }}
      >
        <button>Click Me </button>
      </Header>
      <HeroSection label="Search" value={""} onChange={() => {}} />
      <Counter />

      <br />
      <br />
      <ClickaButton text="Click me" onClick={() => alert("this is me ")} />
      <br />
      <br />
      <EventTyping />
      <br />
      <br />
      <GenericComp item={["Ali", "Ahmad", "Faizan"]} />
      <GenericComp item={[1, 2, 3, 4]} />
    </div>
  );
};

export default App;
