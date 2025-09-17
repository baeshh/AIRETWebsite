import { motion } from "framer-motion";

export default function WorldMap() {
  // 도시 위치 (백분율로 지도 상의 위치)
  const cities = {
    seoul: { x: 72, y: 35, name: "Seoul" },
    vegas: { x: 16, y: 37, name: "Las Vegas" },
    nyc: { x: 25, y: 32, name: "New York" },
    la: { x: 12, y: 40, name: "Los Angeles" }
  };

  // 애니메이션 화살표 경로
  const paths = [
    { from: cities.seoul, to: cities.vegas, delay: 0 },
    { from: cities.seoul, to: cities.nyc, delay: 1 },
    { from: cities.seoul, to: cities.la, delay: 2 }
  ];

  return (
    <div 
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "400px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: "16px",
        overflow: "hidden"
      }}
      data-testid="world-map"
    >
      {/* 심플한 세계 지도 배경 */}
      <svg
        viewBox="0 0 100 60"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.3
        }}
      >
        {/* 북미 대륙 간략화 */}
        <path
          d="M5 20 Q10 15 15 20 L25 15 Q30 18 35 20 L30 35 Q25 40 20 38 L15 40 Q10 35 8 30 Z"
          fill="rgba(255, 255, 255, 0.6)"
        />
        
        {/* 유럽 */}
        <path
          d="M40 15 Q45 12 50 15 L48 25 Q45 28 42 26 L40 22 Z"
          fill="rgba(255, 255, 255, 0.6)"
        />
        
        {/* 아시아 */}
        <path
          d="M50 15 Q60 10 75 15 Q80 20 85 25 L82 40 Q75 45 68 42 L60 38 Q55 30 50 25 Z"
          fill="rgba(255, 255, 255, 0.6)"
        />
      </svg>

      {/* 도시 마커들 */}
      {Object.entries(cities).map(([key, city]) => (
        <motion.div
          key={key}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: key === "seoul" ? 0 : 0.5,
            duration: 0.6,
            type: "spring"
          }}
          style={{
            position: "absolute",
            left: `${city.x}%`,
            top: `${city.y}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 10
          }}
        >
          <div
            style={{
              width: key === "seoul" ? "16px" : "12px",
              height: key === "seoul" ? "16px" : "12px",
              borderRadius: "50%",
              background: key === "seoul" ? "#ef4444" : "#fbbf24",
              border: "3px solid white",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
            }}
            data-testid={`city-marker-${key}`}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: key === "seoul" ? 0.3 : 0.8 }}
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "8px",
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "600",
              whiteSpace: "nowrap"
            }}
          >
            {city.name}
          </motion.div>
        </motion.div>
      ))}

      {/* 애니메이션 화살표 경로들 */}
      {paths.map((path, index) => {
        const deltaX = path.to.x - path.from.x;
        const deltaY = path.to.y - path.from.y;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: path.delay + 1, duration: 0.5 }}
            style={{
              position: "absolute",
              left: `${path.from.x}%`,
              top: `${path.from.y}%`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: "left center",
              zIndex: 5
            }}
          >
            {/* 곡선 경로 */}
            <svg
              width={`${distance * 6}`}
              height="60"
              style={{ overflow: "visible" }}
            >
              <defs>
                <marker
                  id={`arrowhead-${index}`}
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="rgba(239, 68, 68, 0.8)"
                  />
                </marker>
              </defs>
              
              <motion.path
                d={`M0,30 Q${distance * 3},10 ${distance * 6},30`}
                stroke="rgba(239, 68, 68, 0.8)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="8,4"
                markerEnd={`url(#arrowhead-${index})`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: path.delay + 1.5,
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 3
                }}
              />
            </svg>
            
            {/* 펄스 효과 */}
            <motion.div
              style={{
                position: "absolute",
                right: "-8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "rgba(239, 68, 68, 0.6)"
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 0.2, 0.6]
              }}
              transition={{
                delay: path.delay + 2,
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1.5
              }}
            />
          </motion.div>
        );
      })}

      {/* 제목 오버레이 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(255, 255, 255, 0.95)",
          padding: "16px 24px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
          textAlign: "center"
        }}
      >
        <h3 style={{ 
          margin: 0, 
          fontSize: "1.2rem", 
          fontWeight: "700",
          color: "#1f2937",
          marginBottom: "4px"
        }}>
          Global Innovation Network
        </h3>
        <p style={{ 
          margin: 0, 
          fontSize: "0.9rem", 
          color: "#6b7280",
          fontWeight: "500"
        }}>
          Seoul → Las Vegas • New York • Los Angeles
        </p>
      </motion.div>
    </div>
  );
}