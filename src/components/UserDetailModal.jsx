import React from "react";
import { User, Phone, Mail, Calendar } from "lucide-react";

function UserDetailModal({ user, onClose }) {
  const sections = [
    {
      title: "Personal Info",
      icon: <User size={18} className="text-primary" />,
      items: [
        { label: "Gender", value: user.gender },
        {
          label: "Birth Date",
          value: new Date(user.dob.date).toLocaleDateString(),
        },
        { label: "Age", value: user.dob.age },
      ],
    },
    {
      title: "Contact",
      icon: <Phone size={18} className="text-success" />,
      items: [
        {
          label: "Email",
          value: user.email,
          icon: <Mail size={14} className="me-1" />,
        },
        {
          label: "Phone",
          value: user.phone,
          icon: <Phone size={14} className="me-1" />,
        },
      ],
    },
  ];

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header border-0 pb-0">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            />
          </div>

          <div className="modal-body p-4">
            {/* User Header */}
            <div className="text-center mb-4">
              <div className="position-relative d-inline-block">
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="rounded-circle mb-3"
                  width="100"
                  height="100"
                  style={{
                    objectFit: "cover",
                    border: "4px solid white",
                    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
              <h4 className="mb-1">
                {user.name.first} {user.name.last}
              </h4>
              <p className="text-muted mb-0">@{user.login.username}</p>
            </div>

            {/* User Details */}
            <div className="row g-3">
              {sections.map((section) => (
                <div key={section.title} className="col-md-6">
                  <div className="card h-100 border-0 bg-light">
                    <div className="card-body p-3">
                      <div className="d-flex align-items-center mb-3">
                        {section.icon}
                        <h6 className="mb-0 ms-2">{section.title}</h6>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        {section.items.map((item) => (
                          <div
                            key={item.label}
                            className="bg-white rounded p-2 small"
                          >
                            <div className="text-muted mb-1">{item.label}</div>
                            <div className="fw-medium">
                              {item.icon && item.icon}
                              {item.value}
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

export default UserDetailModal;
