import { LayoutDashboard, BarChart, Key, MessageCircle, HelpCircle } from "lucide-react";
import ChatPage from "./pages/ChatPage.jsx";

export const navItems = [
  {
    title: "Internal-Playground",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <ChatPage />,
  },
  {
    title: "Usage",
    to: "/usage",
    icon: <BarChart className="h-4 w-4" />,
    page: <div>Usage Page</div>,
  },
  {
    title: "API keys",
    to: "/api-keys",
    icon: <Key className="h-4 w-4" />,
    page: <div>API Keys Page</div>,
  },
  {
    title: "Forum",
    to: "/forum",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <div>Forum Page</div>,
  },
  {
    title: "Help",
    to: "/help",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <div>Help Page</div>,
  },
];