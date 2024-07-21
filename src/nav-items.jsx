import { LayoutDashboard, BarChart, Key, MessageCircle, HelpCircle, Image } from "lucide-react";
import ChatPage from "./pages/ChatPage.jsx";
import TestingImageUpload from "./pages/TestingImageUpload.jsx";

export const navItems = [
  {
    title: "Getting Started",
    to: "/docs",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <ChatPage />,
  },
  {
    title: "Testing Image Upload",
    to: "/docs/testing-image-upload",
    icon: <Image className="h-4 w-4" />,
    page: <TestingImageUpload />,
  },
  {
    title: "Usage",
    to: "/docs/usage",
    icon: <BarChart className="h-4 w-4" />,
    page: <div>Usage Page</div>,
  },
  {
    title: "API keys",
    to: "/docs/api-keys",
    icon: <Key className="h-4 w-4" />,
    page: <div>API Keys Page</div>,
  },
  {
    title: "Forum",
    to: "/docs/forum",
    icon: <MessageCircle className="h-4 w-4" />,
    page: <div>Forum Page</div>,
  },
  {
    title: "Help",
    to: "/docs/help",
    icon: <HelpCircle className="h-4 w-4" />,
    page: <div>Help Page</div>,
  },
];