import { Link, useLocation } from "wouter";
import { Home, History, MessageSquare, User, Shield } from "lucide-react";

export default function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home", testId: "nav-home" },
    { path: "/history", icon: History, label: "History", testId: "nav-history" },
    { path: "/coach", icon: MessageSquare, label: "Coach", testId: "nav-coach" },
    { path: "/profile", icon: User, label: "Profile", testId: "nav-profile" },
    { path: "/admin", icon: Shield, label: "Admin", testId: "nav-admin" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-card-border z-50 safe-area-inset-bottom">
      <div className="flex items-center justify-around h-16 max-w-2xl mx-auto px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location === item.path;
          
          return (
            <Link key={item.path} href={item.path}>
              <button
                data-testid={item.testId}
                className={`flex flex-col items-center justify-center min-w-[64px] h-12 px-2 rounded-lg transition-colors hover-elevate ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "fill-current" : ""}`} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
