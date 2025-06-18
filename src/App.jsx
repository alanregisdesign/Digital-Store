import Ways from "./routes";
import { OnboardingProvider } from "./contexts/OnboardingContext";
import OnboardingModal from "./components/Onboarding/OnboardingModal";

const App = () => {
  return (
    <OnboardingProvider>
      <Ways />
      <OnboardingModal />
    </OnboardingProvider>
  )
}

export default App;
