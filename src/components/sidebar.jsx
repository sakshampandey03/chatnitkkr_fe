import {
  ExternalLink,
  BookOpen,
  Home,
  Settings,
  Users,
  Bookmark,
  Bell,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

import { ToastContainer, toast } from "react-toastify";

export default function Sidebar() {
  // Sample college links
  const collegeLinks = [
    { name: "NITKKR Homepage", icon: Home, url: "https://nitkkr.ac.in/" },
    {
      name: "Academic Notifications",
      icon: BookOpen,
      url: "https://nitkkr.ac.in/academic-notifications/",
    },
    { name: "Hostels", icon: Users, url: "https://nitkkr.ac.in/iic-2/" },
    {
      name: "Alumini",
      icon: ExternalLink,
      url: "https://nitkkr.ac.in/about-us-12/",
    },
  ];

  // Sample quick links
  const quickLinks = [
    { name: "Contact Us", icon: Bell },
    // { name: "Settings", icon: Settings },
  ];
  const notify = () => toast("Upgrade will be available soon");
  return (
    <aside className="w-1/5 bg-black/60 backdrop-blur-lg border-r border-purple-500/20 flex flex-col p-4 text-white overflow-y-auto relative z-10">
      {/* College Links */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-purple-300 mb-3 uppercase tracking-wider">
          College Links
        </h3>
        <ul className="space-y-1">
          {collegeLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white/80 hover:text-white hover:bg-purple-500/10 transition-all"
                >
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.name}
                </Button>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Separator className="bg-purple-500/20 my-4" />

      {/* Quick Links */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-purple-300 mb-3 uppercase tracking-wider">
          Quick Links
        </h3>
        <ul className="space-y-1">
          {quickLinks.map((link, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className="w-full justify-start text-white/80 hover:text-white hover:bg-purple-500/10 transition-all"
              >
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Promo Card */}
      <div className="mt-auto">
        <div className="rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-900/20 backdrop-blur-md p-4 border border-purple-500/20 shadow-purple">
          <h4 className="font-medium mb-2">Premium Features</h4>
          <p className="text-sm text-white/70 mb-3">
            Get answers to unlimited queries
          </p>
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white"
            onClick={notify}
          >
            Upgrade Now
          </Button>
        </div>
      </div>
    </aside>
  );
}
