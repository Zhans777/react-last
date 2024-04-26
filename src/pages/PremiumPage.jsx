

import { Link } from "react-router-dom";
import premiumImage from "../assets/images/premium-image.jpg";

function PremiumPage() {
    return (
        <div className="premium">
            <div className="premium-card">
                <img src={premiumImage} alt="Premium" height={200} className="premium-image" />
                <h1>Subscribe</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, cupiditate debitis, dolor dolore dolorem explicabo facere hic id iure non optio placeat porro quae rem repellendus reprehenderit repudiandae, rerum tempore.</p>
                <Link to="/subscribe" className="dark-button inline">Subscribe now</Link>
                <Link to="/support" className="light-button inline">Need help?</Link>
            </div>
        </div>
    );
}

export default PremiumPage;
