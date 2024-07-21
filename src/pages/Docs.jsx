import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Playground from './docs/Playground';
import ImageUpload from './docs/ImageUpload';
import Tutorial from './docs/Tutorial';
import Usage from './docs/Usage';
import ApiKeys from './docs/ApiKeys';

const Docs = () => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 h-screen p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/docs/playground">Playground</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/docs/image-upload">Image Upload</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/docs/tutorial">Tutorial</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/docs/usage">Usage</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/docs/api-keys">API Keys</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="playground" element={<Playground />} />
          <Route path="image-upload" element={<ImageUpload />} />
          <Route path="tutorial" element={<Tutorial />} />
          <Route path="usage" element={<Usage />} />
          <Route path="api-keys" element={<ApiKeys />} />
        </Routes>
      </main>
    </div>
  );
};

export default Docs;