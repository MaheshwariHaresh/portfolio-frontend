import ComputerIcon from "@mui/icons-material/Computer";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import LanguageIcon from "@mui/icons-material/Language";
import "../styles/Services.css";

function Services() {
  return (
    <div className="service-container">
      <div className="service-title-header">
        <p className="h2">
          <span>MY SERVICES</span>
        </p>
      </div>

      <div className="card-container">
        {/* Card 1 */}
        <div className="service-card left">
          <h5>
            <ComputerIcon className="service-icon" />
            Website Development
          </h5>
          <p>
            I create websites based on your ready-made design. Whether it’s a
            landing page or a business card website, I will make it look great
            and work smoothly on any device.
          </p>
        </div>

        {/* Card 2 */}
        <div className="service-card right">
          <h5>
            <DesignServicesIcon className="service-icon" />
            Web Design
          </h5>
          <p>
            I can design your website from scratch. I create modern, simple, and
            user-friendly designs that match your brand and goals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="service-card left">
          <h5>
            <LanguageIcon className="service-icon" />
            MERN Stack Development
          </h5>
          <p>
            I build websites using the MERN Stack, making them easy to update
            and manage. It's a great choice for blogs, small businesses, or
            portfolios.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
