import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PortfolioLanding from "./portfolioLanding/PortfolioLanding";
import PortfolioDetail from "./portfolioDetail/PortfolioDetail";

const Portfolio = () => {
    const navigate = useNavigate();
    const [hasPortfolio, setHasPortfolio] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // TODO: Replace with actual API call to check if user has portfolio
        const checkPortfolio = async () => {
            try {
                // Simulating API call
                // const response = await fetch('/api/portfolio/check');
                // const data = await response.json();
                // setHasPortfolio(data.hasPortfolio);

                // For now, check localStorage or mock data
                const portfolioExists = localStorage.getItem("hasPortfolio") === "true";
                setHasPortfolio(portfolioExists);
            } catch (error) {
                console.error("Error checking portfolio:", error);
                setHasPortfolio(false);
            } finally {
                setIsLoading(false);
            }
        };

        checkPortfolio();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If user has portfolio, show detail page
    // If not, show landing page
    return hasPortfolio ? <PortfolioDetail /> : <PortfolioLanding />;
};

export default Portfolio;
