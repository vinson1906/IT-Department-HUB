"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, CheckCircle2 } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Sign up</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 text-sm"
              required
            />
          </div>

          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              placeholder="Your Username"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 text-sm"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 text-sm"
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
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 text-sm"
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

          {/* Confirmation Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirmation Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Your Password"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 text-sm"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Verification Checkbox */}
          <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
            <button type="button" onClick={() => setIsVerified(!isVerified)} className="flex-shrink-0">
              {isVerified ? (
                <CheckCircle2 size={24} className="text-blue-500" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-blue-300" />
              )}
            </button>
            <span className="text-sm text-gray-700">Click to verify</span>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition-colors duration-200 mt-6"
          >
            Sign up
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-700 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-green-500 hover:text-green-600 font-medium">
              Login Now
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-xs text-gray-600">
          <p>
            By clicking "Sign up" above, you acknowledge that you have read and understood, and agree to Ride Rover{" "}
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
