import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronDown } from 'lucide-react';

const mockThreads = [
  { id: 1, title: "Project Discussion", messages: ["Hello", "How's the project going?"] },
  { id: 2, title: "Team Meeting", messages: ["Meeting at 2 PM", "Don't forget to bring your reports"] },
  { id: 3, title: "Client Feedback", messages: ["The client loved our proposal!", "Let's schedule a follow-up"] },
];

const ChatPage = () => {
  const [expandedThreads, setExpandedThreads] = useState({});

  const toggleThread = (threadId) => {
    setExpandedThreads(prev => ({
      ...prev,
      [threadId]: !prev[threadId]
    }));
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
              <div key={thread.id} className="mb-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left"
                  onClick={() => toggleThread(thread.id)}
                >
                  {expandedThreads[thread.id] ? (
                    <ChevronDown className="mr-2 h-4 w-4" />
                  ) : (
                    <ChevronRight className="mr-2 h-4 w-4" />
                  )}
                  {thread.title}
                </Button>
                {expandedThreads[thread.id] && (
                  <div className="ml-6 mt-2 space-y-1">
                    {thread.messages.map((message, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {message}
                      </p>
                    ))}
                  </div>
                )}
              </div>
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
          <p>API and Playground requests will not be used to train our models.</p>
          <a href="#" className="text-blue-500">Learn more</a>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;