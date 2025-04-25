"use client"

import { LogOut, LogIn, User, ChevronDown } from "lucide-react"
// import { Button } from "./components/ui/button"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function Navbar({ isLoggedIn, user, onLogin, onLogout }) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-900/80 to-black/80 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center mr-3 shadow-purple">
            <span className="text-white font-bold">C</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">chatNITKKR</h1>
        </div>

        <div>
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 flex items-center gap-2 text-white hover:bg-white/10">
                  <Avatar className="h-8 w-8 border-2 border-purple-500/30">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-purple-900">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{user.name}</span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-black/90 backdrop-blur-md border-purple-500/20 text-white"
              >
                <DropdownMenuItem className="hover:bg-purple-500/10 focus:bg-purple-500/10 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-purple-500/20" />
                <DropdownMenuItem
                  className="hover:bg-purple-500/10 focus:bg-purple-500/10 cursor-pointer"
                  onClick={onLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-2">
              <Button variant="ghost" className="text-white hover:bg-white/10" onClick={onLogin}>
                Sign Up
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-purple-900 hover:from-purple-700 hover:to-purple-800 text-white shadow-purple"
                onClick={onLogin}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
