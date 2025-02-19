import Hero from "../components/Hero";
import UserManagement from "../components/UserManagement";
import TopUsers from "../components/TopUsers";

function HomePage() {
  return (
    <div className="container-fluid p-0">
      <Hero />
      <UserManagement />
      <TopUsers />
    </div>
  );
}

export default HomePage;
