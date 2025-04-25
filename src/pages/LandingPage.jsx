import { Link } from "react-router"
import { ArrowRight, MessageSquare, Shield, Zap, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black bg-gradient-radial from-purple-900/20 via-black to-black">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mr-3 shadow-purple">
              <span className="text-white font-bold">C</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">chatNITKKR</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white shadow-purple">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-900/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  NITKKR
                </span>{" "}
                like never before
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                The official chat platform for NIT Kurukshetra students and faculty. Stay connected, share resources,
                and collaborate seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white shadow-purple"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/chat">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500/50 text-white hover:bg-purple-500/10"
                  >
                    Try Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card rounded-2xl p-1 shadow-purple">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="chatNITKKR Interface"
                  className="rounded-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Designed specifically for the NITKKR community with everything you need to stay connected and productive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Messaging</h3>
              <p className="text-gray-300">
                Instant messaging with real-time notifications and message delivery status.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure Communication</h3>
              <p className="text-gray-300">
                End-to-end encryption ensures your conversations remain private and secure.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300">Optimized for speed with minimal latency for a smooth chat experience.</p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Group Chats</h3>
              <p className="text-gray-300">
                Create groups for your classes, projects, or clubs to collaborate effectively.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">College Resources</h3>
              <p className="text-gray-300">
                Access important college resources, links, and information directly in the app.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M12 2v8"></path>
                  <path d="m4.93 10.93 1.41 1.41"></path>
                  <path d="M2 18h2"></path>
                  <path d="M20 18h2"></path>
                  <path d="m19.07 10.93-1.41 1.41"></path>
                  <path d="M22 22H2"></path>
                  <path d="m16 6-4 4-4-4"></path>
                  <path d="M16 18a4 4 0 0 0-8 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">File Sharing</h3>
              <p className="text-gray-300">Easily share documents, images, and files with your peers and professors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20 backdrop-blur-md bg-black/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <h3 className="text-xl font-bold text-white">chatNITKKR</h3>
              </div>
              <p className="text-gray-400 text-sm">The official chat platform for NIT Kurukshetra.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Email: contact@nitkurukshetra.ac.in
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Phone: +91 1744 233XXX
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    NIT Kurukshetra, Haryana, India
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} chatNITKKR. All rights reserved. National Institute of Technology,
              Kurukshetra.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
