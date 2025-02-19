import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UserCard from "./UserCard";
import { fetchUsers } from "../store/slices/usersSlice";

function TopUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);
  const loading = useSelector((state) => state.users.loading);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  // Get top 9 users
  const topUsers = [...users]
    .sort((a, b) => new Date(a.registered.date) - new Date(b.registered.date))
    .slice(0, 9);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 3 >= topUsers.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 3 < 0 ? topUsers.length - 3 : prev - 3));
  };

  // Get current visible users (3 at a time)
  const visibleUsers = topUsers.slice(startIndex, startIndex + 3);

  if (loading) {
    return (
      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5 bg-light position-relative">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold">Our Top Users</h2>
          <p className="text-muted">
            Meet our most experienced community members
          </p>
        </div>

        <div className="position-relative">
          <div className="row g-4">
            {visibleUsers.map((user, index) => (
              <UserCard
                key={user.login.uuid}
                user={user}
                index={startIndex + index}
                isVisible={true}
              />
            ))}
          </div>

          {topUsers.length > 3 && (
            <>
              <button
                className="btn btn-light rounded-circle shadow-sm position-absolute start-0 top-50 translate-middle-y"
                onClick={prevSlide}
                style={{ zIndex: 2 }}
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="btn btn-light rounded-circle shadow-sm position-absolute end-0 top-50 translate-middle-y"
                onClick={nextSlide}
                style={{ zIndex: 2 }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default TopUsers;
