"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome Back</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Your Password"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <Link href="#" className="text-green-500 hover:text-green-600 font-medium">
              Forgot Password
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition-colors duration-200"
          >
            Log in
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-gray-700">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-500 hover:text-green-600 font-medium">
              Sign up Now
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-gray-600">
          <p>
            By clicking "Log in" above, you acknowledge that you have read and understood, and agree to Ride Rover{" "}
            <Link href="#" className="text-green-500 hover:text-green-600">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-green-500 hover:text-green-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
