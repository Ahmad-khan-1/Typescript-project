import Counter from "./components/CounterApp";
import ClickaButton from "./components/General";
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
    </div>
  );
};

export default App;
