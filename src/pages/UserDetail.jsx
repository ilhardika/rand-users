import { useLocation } from "react-router-dom";

function UserDetail() {
  const location = useLocation();
  const { user } = location.state;

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <>
        <h1 className="text-2xl mb-4">
          {user.name.first} {user.name.last}
        </h1>
        <img
          src={user.picture.large}
          alt="User"
          className="rounded-full mb-4"
        />
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Cell:</strong> {user.cell}
        </p>
        <p>
          <strong>Location:</strong> {user.location.city}, {user.location.state}
          , {user.location.country}
        </p>
        <p>
          <strong>Street:</strong> {user.location.street.number}{" "}
          {user.location.street.name}
        </p>
        <p>
          <strong>Postcode:</strong> {user.location.postcode}
        </p>
        <p>
          <strong>Coordinates:</strong> {user.location.coordinates.latitude},{" "}
          {user.location.coordinates.longitude}
        </p>
        <p>
          <strong>Timezone:</strong> {user.location.timezone.description}
        </p>
        <p>
          <strong>Nationality:</strong> {user.nat}
        </p>
      </>
    </div>
  );
}

export default UserDetail;
