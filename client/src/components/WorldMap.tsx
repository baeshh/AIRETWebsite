import { memo } from 'react';
import { cities, connections } from '../content/tech';

interface WorldMapProps {
  className?: string;
}

const WorldMap = memo(function WorldMap({ className }: WorldMapProps) {
  return (
    <svg 
      className={`world-map ${className || ''}`}
      viewBox="0 0 900 500" 
      xmlns="http://www.w3.org/2000/svg"
      data-testid="world-map"
    >
      {/* Simplified World Map Continents */}
      <defs>
        <filter id="continentGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* North America */}
      <path 
        className="continent-outline"
        d="M50,100 Q120,80 200,100 L280,120 Q300,140 280,180 L250,220 Q200,240 150,230 L100,200 Q60,150 50,100 Z"
        data-testid="continent-north-america"
      />
      
      {/* Asia */}
      <path 
        className="continent-outline"  
        d="M600,80 Q720,70 800,90 L850,120 Q870,160 850,200 L820,240 Q750,260 680,240 L620,200 Q580,140 600,80 Z"
        data-testid="continent-asia"
      />

      {/* Europe */}
      <path 
        className="continent-outline"
        d="M400,100 Q460,90 520,110 L540,130 Q550,150 530,170 L500,180 Q450,175 420,160 L400,140 Q390,120 400,100 Z"
        data-testid="continent-europe"
      />

      {/* Connection Lines */}
      <g className="connection-lines" data-testid="connection-lines" aria-hidden="true">
        {connections.map((connection) => (
          <path
            key={`${connection.from}-${connection.to}`}
            className="connection-line"
            d={connection.path}
            style={{ animationDelay: `${connection.delay}s` }}
            data-testid={`connection-${connection.from}-${connection.to}`}
          />
        ))}
      </g>

      {/* City Dots */}
      <g className="city-dots" data-testid="city-dots" aria-hidden="true">
        {cities.map((city, index) => (
          <g key={city.id} data-testid={`city-group-${city.id}`}>
            {/* Outer ripple circle */}
            <circle
              cx={city.x}
              cy={city.y}
              r="6"
              fill="none"
              stroke={city.color}
              strokeWidth="2"
              opacity="0.5"
              className={`city-dot city-dot-${index + 1}`}
              data-testid={`city-ripple-${city.id}`}
            />
            {/* Inner solid circle */}
            <circle
              cx={city.x}
              cy={city.y}
              r="4"
              fill={city.color}
              className={`city-dot city-dot-${index + 1}`}
              data-testid={`city-dot-${city.id}`}
            />
          </g>
        ))}
      </g>

      {/* City Labels */}
      <g className="city-labels" data-testid="city-labels" aria-hidden="true">
        {cities.map((city) => (
          <text
            key={`${city.id}-label`}
            x={city.x}
            y={city.y - 15}
            textAnchor="middle"
            className="city-label"
            fill="white"
            fontSize="12"
            data-testid={`city-label-${city.id}`}
          >
            {city.name}
          </text>
        ))}
      </g>
    </svg>
  );
});

export default WorldMap;