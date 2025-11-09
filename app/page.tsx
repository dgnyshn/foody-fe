"use client";

import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      console.error("Waitlist error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      title: "Discover Amazing Recipes",
      description:
        "Explore thousands of delicious recipes from around the world. Find your next favorite dish!",
      icon: "🌍",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      title: "Smart Ingredient Filtering",
      description:
        "Tell us what ingredients you have at home and we'll show you recipes you can make right now.",
      icon: "🥘",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Step-by-Step Cooking",
      description:
        "Follow detailed instructions with cooking times and tips to create perfect meals every time.",
      icon: "👨‍🍳",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIwLCAxODQsIDE2NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-full mb-8 shadow-lg animate-bounce-slow">
              <span className="text-2xl mr-2">🍳</span>
              <span className="font-semibold">Coming Soon!</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              What Would You Like
              <br />
              to Cook Today?
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover recipes from every cuisine, find the perfect dish with
              ingredients you have, and cook delicious meals with ease. Join our
              waitlist to be the first to experience Foody!
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md mx-auto">
              {isSubmitted ? (
                <div className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg animate-scale-in">
                  🎉 You're on the list! We'll notify you soon.
                </div>
              ) : (
                <>
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                      className="flex-1 px-6 py-4 rounded-full border-2 border-teal-200 focus:border-teal-500 focus:outline-none text-lg shadow-md transition-all text-gray-900 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? "Joining..." : "Join Waitlist"}
                    </button>
                  </form>
                  {error && (
                    <p className="text-red-500 text-sm mt-3 text-center">
                      {error}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* App Preview */}
          <div className="relative max-w-sm mx-auto mt-20">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 rounded-3xl blur-2xl opacity-30 animate-pulse-slow"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border-8 border-gray-800">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-600 mb-2">Good Morning!</p>
                  <h2 className="text-2xl font-bold">
                    What would you like to cook?
                  </h2>
                </div>
                <div className="bg-white rounded-xl p-4 mb-4 shadow">
                  <input
                    type="text"
                    placeholder="Search recipes..."
                    className="w-full outline-none text-gray-700"
                    disabled
                  />
                </div>
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                  {["All", "Australian", "Malaysian", "Syrian"].map(
                    (cuisine) => (
                      <span
                        key={cuisine}
                        className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full whitespace-nowrap text-sm font-medium"
                      >
                        {cuisine}
                      </span>
                    )
                  )}
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="h-32 bg-gradient-to-br from-yellow-400 to-orange-500"></div>
                  <div className="p-4">
                    <p className="text-xs text-blue-600 font-semibold mb-1">
                      FRENCH
                    </p>
                    <h3 className="font-bold text-lg mb-1">
                      Chicken Parmentier
                    </h3>
                    <p className="text-sm text-gray-500">⏱️ 35m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Why You'll Love Foody
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            🚀 In Development
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Local Ingredients
                  </h3>
                  <p className="text-gray-600">
                    Use ingredients available in your country to cook authentic
                    recipes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Global Cuisines
                  </h3>
                  <p className="text-gray-600">
                    Access recipes from every corner of the world
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Smart Recommendations
                  </h3>
                  <p className="text-gray-600">
                    AI-powered suggestions based on your preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Cooking Assistant
                  </h3>
                  <p className="text-gray-600">
                    Step-by-step guidance for perfect results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Cooking?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be among the first to experience the future of recipe discovery.
            Join our waitlist today!
          </p>

          <div className="max-w-md mx-auto">
            {isSubmitted ? (
              <div className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                🎉 You're all set! Check your email soon.
              </div>
            ) : (
              <>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    disabled={isLoading}
                    className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-white/50 text-lg shadow-xl text-gray-900 placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>
                {error && (
                  <p className="text-white text-sm mt-3 text-center bg-red-500/20 px-4 py-2 rounded-full">
                    {error}
                  </p>
                )}
              </>
            )}
          </div>

          <p className="text-white/80 mt-6 text-sm">
            🔒 We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl mr-3">🍳</span>
              <h3 className="text-2xl font-bold">Foody</h3>
            </div>

            <p className="text-gray-400 mb-8">
              Your journey to culinary excellence starts here.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </a>
            </div>

            <p className="text-gray-500 text-sm text-center">
              © 2025 Foody. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
