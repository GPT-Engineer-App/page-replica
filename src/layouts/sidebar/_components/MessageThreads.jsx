import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const mockThreads = [
  { id: 1, title: "Project Discussion", messages: ["Hello", "How's the project going?"] },
  { id: 2, title: "Team Meeting", messages: ["Meeting at 2 PM", "Don't forget to bring your reports"] },
  { id: 3, title: "Client Feedback", messages: ["The client loved our proposal!", "Let's schedule a follow-up"] },
];

export const MessageThreads = () => {
  const [expandedThreads, setExpandedThreads] = useState({});

  const toggleThread = (threadId) => {
    setExpandedThreads(prev => ({
      ...prev,
      [threadId]: !prev[threadId]
    }));
  };

  return (
    <div className="mt-6 px-2 lg:px-4">
      <h3 className="mb-2 px-2 text-lg font-semibold">Message Threads</h3>
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
    </div>
  );
};