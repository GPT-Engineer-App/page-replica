import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ChevronDown, Edit2, Check, X, MinusCircle } from 'lucide-react';

const initialThreads = [
  {
    id: 1,
    title: "Project Discussion",
    message: { content: "Hello, how's the project going?", isEditable: true },
    aiResponse: null
  },
  {
    id: 2,
    title: "Team Meeting",
    message: { content: "Meeting at 2 PM today. Don't forget to bring your reports.", isEditable: true },
    aiResponse: null
  },
  {
    id: 3,
    title: "Client Feedback",
    message: { content: "The client loved our proposal!", isEditable: true },
    aiResponse: null
  },
];

const ChatPage = () => {
  const [threads, setThreads] = useState(initialThreads);
  const [expandedThreads, setExpandedThreads] = useState({});
  const [editingMessage, setEditingMessage] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isAIRunning, setIsAIRunning] = useState(false);

  const toggleThread = (threadId) => {
    setExpandedThreads(prev => ({
      ...prev,
      [threadId]: !prev[threadId]
    }));
  };

  const closeThread = (threadId, event) => {
    event.stopPropagation();
    setExpandedThreads(prev => ({
      ...prev,
      [threadId]: false
    }));
  };

  const handleEditMessage = (threadId, newContent) => {
    setThreads(prevThreads => 
      prevThreads.map(thread => 
        thread.id === threadId
          ? { ...thread, message: { ...thread.message, content: newContent } }
          : thread
      )
    );
    setEditingMessage(null);
    setEditedContent("");
  };

  const startEditing = (threadId, event) => {
    event.stopPropagation();
    setEditingMessage(threadId);
    setEditedContent(threads.find(t => t.id === threadId).message.content);
  };

  const cancelEditing = (event) => {
    event.stopPropagation();
    setEditingMessage(null);
    setEditedContent("");
  };

  const handleRunAI = () => {
    setIsAIRunning(true);
    setTimeout(() => {
      setThreads(prevThreads =>
        prevThreads.map(thread => ({
          ...thread,
          aiResponse: "mmm interesting"
        }))
      );
      setIsAIRunning(false);
    }, 2000); // Simulate 2 second delay
  };

  const handleSendMessage = (threadId) => {
    if (newMessage.trim() === "") return;
    setThreads(prevThreads =>
      prevThreads.map(thread =>
        thread.id === threadId
          ? { ...thread, message: { content: newMessage, isEditable: true }, aiResponse: null }
          : thread
      )
    );
    setNewMessage("");
  };

  const renderMessage = (thread) => (
    <div className="mb-2 p-2 rounded-lg bg-blue-50">
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-sm">User</span>
        {thread.message.isEditable && editingMessage !== thread.id && (
          <Button variant="ghost" size="sm" onClick={(e) => startEditing(thread.id, e)}>
            <Edit2 className="h-4 w-4" />
          </Button>
        )}
      </div>
      {thread.message.isEditable && editingMessage === thread.id ? (
        <div className="space-y-2">
          <Textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full p-2 border rounded"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="flex justify-end space-x-2">
            <Button size="sm" variant="outline" onClick={(e) => cancelEditing(e)}>
              <X className="h-4 w-4 mr-1" /> Cancel
            </Button>
            <Button size="sm" onClick={(e) => { e.stopPropagation(); handleEditMessage(thread.id, editedContent); }}>
              <Check className="h-4 w-4 mr-1" /> Save
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-sm">{thread.message.content}</p>
      )}
      {thread.aiResponse && (
        <div className="mt-2 p-2 rounded-lg bg-gray-50">
          <span className="font-semibold text-sm">AI</span>
          <p className="text-sm">{thread.aiResponse}</p>
        </div>
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
          <Button onClick={handleRunAI} disabled={isAIRunning}>
            {isAIRunning ? "AI Running..." : "Run AI"}
          </Button>
        </div>
        
        <Card className="flex-1 mb-4 overflow-auto">
          <CardContent className="pt-6">
            <h3 className="text-sm font-semibold mb-2 text-gray-500">Message Threads</h3>
            {threads.map((thread) => (
              <Card key={thread.id} className="mb-2 cursor-pointer hover:bg-gray-50 transition-colors">
                <CardContent className="p-3">
                  <div 
                    className="flex items-center justify-between mb-2"
                    onClick={(e) => { e.stopPropagation(); toggleThread(thread.id); }}
                  >
                    <h4 className="font-semibold">{thread.title}</h4>
                    <div className="flex items-center space-x-2">
                      {!expandedThreads[thread.id] && (
                        <Badge variant="outline" className="text-xs">Preview</Badge>
                      )}
                      {expandedThreads[thread.id] ? (
                        <Button variant="ghost" size="sm" onClick={(e) => closeThread(thread.id, e)}>
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                  {expandedThreads[thread.id] ? (
                    <div className="space-y-2 mt-2 border-t pt-2">
                      {renderMessage(thread)}
                      {!thread.aiResponse && (
                        <div className="flex items-center space-x-2 mt-2">
                          <Input
                            placeholder="Enter new message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="flex-1"
                          />
                          <Button size="sm" onClick={() => handleSendMessage(thread.id)}>Send</Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-600">
                      <p className="truncate">{thread.message.content}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
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