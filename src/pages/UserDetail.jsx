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
          {user.name.title} {user.name.first} {user.name.last}
        </h1>
        <img
          src={user.picture.large}
          alt="User"
          className="rounded-full mb-4"
        />
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.login.username}
        </p>
        <p>
          <strong>Password:</strong> {user.login.password}
        </p>
        <p>
          <strong>Salt:</strong> {user.login.salt}
        </p>
        <p>
          <strong>MD5:</strong> {user.login.md5}
        </p>
        <p>
          <strong>SHA1:</strong> {user.login.sha1}
        </p>
        <p>
          <strong>SHA256:</strong> {user.login.sha256}
        </p>
        <p>
          <strong>Date of Birth:</strong>{" "}
          {new Date(user.dob.date).toLocaleDateString()} (Age: {user.dob.age})
        </p>
        <p>
          <strong>Registered:</strong>{" "}
          {new Date(user.registered.date).toLocaleDateString()} (Age:{" "}
          {user.registered.age})
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Cell:</strong> {user.cell}
        </p>
        <p>
          <strong>ID:</strong> {user.id.name} - {user.id.value}
        </p>
        <p>
          <strong>Location:</strong> {user.location.street.number}{" "}
          {user.location.street.name}, {user.location.city},{" "}
          {user.location.state}, {user.location.country},{" "}
          {user.location.postcode}
        </p>
        <p>
          <strong>Coordinates:</strong> {user.location.coordinates.latitude},{" "}
          {user.location.coordinates.longitude}
        </p>
        <p>
          <strong>Timezone:</strong> {user.location.timezone.description} (
          {user.location.timezone.offset})
        </p>
        <p>
          <strong>Nationality:</strong> {user.nat}
        </p>
      </>
    </div>
  );
}

export default UserDetail;
