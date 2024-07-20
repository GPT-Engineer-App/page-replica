import { LayoutDashboard, MessageSquare, Users, Type, Mic, Zap, Database, HardDrive, BarChart, Key, MessageCircle, HelpCircle } from "lucide-react";
import ChatPage from "./pages/ChatPage.jsx";

export const navItems = [
  {
    title: "Playground",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <ChatPage />,
  },
  {
    title: "Chat",
    to: "/chat",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <ChatPage />,
  },
  {
    title: "Assistants",
    to: "/assistants",
    icon: <Users className="h-4 w-4" />,
    page: <div>Assistants Page</div>,
  },
  {
    title: "Completions",
    to: "/completions",
    icon: <Type className="h-4 w-4" />,
    page: <div>Completions Page</div>,
  },
  {
    title: "Text to speech",
    to: "/text-to-speech",
    icon: <Mic className="h-4 w-4" />,
    page: <div>Text to Speech Page</div>,
  },
  {
    title: "Fine-tuning",
    to: "/fine-tuning",
    icon: <Zap className="h-4 w-4" />,
    page: <div>Fine-tuning Page</div>,
  },
  {
    title: "Batches",
    to: "/batches",
    icon: <Database className="h-4 w-4" />,
    page: <div>Batches Page</div>,
  },
  {
    title: "Storage",
    to: "/storage",
    icon: <HardDrive className="h-4 w-4" />,
    page: <div>Storage Page</div>,
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