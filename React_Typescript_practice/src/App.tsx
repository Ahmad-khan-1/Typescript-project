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
      <HeroSection />
    </div>
  );
};

export default App;
