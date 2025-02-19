import React, { useState } from "react";
import UserDetailModal from "./UserDetailModal";

function UserCard({ user, index, isVisible }) {
  const [showModal, setShowModal] = useState(false);
  const backgroundColor = "#F0E7FF";

  if (!user) {
    return null;
  }

  return (
    <>
      <div
        className={`col-md-4 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 0.5s ease-in-out" }}
      >
        <div
          className="card h-100 border-0 shadow-sm"
          style={{
            transition: "all 0.3s ease",
            backgroundColor: backgroundColor,
            transform: "translateY(0)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "translateY(-10px)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <div className="card-body text-center pt-4">
            <div className="mb-4">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="rounded-circle"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  border: "4px solid white",
                  padding: "3px",
                  backgroundColor: "#fff",
                }}
              />
            </div>

            <h5 className="card-title mb-1 fw-bold">
              {user.name.first} {user.name.last}
            </h5>
            <p className="text-muted small mb-3">@{user.login.username}</p>

            <div className="d-flex justify-content-center gap-4 mb-3">
              <div className="text-center">
                <small className="text-muted d-block">Member Since</small>
                <span className="fw-semibold">
                  {new Date(user.registered.date).getFullYear()}
                </span>
              </div>
              <div className="vr"></div>
              <div className="text-center">
                <small className="text-muted d-block">Country</small>
                <span className="fw-semibold">{user.location.country}</span>
              </div>
            </div>

            <button
              className="btn btn-primary btn-sm rounded-pill px-4"
              onClick={() => setShowModal(true)}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <UserDetailModal user={user} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default UserCard;
