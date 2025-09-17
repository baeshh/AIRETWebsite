import { motion } from "framer-motion";

export default function WorldMap() {
  // 도시 위치 (실제 지리적 위치에 맞게 조정)
  const cities = {
    seoul: { x: 85, y: 35, name: "Seoul" },
    vegas: { x: 15, y: 40, name: "Las Vegas" },
    nyc: { x: 25, y: 35, name: "New York" },
    la: { x: 10, y: 42, name: "Los Angeles" }
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
      {/* 실제 세계 지도 기반 SVG */}
      <svg
        viewBox="0 0 100 50"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.5
        }}
      >
        {/* 그린랜드 */}
        <path
          d="M20 8 Q25 6 30 8 L32 12 Q30 15 25 14 L20 12 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 북미 대륙 - 캐나다와 미국 */}
        <path
          d="M5 12 Q8 8 15 10 L20 12 Q25 10 30 12 L35 14 Q38 16 35 20 L32 24 Q35 28 32 32 L28 35 Q25 38 20 36 L15 38 Q10 35 8 30 L5 25 Q3 20 5 15 L5 12 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 멕시코 */}
        <path
          d="M12 35 Q18 33 22 35 L20 38 Q15 37 12 35 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 남미 대륙 - 브라질과 아르헨티나 */}
        <path
          d="M20 38 Q25 36 28 40 L30 45 Q28 50 25 52 L22 50 Q18 48 16 45 L18 40 Q20 38 20 38 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 아이슬란드 */}
        <path
          d="M42 12 Q45 11 46 13 L44 15 Q42 14 42 12 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 영국 */}
        <path
          d="M46 18 Q48 17 49 19 L47 21 Q46 20 46 18 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 유럽 대륙 */}
        <path
          d="M48 15 Q52 12 58 15 L60 18 Q58 22 55 24 L52 22 Q48 20 46 18 L48 15 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 아프리카 대륙 */}
        <path
          d="M50 24 Q54 22 58 25 L60 30 Q58 38 55 42 L52 45 Q48 42 46 38 L44 32 Q46 28 50 24 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 러시아 (아시아 부분) */}
        <path
          d="M60 10 Q75 8 90 12 L95 15 Q92 20 88 22 L80 20 Q70 18 60 15 L60 10 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 중국과 인도 */}
        <path
          d="M70 22 Q78 20 85 24 L88 28 Q85 32 80 34 L75 32 Q70 30 68 26 L70 22 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 인도네시아 */}
        <path
          d="M75 34 Q82 32 85 35 L83 37 Q78 36 75 34 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 호주 */}
        <path
          d="M78 40 Q85 38 90 40 L92 42 Q88 44 83 43 L78 42 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 일본 */}
        <path
          d="M90 28 Q92 26 94 28 L93 30 Q91 29 90 28 Z"
          fill="rgba(255, 255, 255, 0.8)"
        />
        
        {/* 뉴질랜드 */}
        <path
          d="M92 45 Q94 44 95 46 L94 48 Q92 47 92 45 Z"
          fill="rgba(255, 255, 255, 0.8)"
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