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
        {/* Detailed World Map Continents */}
        {/* North America */}
        <path
          d="M200 100 Q160 80 120 100 L100 120 Q90 140 100 160 L120 180 Q140 190 160 185 L180 175 Q200 165 220 170 L240 160 Q250 140 240 120 L220 110 Q210 105 200 100 Z"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
          className="continent"
          data-testid="continent-north-america"
        />
        {/* South America */}
        <path
          d="M180 200 Q160 195 140 205 L130 220 Q125 240 130 260 L135 280 Q140 300 150 320 L160 340 Q170 350 185 345 L200 335 Q210 320 205 305 L195 290 Q190 275 195 260 L190 245 Q185 230 190 215 L185 205 Q182 202 180 200 Z"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
          className="continent"
          data-testid="continent-south-america"
        />
        {/* Europe */}
        <path
          d="M380 120 Q360 115 340 120 L330 130 Q325 140 330 150 L340 160 Q350 165 360 162 L380 158 Q400 155 420 160 L440 155 Q450 145 445 135 L430 125 Q415 120 400 122 L385 122 Q382 121 380 120 Z"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
          className="continent"
          data-testid="continent-europe"
        />
        {/* Africa */}
        <path
          d="M380 170 Q360 165 340 170 L325 180 Q315 200 320 220 L325 240 Q330 260 340 280 L350 300 Q360 320 375 325 L395 320 Q415 315 430 310 L445 300 Q455 285 450 270 L445 255 Q440 240 435 225 L430 210 Q425 195 415 185 L400 175 Q390 172 380 170 Z"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
          className="continent"
          data-testid="continent-africa"
        />
        {/* Asia */}
        <path
          d="M450 100 Q430 95 410 100 L395 110 Q385 125 390 140 L400 155 Q420 165 440 160 L480 155 Q520 150 560 155 L600 160 Q640 165 680 170 L720 175 Q760 180 780 175 L800 170 Q810 160 805 145 L795 130 Q780 120 760 125 L735 130 Q710 135 685 130 L660 125 Q635 120 610 125 L585 130 Q560 135 535 130 L510 125 Q485 115 470 110 L455 105 Q452 102 450 100 Z"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
          className="continent"
          data-testid="continent-asia"
        />
        {/* Australia */}
        <path
          d="M650 320 Q630 315 610 320 L595 330 Q590 340 595 350 L605 360 Q620 365 635 362 L650 358 Q665 355 680 358 L695 355 Q705 345 700 335 L690 325 Q675 322 660 323 L655 322 Q652 321 650 320 Z"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1"
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
                r="6"
                fill={city.color}
                stroke="rgba(255, 255, 255, 0.9)"
                strokeWidth="2"
                className="city-dot"
                style={{
                  filter: `drop-shadow(0 0 8px ${city.color})`
                }}
              />
              <circle
                cx={city.x}
                cy={city.y}
                r="12"
                fill="none"
                stroke={city.color}
                strokeWidth="1"
                opacity="0.4"
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
              y={city.y - 20}
              textAnchor="middle"
              fill="rgba(255, 255, 255, 0.9)"
              fontSize="12"
              fontWeight="500"
              fontFamily="system-ui, sans-serif"
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