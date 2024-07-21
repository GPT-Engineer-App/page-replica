import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronDown } from 'lucide-react';

const mockThreads = [
  {
    id: 1,
    title: "Project Discussion",
    messages: [
      { sender: "User", content: "Hello, how's the project going?" },
      { sender: "AI", content: "The project is progressing well. We've completed the initial phase." },
      { sender: "User", content: "Great! What's our next step?" },
      { sender: "AI", content: "We should schedule a team meeting to discuss the next phase." },
    ]
  },
  {
    id: 2,
    title: "Team Meeting",
    messages: [
      { sender: "User", content: "Meeting at 2 PM today. Don't forget to bring your reports." },
      { sender: "AI", content: "Understood. I'll prepare a summary of our recent progress." },
      { sender: "User", content: "Perfect. We'll also need to discuss the upcoming deadlines." },
      { sender: "AI", content: "Noted. I'll include a timeline of our project milestones in my report." },
    ]
  },
  {
    id: 3,
    title: "Client Feedback",
    messages: [
      { sender: "User", content: "The client loved our proposal!" },
      { sender: "AI", content: "That's excellent news! Did they provide any specific feedback?" },
      { sender: "User", content: "Yes, they particularly liked the innovative approach we suggested." },
      { sender: "AI", content: "Great! We should incorporate their feedback into our next steps." },
    ]
  },
];

const ChatPage = () => {
  const [expandedThreads, setExpandedThreads] = useState({});

  const toggleThread = (threadId) => {
    setExpandedThreads(prev => ({
      ...prev,
      [threadId]: !prev[threadId]
    }));
  };

  const renderPreview = (messages) => {
    const previewMessages = messages.slice(-2);
    return previewMessages.map((message, index) => (
      <p key={index} className="text-sm">
        <span className="font-semibold">{message.sender}: </span>
        {message.content}
      </p>
    ));
  };

  return (
    <div className="flex h-full">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        <div className="mb-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="gpt-4.0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4">gpt-4.0</SelectItem>
              <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Card className="flex-1 mb-4 overflow-auto">
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold mb-2 text-gray-500">Message Threads</h3>
            {mockThreads.map((thread) => (
              <Card key={thread.id} className="mb-2 cursor-pointer" onClick={() => toggleThread(thread.id)}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{thread.title}</h4>
                    {expandedThreads[thread.id] ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </div>
                  {expandedThreads[thread.id] ? (
                    <div className="space-y-2">
                      {thread.messages.map((message, index) => (
                        <p key={index} className="text-sm">
                          <span className="font-semibold">{message.sender}: </span>
                          {message.content}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {renderPreview(thread.messages)}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
        
        <div className="mt-auto">
          <Card>
            <CardContent className="p-2">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">User</Button>
                <Input placeholder="Enter user message..." className="flex-1" />
                <Button size="sm">Add</Button>
                <Button size="sm">Run</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Functions Panel */}
      <div className="w-80 bg-gray-100 p-4">
        <Button className="w-full mb-4">+ Add function</Button>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Temperature</label>
            <Slider defaultValue={[1]} max={1} step={0.1} />
          </div>
          
          <div>
            <label className="text-sm font-medium">Maximum Tokens</label>
            <Slider defaultValue={[256]} max={1000} step={1} />
          </div>
          
          <div>
            <label className="text-sm font-medium">Stop sequences</label>
            <Input placeholder="Enter sequence and press Tab" />
          </div>
          
          <div>
            <label className="text-sm font-medium">Top P</label>
            <Slider defaultValue={[1]} max={1} step={0.1} />
          </div>
          
          <div>
            <label className="text-sm font-medium">Frequency penalty</label>
            <Slider defaultValue={[0]} max={2} step={0.1} />
          </div>
          
          <div>
            <label className="text-sm font-medium">Presence penalty</label>
            <Slider defaultValue={[0]} max={2} step={0.1} />
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          <p>API and Internal-Playground requests will not be used to train our models.</p>
          <a href="#" className="text-blue-500">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;