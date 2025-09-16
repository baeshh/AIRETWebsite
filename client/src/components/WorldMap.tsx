import { memo } from 'react';
import { cities, connections } from '../content/tech';

const WorldMap = memo(() => {
  return (
    <div className="world-map" data-testid="world-map" aria-hidden="true">
      <svg
        width="900"
        height="500"
        viewBox="0 0 900 500"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* More Realistic World Map Continents */}
        
        {/* North America */}
        <path
          d="M80 120 C70 110, 60 115, 55 125 C50 140, 60 155, 75 170 C90 185, 110 190, 130 185 C150 180, 170 170, 185 155 C200 140, 210 125, 205 110 C200 95, 185 90, 170 95 C155 100, 140 105, 125 110 C110 115, 95 118, 80 120 Z"
          fill="rgba(255, 255, 255, 0.2)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          className="continent"
          data-testid="continent-north-america"
        />

        {/* South America */}
        <path
          d="M140 210 C130 205, 125 215, 128 230 C130 245, 135 260, 140 275 C145 290, 150 305, 160 320 C170 335, 185 340, 200 335 C210 330, 215 315, 210 300 C205 285, 200 270, 195 255 C190 240, 180 225, 165 215 C150 208, 145 207, 140 210 Z"
          fill="rgba(255, 255, 255, 0.2)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          className="continent"
          data-testid="continent-south-america"
        />

        {/* Africa */}
        <path
          d="M350 160 C340 155, 330 165, 335 180 C340 195, 345 210, 350 225 C355 240, 360 255, 365 270 C370 285, 375 300, 385 310 C395 320, 410 315, 420 305 C430 295, 435 280, 430 265 C425 250, 420 235, 415 220 C410 205, 400 190, 385 180 C370 170, 360 162, 350 160 Z"
          fill="rgba(255, 255, 255, 0.2)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          className="continent"
          data-testid="continent-africa"
        />

        {/* Europe */}
        <path
          d="M320 110 C310 105, 300 110, 305 120 C310 130, 320 135, 335 140 C350 145, 365 150, 380 145 C395 140, 405 130, 400 120 C395 110, 385 105, 370 108 C355 110, 340 112, 325 115 C322 116, 321 115, 320 110 Z"
          fill="rgba(255, 255, 255, 0.2)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          className="continent"
          data-testid="continent-europe"
        />

        {/* Asia */}
        <path
          d="M420 90 C410 85, 400 90, 405 105 C410 120, 425 130, 450 135 C475 140, 500 145, 525 150 C550 155, 575 160, 600 165 C625 170, 650 175, 675 180 C700 185, 725 190, 750 185 C775 180, 790 170, 785 155 C780 140, 765 130, 745 125 C725 120, 705 118, 685 120 C665 122, 645 125, 625 128 C605 130, 585 132, 565 130 C545 128, 525 125, 505 120 C485 115, 465 110, 445 105 C435 102, 425 95, 420 90 Z"
          fill="rgba(255, 255, 255, 0.2)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          className="continent"
          data-testid="continent-asia"
        />

        {/* Australia */}
        <path
          d="M630 330 C620 325, 615 330, 620 340 C625 350, 635 355, 650 358 C665 360, 680 362, 695 360 C710 358, 720 350, 715 340 C710 330, 700 325, 685 328 C670 330, 655 332, 645 335 C635 337, 632 336, 630 330 Z"
          fill="rgba(255, 255, 255, 0.2)"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="2"
          className="continent"
          data-testid="continent-australia"
        />

        {/* Connection Lines */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.8)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
          </linearGradient>
        </defs>
        
        <g className="connection-lines" data-testid="connection-lines">
          {connections.map((connection, index) => (
            <path
              key={`connection-${index}`}
              d={connection.path}
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeDasharray="8,4"
              className="connection-line"
              style={{
                animationDelay: `${connection.delay}s`,
                filter: "drop-shadow(0 0 4px rgba(6, 182, 212, 0.5))"
              }}
              data-testid={`connection-line-${index}`}
            />
          ))}
        </g>

        {/* City Dots */}
        <g className="city-dots" data-testid="city-dots">
          {cities.map((city) => (
            <g key={city.id} data-testid={`city-${city.id}`}>
              <circle
                cx={city.x}
                cy={city.y}
                r="8"
                fill={city.color}
                stroke="rgba(255, 255, 255, 0.9)"
                strokeWidth="2"
                className="city-dot"
                style={{
                  filter: `drop-shadow(0 0 12px ${city.color})`
                }}
              />
              <circle
                cx={city.x}
                cy={city.y}
                r="16"
                fill="none"
                stroke={city.color}
                strokeWidth="1.5"
                opacity="0.5"
                className="city-pulse"
              />
            </g>
          ))}
        </g>

        {/* City Labels */}
        <g className="city-labels" data-testid="city-labels">
          {cities.map((city) => (
            <text
              key={`${city.id}-label`}
              x={city.x}
              y={city.y - 25}
              textAnchor="middle"
              fill="rgba(255, 255, 255, 0.95)"
              fontSize="14"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
              style={{
                textShadow: "0 0 8px rgba(0, 0, 0, 0.8)",
                filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))"
              }}
              data-testid={`city-label-${city.id}`}
            >
              {city.name}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
});

WorldMap.displayName = 'WorldMap';

export default WorldMap;