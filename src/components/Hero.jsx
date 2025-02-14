import { Search, Users, SlidersHorizontal, ArrowUpDown } from "lucide-react";

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-16 shadow-2xl mb-8">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Discover and Explore
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Our User Directory
          </span>
        </h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
          Access comprehensive user profiles with powerful search and filtering
          capabilities.
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-lg">
            <Search className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">Smart Search</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-lg">
            <SlidersHorizontal className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">Advanced Filters</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-lg">
            <ArrowUpDown className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">Quick Sort</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl backdrop-blur-lg">
            <Users className="w-8 h-8 mb-2 text-blue-300" />
            <span className="text-sm font-medium">User Profiles</span>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
    </div>
  );
}

export default Hero;
