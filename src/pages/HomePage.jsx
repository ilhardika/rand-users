import Hero from "../components/Hero";
import UserManagement from "../components/UserManagement";

function HomePage() {
  return (
    <div className="container-fluid p-0">
      <Hero />
      <UserManagement />
    </div>
  );
}

export default HomePage;
