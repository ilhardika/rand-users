import React from "react";
import { MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function LocationModal({ user, onClose }) {
  const position = [
    parseFloat(user.location.coordinates.latitude),
    parseFloat(user.location.coordinates.longitude),
  ];

  const addressDetails = [
    {
      label: "Street",
      value: `${user.location.street.number} ${user.location.street.name}`,
    },
    { label: "City", value: user.location.city },
    { label: "State", value: user.location.state },
    { label: "Postcode", value: user.location.postcode },
    { label: "Country", value: user.location.country },
  ];

  return (
    <div
      className="modal fade show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title d-flex align-items-center">
              <MapPin size={18} className="text-danger me-2" />
              Location Details
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            />
          </div>

          <div className="modal-body p-3">
            {/* Map Container */}
            <div
              className="rounded-3 overflow-hidden mb-3 shadow-sm"
              style={{ height: "200px" }}
            >
              <MapContainer
                center={position}
                zoom={2} // Changed from 13 to 2 for maximum zoom out
                minZoom={2} // Prevent zooming out further than level 2
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
                worldCopyJump={true} // Enables smooth panning across date line
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <Marker position={position}>
                  <Popup>
                    {user.location.street.number} {user.location.street.name}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Address Details in Grid */}
            <div className="card border-0 bg-light">
              <div className="card-body p-3">
                <div className="row row-cols-2 g-2">
                  {addressDetails.map((item) => (
                    <div key={item.label} className="col">
                      <div className="bg-white rounded p-2 small h-100">
                        <div className="text-muted small">{item.label}</div>
                        <div className="fw-medium text-truncate">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationModal;
