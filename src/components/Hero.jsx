import { Search, Users, SlidersHorizontal, ArrowUpDown } from "lucide-react";

function Hero() {
  return (
    <div className="position-relative overflow-hidden bg-primary bg-gradient p-5 shadow mb-4">
      <div className="position-relative z-3 container text-center">
        <h1 className="display-3 fw-bold mb-4 text-white">
          Discover and Explore
          <br />
          <span className="text-info-emphasis">Our User Directory</span>
        </h1>
        <p
          className="lead text-white-50 mx-auto mb-5"
          style={{ maxWidth: "42rem" }}
        >
          Access comprehensive user profiles with powerful search and filtering
          capabilities.
        </p>

        <div className="row row-cols-2 row-cols-md-4 g-4 mb-5">
          <div className="col">
            <div className="card h-100 bg-white bg-opacity-5 border-0 hover-bg-opacity-10">
              <div className="card-body text-center">
                <Search className="text-info-emphasis mb-2" size={32} />
                <span className="small fw-medium text-black ps-2">
                  Smart Search
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 bg-white bg-opacity-5 border-0 hover-bg-opacity-10">
              <div className="card-body text-center">
                <SlidersHorizontal
                  className="text-info-emphasis mb-2"
                  size={32}
                />
                <span className="small fw-medium text-black ps-2">
                  Advanced Filters
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 bg-white bg-opacity-5 border-0 hover-bg-opacity-10">
              <div className="card-body text-center">
                <ArrowUpDown className="text-info-emphasis mb-2" size={32} />
                <span className="small fw-medium text-black ps-2">
                  Quick Sort
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 bg-white bg-opacity-5 border-0 hover-bg-opacity-10">
              <div className="card-body text-center">
                <Users className="text-info-emphasis mb-2" size={32} />
                <span className="small fw-medium text-black ps-2">
                  User Profiles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
