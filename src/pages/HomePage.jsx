
import Hero from "../components/Hero";
import UserManagement from "../components/UserManagement";

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <Hero />
      <UserManagement />
    </div>
  );
}

export default HomePage;
