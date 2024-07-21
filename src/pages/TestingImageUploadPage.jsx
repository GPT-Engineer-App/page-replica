import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload } from 'lucide-react';

const TestingImageUploadPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const [aiFields, setAiFields] = useState({
    field1: '',
    field2: '',
    field3: ''
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        simulateAIResponse();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAIResponse = () => {
    setIsProcessingImage(true);
    setTimeout(() => {
      setAiFields({
        field1: 'AI Generated Content 1',
        field2: 'AI Generated Content 2',
        field3: 'AI Generated Content 3'
      });
      setIsProcessingImage(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Testing Image Upload</h1>
      <Card>
        <CardContent className="p-6">
          <div className="mb-4">
            <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <div className="flex items-center space-x-2">
              <Input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="flex-grow"
              />
              <Button size="icon">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {uploadedImage && (
            <div className="mb-4">
              <img src={uploadedImage} alt="Uploaded" className="max-w-full h-auto rounded-lg shadow-md" />
            </div>
          )}
          
          {isProcessingImage ? (
            <div className="text-center py-4">Processing image...</div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field 1</label>
                <Input value={aiFields.field1} readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field 2</label>
                <Input value={aiFields.field2} readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field 3</label>
                <Input value={aiFields.field3} readOnly />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TestingImageUploadPage;