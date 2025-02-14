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
    return <p>User not found</p>;
  }

  const sections = [
    {
      title: "Personal Information",
      icon: <User className="w-5 h-5 text-blue-600" />,
      items: [
        {
          label: "Gender",
          value: user.gender,
          icon: <User className="w-4 h-4 text-gray-400" />,
        },
        {
          label: "Date of Birth",
          value: `${new Date(user.dob.date).toLocaleDateString()} (Age: ${
            user.dob.age
          })`,
          icon: <Calendar className="w-4 h-4 text-gray-400" />,
        },
        {
          label: "Nationality",
          value: user.nat,
          icon: <Flag className="w-4 h-4 text-gray-400" />,
        },
      ],
    },
    {
      title: "Contact Details",
      icon: <Phone className="w-5 h-5 text-green-600" />,
      items: [
        {
          label: "Email",
          value: user.email,
          icon: <Mail className="w-4 h-4 text-gray-400" />,
        },
        {
          label: "Phone",
          value: user.phone,
          icon: <Phone className="w-4 h-4 text-gray-400" />,
        },
        {
          label: "Cell",
          value: user.cell,
          icon: <Phone className="w-4 h-4 text-gray-400" />,
        },
      ],
    },
    {
      title: "Location",
      icon: <MapPin className="w-5 h-5" />,
      items: [
        {
          label: "Address",
          value: `${user.location.street.number} ${user.location.street.name}`,
        },
        { label: "City", value: user.location.city },
        { label: "State", value: user.location.state },
        { label: "Country", value: user.location.country },
        { label: "Postcode", value: user.location.postcode },
        {
          label: "Coordinates",
          value: `${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`,
        },
      ],
    },
    {
      title: "Account Information",
      icon: <Shield className="w-5 h-5" />,
      items: [
        { label: "Username", value: user.login.username },
        {
          label: "Registered",
          value: `${new Date(user.registered.date).toLocaleDateString()} (${
            user.registered.age
          } years)`,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Users</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Enhanced Header */}
          <div className="relative h-64 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
            <div className="absolute inset-0 bg-blue-600 opacity-10 background-pattern"></div>
            <div className="absolute -bottom-20 w-full flex justify-center">
              <div className="relative">
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
                />
                <div className="absolute -bottom-2 left-0 w-full flex justify-center">
                  <span className="px-4 py-1 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-24 pb-8 px-6">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
              {user.name.title} {user.name.first} {user.name.last}
            </h1>
            <p className="text-center text-gray-500 mb-8">
              @{user.login.username}
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-6">
                    {section.icon}
                    <h2 className="text-lg font-semibold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100"
                      >
                        {item.icon}
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-500">
                            {item.label}
                          </span>
                          <span className="text-gray-900">{item.value}</span>
                        </div>
                      </div>
                    ))}
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
