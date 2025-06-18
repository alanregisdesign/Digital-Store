import Ways from "./routes";
import { OnboardingProvider } from "./contexts/OnboardingContext";

const App = () => {
  return (
    <OnboardingProvider>
      <Ways />
    </OnboardingProvider>
  )
}

export default App;
