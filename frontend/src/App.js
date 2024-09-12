import React from 'react';
import WidgetTabs from './components/WidgetTabs';
import GalleryWidget from './components/GalleryWidget';
import { styled } from '@mui/material';
import './App.css';

// Use styled component to handle flex layout for the container



const App = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex w-full lg:w-1/2 p-4">

        <WidgetTabs />
        <GalleryWidget />

      </div>
    </div>
  );
};

export default App;
