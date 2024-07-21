import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronDown } from 'lucide-react';

const initialThreads = [
  {
    id: 1,
    title: "Project Discussion",
    messages: [
      { id: 1, sender: "User", content: "Hello, how's the project going?", isEditable: true },
      { id: 2, sender: "AI", content: "[AI response placeholder]", isEditable: false },
      { id: 3, sender: "User", content: "Great! What's our next step?", isEditable: true },
      { id: 4, sender: "AI", content: "[AI response placeholder]", isEditable: false },
    ]
  },
  {
    id: 2,
    title: "Team Meeting",
    messages: [
      { id: 5, sender: "User", content: "Meeting at 2 PM today. Don't forget to bring your reports.", isEditable: true },
      { id: 6, sender: "AI", content: "[AI response placeholder]", isEditable: false },
      { id: 7, sender: "User", content: "Perfect. We'll also need to discuss the upcoming deadlines.", isEditable: true },
      { id: 8, sender: "AI", content: "[AI response placeholder]", isEditable: false },
    ]
  },
  {
    id: 3,
    title: "Client Feedback",
    messages: [
      { id: 9, sender: "User", content: "The client loved our proposal!", isEditable: true },
      { id: 10, sender: "AI", content: "[AI response placeholder]", isEditable: false },
      { id: 11, sender: "User", content: "Yes, they particularly liked the innovative approach we suggested.", isEditable: true },
      { id: 12, sender: "AI", content: "[AI response placeholder]", isEditable: false },
    ]
  },
];

const ChatPage = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [expandedThreads, setExpandedThreads] = useState({});
  const [editingMessage, setEditingMessage] = useState(null);

  const toggleThread = (threadId) => {
    setExpandedThreads(prev => ({
      ...prev,
      [threadId]: !prev[threadId]
    }));
  };

  const handleEditMessage = (threadId, messageId, newContent) => {
    setThreads(prevThreads => 
      prevThreads.map(thread => 
        thread.id === threadId
          ? {
              ...thread,
              messages: thread.messages.map(message =>
                message.id === messageId
                  ? { ...message, content: newContent }
                  : message
              )
            }
          : thread
      )
    );
  };

  const handleRunAI = () => {
    // Placeholder for AI response generation and benchmarking
    console.log("Running AI and benchmarking responses...");
    // Here you would typically call an API to generate AI responses
    // and then update the thread messages with the new AI responses
  };

  const renderMessage = (message, threadId) => (
    <div key={message.id} className="mb-2">
      <p className="text-sm">
        <span className="font-semibold">{message.sender}: </span>
        {message.isEditable && editingMessage === message.id ? (
          <Input
            value={message.content}
            onChange={(e) => handleEditMessage(threadId, message.id, e.target.value)}
            onBlur={() => setEditingMessage(null)}
            autoFocus
          />
        ) : (
          <span
            onClick={() => message.isEditable && setEditingMessage(message.id)}
            className={message.isEditable ? "cursor-pointer hover:bg-gray-100" : ""}
          >
            {message.content}
          </span>
        )}
      </p>
    </div>
  );

  return (
    <div className="flex h-full">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        <div className="mb-4 flex justify-between items-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="gpt-4.0" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt-4">gpt-4.0</SelectItem>
              <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleRunAI}>Run AI</Button>
        </div>
        
        <Card className="flex-1 mb-4 overflow-auto">
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold mb-2 text-gray-500">Message Threads</h3>
            {threads.map((thread) => (
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
                      {thread.messages.map(message => renderMessage(message, thread.id))}
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {thread.messages.slice(-2).map(message => renderMessage(message, thread.id))}
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Functions Panel */}
      <div className="w-80 bg-gray-100 p-4">
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
          <p>AI Agent Testing Ground: Responses will be generated and benchmarked.</p>
          <a href="#" className="text-blue-500">Learn more about testing</a>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;