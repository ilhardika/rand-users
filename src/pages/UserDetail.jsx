import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  User,
  Shield,
  Calendar,
  Flag,
} from "lucide-react";

function UserDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state;

  if (!user) {
    return <div className="alert alert-danger">User not found</div>;
  }

  const sections = [
    {
      title: "Personal Information",
      icon: <User className="text-primary" size={20} />,
      items: [
        {
          label: "Gender",
          value: user.gender,
          icon: <User className="text-secondary" size={16} />,
        },
        {
          label: "Date of Birth",
          value: `${new Date(user.dob.date).toLocaleDateString()} (Age: ${
            user.dob.age
          })`,
          icon: <Calendar className="text-secondary" size={16} />,
        },
        {
          label: "Nationality",
          value: user.nat,
          icon: <Flag className="text-secondary" size={16} />,
        },
      ],
    },
    {
      title: "Contact Details",
      icon: <Phone className="text-success" size={20} />,
      items: [
        {
          label: "Email",
          value: user.email,
          icon: <Mail className="text-secondary" size={16} />,
        },
        {
          label: "Phone",
          value: user.phone,
          icon: <Phone className="text-secondary" size={16} />,
        },
        {
          label: "Cell",
          value: user.cell,
          icon: <Phone className="text-secondary" size={16} />,
        },
      ],
    },
    {
      title: "Location",
      icon: <MapPin className="text-danger" size={20} />,
      items: [
        {
          label: "Address",
          value: `${user.location.street.number} ${user.location.street.name}`,
          icon: <MapPin className="text-secondary" size={16} />,
        },
        {
          label: "City",
          value: user.location.city,
          icon: <MapPin className="text-secondary" size={16} />,
        },
        {
          label: "State",
          value: user.location.state,
          icon: <MapPin className="text-secondary" size={16} />,
        },
        {
          label: "Country",
          value: user.location.country,
          icon: <Globe className="text-secondary" size={16} />,
        },
        {
          label: "Postcode",
          value: user.location.postcode,
          icon: <MapPin className="text-secondary" size={16} />,
        },
        {
          label: "Coordinates",
          value: `${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`,
          icon: <MapPin className="text-secondary" size={16} />,
        },
      ],
    },
    {
      title: "Account Information",
      icon: <Shield className="text-warning" size={20} />,
      items: [
        {
          label: "Username",
          value: user.login.username,
          icon: <User className="text-secondary" size={16} />,
        },
        {
          label: "Registered",
          value: `${new Date(user.registered.date).toLocaleDateString()} (${
            user.registered.age
          } years)`,
          icon: <Clock className="text-secondary" size={16} />,
        },
      ],
    },
  ];

  return (
    <div className="min-vh-100 bg-light py-4">
      <div className="container" style={{ maxWidth: "1000px" }}>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-link text-decoration-none text-secondary mb-4 p-0"
        >
          <ArrowLeft className="me-2" size={20} />
          <span className="fw-medium">Back to Users</span>
        </button>

        <div className="card shadow-lg border-0 overflow-hidden">
          {/* Profile Header */}
          <div className="position-relative">
            <div className="bg-primary p-5" style={{ height: "200px" }}>
              <div className="bg-white bg-opacity-10 position-absolute top-0 start-0 w-100 h-100"></div>
            </div>
            <div
              className="position-absolute start-50 translate-middle-x"
              style={{ bottom: "-48px" }}
            >
              <div className="position-relative">
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="rounded-circle border border-4 border-white shadow-lg"
                  width="160"
                  height="160"
                />
                <div
                  className="position-absolute start-50 translate-middle-x"
                  style={{ bottom: "-12px" }}
                >
                  <span className="badge bg-success px-3 py-2 rounded-pill">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body pt-5 mt-5">
            <h1 className="display-6 text-center fw-bold mb-1">
              {user.name.title} {user.name.first} {user.name.last}
            </h1>
            <p className="text-center text-secondary mb-5">
              @{user.login.username}
            </p>

            <div className="row g-4">
              {sections.map((section) => (
                <div key={section.title} className="col-12 col-md-6">
                  <div className="card h-100 bg-light border-0">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-4">
                        {section.icon}
                        <h2 className="h5 mb-0 ms-2">{section.title}</h2>
                      </div>
                      <div className="d-flex flex-column gap-3">
                        {section.items.map((item) => (
                          <div
                            key={item.label}
                            className="card bg-white border-0 shadow-sm"
                          >
                            <div className="card-body d-flex align-items-start p-3">
                              {item.icon}
                              <div className="ms-3">
                                <div className="text-secondary small fw-medium">
                                  {item.label}
                                </div>
                                <div>{item.value}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
