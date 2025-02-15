import { Search, Users, SlidersHorizontal, ArrowUpDown } from "lucide-react";

function Hero() {
  return (
    <div
      className="position-relative overflow-hidden shadow-lg mb-4 py-5"
      style={{ backgroundColor: "#0A2647" }} // Modern dark blue color
    >
      <div className="position-relative container text-center py-4">
        <h1 className="display-2 fw-bold mb-4 text-white">
          Discover and Explore
          <br />
          <span className="text-info px-3 py-1 rounded-3">
            Our User Directory
          </span>
        </h1>
        <p
          className="lead text-white-50 mx-auto mb-5"
          style={{ maxWidth: "42rem" }}
        >
          Access comprehensive user profiles with powerful search and filtering
          capabilities.
        </p>

        <div className="row row-cols-2 row-cols-md-4 g-4">
          {[
            { icon: <Search size={32} />, title: "Smart Search" },
            {
              icon: <SlidersHorizontal size={32} />,
              title: "Advanced Filters",
            },
            { icon: <ArrowUpDown size={32} />, title: "Quick Sort" },
            { icon: <Users size={32} />, title: "User Profiles" },
          ].map((feature, index) => (
            <div key={index} className="col">
              <div
                className="card h-100 border-0"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <div className="card-body text-center p-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 p-3 mb-3"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <div className="text-info">{feature.icon}</div>
                  </div>
                  <h5 className="fw-medium text-white mb-0 small">
                    {feature.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
