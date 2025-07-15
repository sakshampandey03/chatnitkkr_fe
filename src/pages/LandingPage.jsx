import { Link } from "react-router";
import homeview from "../assets/homeview.png";
import {
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
  Users,
  Star,
  HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black bg-gradient-radial from-purple-900/20 via-black to-black">
      {/* Navbar */}
      <Navbar></Navbar>

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
                No more digging through college website - just ask
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  {" "}
                  chatNITKKR
                </span>
              </h1>

              <div className="flex flex-col sm:flex-row justify-center pt-4">
                <Link to="/chat">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white shadow-purple
                  rounded-md"
                  >
                    Try Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="glass-card rounded-2xl p-1 shadow-purple">
                <img
                  src={homeview}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Designed specifically for the NITKKR community with everything you
              need to save your time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Efficiency-Focused
              </h3>
              <p className="text-gray-300">
                "Skip the website hustle – Get direct NIT KKR answers in
                seconds."
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {" "}
                Fresher-Centric
              </h3>
              <p className="text-gray-300">
                "Fresher? Ask anything – Campus maps, exam paths, and ‘where to
                go’ guides."
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Anti-Frustration
              </h3>
              <p className="text-gray-300">
                "No more 10-click journeys – One question, one accurate
                answer.".
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Verified Answers
              </h3>
              <p className="text-gray-300">
                Answers pulled straight from NIT KKR websites – No
                senior-disturbing needed
              </p>
            </div>

            {/* Feature 5 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Action-Oriented Short Version
              </h3>
              <p className="text-gray-300">
                Your shortcut to NIT KKR info – Ask. Get. Done.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-purple">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mb-4 shadow-purple">
                <HomeIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                All-in-One Student Ally
              </h3>
              <p className="text-gray-300">
                "Your 24/7 NIT KKR guide – From fresher FAQs to exam hacks,
                without the website maze."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20 backdrop-blur-md bg-black/40 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <h3 className="text-xl font-bold text-white">chatNITKKR</h3>
            </div>
            <p className="text-gray-400 text-sm text-center max-w-md">
              Unofficial AI assistant platform for NIT Kurukshetra students.
            </p>
          </div>

          {/* Hidden keyword block - offscreen SEO */}
          <div
            style={{
              position: "absolute",
              left: "-9999px",
              top: "-9999px",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            ChatNITKKR is a free AI chatbot for NIT Kurukshetra students. Use
            ChatNITKKR to access NIT Kurukshetra results, NIT KKR result portal,
            and latest exam result notifications. This NIT Kurukshetra chatbot
            helps with Samarth login, Samarth nitkkr support, and Samarth portal
            login errors. Students of NIT KKR use this AI bot for syllabus
            downloads, NIT Kurukshetra syllabus PDF, and course structure. From
            BTech to MTech, all NIT Kurukshetra branches — CSE, ECE, Mechanical
            — can use ChatNITKKR as a student academic assistant. Get placement
            help, NIT Kurukshetra CSE average package info, and nitkkr placement
            stats. Whether it’s NITK hostel info, nit kurukshetra academic
            calendar, nit kurukshetra admission portal, or even nitkkr samarth
            login stuck issues — ChatNITKKR AI assistant covers it. Works like a
            nit kurukshetra student support bot, nit kkr smart chatbot,
            unofficial academic nitkkr tool, and nit kurukshetra result checker.
            Use nit kurukshetra chat assistant, chatbot for NIT KKR, or nitkkr
            student chatbot to simplify your college life. Try ChatNITKKR now —
            the AI-powered solution for NIT Kurukshetra campus needs.
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} chatNITKKR. All rights reserved. Not
              affiliated with the official National Institute of Technology,
              Kurukshetra.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
