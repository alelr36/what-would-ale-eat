import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { TrucksQueryContainer } from "./TrucksQueryContainer";

const PEOPLE_WITH_ZERO_HATERS = [
  "John Wick",
  "Taylor Swift",
  "Michael Scott",
  "Epic Sax Guy",
  "Son Goku",
  "Terry Crews",
  "Rubeus Hagrid",
];

const randomIndex = Math.floor(Math.random() * PEOPLE_WITH_ZERO_HATERS.length);
const name = PEOPLE_WITH_ZERO_HATERS[randomIndex];
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>What would Ale eat?</h1>
        <p>
          Remember, this site is used by people with zero haters, like{" "}
          <a target="_blank" href="https://alelr36.github.io">
            Ale
          </a>{" "}
          and {name}.
        </p>
        <p className="my-6">
          Use comma to separate yout food cravings, like for example{" "}
          <span className="font-extrabold text-blue-400">'ribs, salad'</span>,
          to find places that{" "}
          <span className="font-extrabold text-blue-400">
            serve ribs AND salad
          </span>{" "}
          =D.
        </p>
        <TrucksQueryContainer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
