import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronDown, Edit2, Check, X } from 'lucide-react';

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
  const [editedContent, setEditedContent] = useState("");

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
    setEditingMessage(null);
    setEditedContent("");
  };

  const startEditing = (message) => {
    setEditingMessage(message.id);
    setEditedContent(message.content);
  };

  const cancelEditing = () => {
    setEditingMessage(null);
    setEditedContent("");
  };

  const handleRunAI = () => {
    console.log("Running AI and benchmarking responses...");
  };

  const renderMessage = (message, threadId) => (
    <div key={message.id} className={`mb-2 p-2 rounded-lg ${message.sender === 'User' ? 'bg-blue-50' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-sm">{message.sender}</span>
        {message.isEditable && !editingMessage && (
          <Button variant="ghost" size="sm" onClick={() => startEditing(message)}>
            <Edit2 className="h-4 w-4" />
          </Button>
        )}
      </div>
      {message.isEditable && editingMessage === message.id ? (
        <div className="space-y-2">
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-end space-x-2">
            <Button size="sm" variant="outline" onClick={cancelEditing}>
              <X className="h-4 w-4 mr-1" /> Cancel
            </Button>
            <Button size="sm" onClick={() => handleEditMessage(threadId, message.id, editedContent)}>
              <Check className="h-4 w-4 mr-1" /> Save
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-sm">{message.content}</p>
      )}
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
              <Card key={thread.id} className="mb-2 cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => toggleThread(thread.id)}>
                <CardContent className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{thread.title}</h4>
                    <div className="flex items-center space-x-2">
                      {!expandedThreads[thread.id] && (
                        <Badge variant="outline" className="text-xs">Preview</Badge>
                      )}
                      {expandedThreads[thread.id] ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                  {expandedThreads[thread.id] ? (
                    <div className="space-y-2 mt-2 border-t pt-2">
                      {thread.messages.map(message => renderMessage(message, thread.id))}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-600">
                      <p className="truncate">{thread.messages[thread.messages.length - 1].content}</p>
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