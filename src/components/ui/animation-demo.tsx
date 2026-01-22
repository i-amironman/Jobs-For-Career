'use client';

import React, { useState } from 'react';





/**
 * Animation Demo Component
 * 
 * A small interactive demo to showcase the animated background effects
 * Users can click buttons to highlight different animation layers
 */
const AnimationDemo: React.FC = () => {
  const [showShapes, setShowShapes] = useState(true);
  const [showGradient, setShowGradient] = useState(true);
  const [showMesh, setShowMesh] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-card/95 backdrop-blur-sm border rounded-lg p-4 shadow-lg max-w-xs">
      <h4 className="font-semibold text-foreground mb-3 text-sm">Animation Controls</h4>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Shapes</span>
          <button
            onClick={() => setShowShapes(!showShapes)}
            className={`w-10 h-6 rounded-full transition-colors ${
              showShapes 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {showShapes ? 'ON' : 'OFF'}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Gradient</span>
          <button
            onClick={() => setShowGradient(!showGradient)}
            className={`w-10 h-6 rounded-full transition-colors ${
              showGradient 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {showGradient ? 'ON' : 'OFF'}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Mesh</span>
          <button
            onClick={() => setShowMesh(!showMesh)}
            className={`w-10 h-6 rounded-full transition-colors ${
              showMesh 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {showMesh ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
      
      <div className="text-xs text-muted-foreground mt-3">
        <p className="mb-1">💡 Toggle layers to see effects</p>
        <p>Animation is now visible!</p>
      </div>
    </div>
  );
};

export default AnimationDemo;