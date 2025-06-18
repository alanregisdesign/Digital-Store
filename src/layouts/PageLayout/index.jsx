import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Onboarding from "../../components/Onboarding";
import { useOnboarding } from "../../contexts/OnboardingContext";

const PageLayout = () => {
    const { isOnboardingOpen, closeOnboarding, completeOnboarding } = useOnboarding();

    return(
        <>
            <Header />
            <Outlet />
            <Onboarding 
                isOpen={isOnboardingOpen}
                onClose={closeOnboarding}
                onComplete={completeOnboarding}
            />
        </>
    )
};

export default PageLayout;
