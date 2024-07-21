import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const TestingImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [aiResponse, setAiResponse] = useState({
    field1: '',
    field2: '',
    field3: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        simulateAIResponse();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAIResponse = () => {
    setIsLoading(true);
    setTimeout(() => {
      setAiResponse({
        field1: 'AI generated content for field 1',
        field2: 'AI generated content for field 2',
        field3: 'AI generated content for field 3'
      });
      setIsLoading(false);
    }, 2000); // Simulate 2 second delay
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Testing Image Upload</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Upload Image</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" accept="image/*" onChange={handleImageUpload} />
          {selectedImage && (
            <img src={selectedImage} alt="Uploaded" className="mt-4 max-w-full h-auto" />
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>AI Response</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p>Processing image...</p>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="field1">Field 1</Label>
                <Input id="field1" value={aiResponse.field1} readOnly />
              </div>
              <div>
                <Label htmlFor="field2">Field 2</Label>
                <Input id="field2" value={aiResponse.field2} readOnly />
              </div>
              <div>
                <Label htmlFor="field3">Field 3</Label>
                <Input id="field3" value={aiResponse.field3} readOnly />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TestingImageUpload;