import { motion } from "framer-motion";
import worldMapImage from "@assets/image_1758118119885.png";

export default function WorldMap() {
  // 1. 좌표 변환 함수는 그대로 사용합니다.
  const latLongToImageCoords = (lat: number, long: number) => {
    const x = ((long + 180) / 360) * 100;
    // y 좌표 계산식은 이미지에 맞게 미세 조정이 필요할 수 있습니다.
    const y = ((80 - lat) / 160) * 100; // y축 범위를 조금 수정하여 정확도를 높입니다.
    return { x, y };
  };

  // *** 이 부분을 수정합니다 ***
  // 2. 스크린샷 분석을 통한 정확한 도시 위치 (% 좌표)
  const cityData = {
    seoul: { name: "Seoul", x: 67, y: 26, labelPosition: "right" },
    vegas: { name: "Las Vegas", x: 36.6, y: 25, labelPosition: "top" },
    nyc: { name: "New York", x: 40.5, y: 25, labelPosition: "bottom" },
    la: { name: "Los Angeles", x: 35, y: 26, labelPosition: "left" },
  };

  // 3. cityData를 cities 객체로 직접 사용
  const cities = cityData;
  // *** 여기까지 수정 ***


  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#f8fafc",
      }}
      data-testid="world-map"
    >
      {/* 실제 세계 지도 이미지 */}
      <img
        src={worldMapImage}
        alt="World Map"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: 0.9,
        }}
      />

      {/* 도시 마커들 */}
      {Object.entries(cities).map(([key, city]) => (
        <motion.div
          key={key}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: key === "seoul" ? 0 : 0.5,
            duration: 0.6,
            type: "spring",
          }}
          style={{
            position: "absolute",
            left: `${city.x}%`,
            top: `${city.y}%`,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: key === "seoul" ? "16px" : "12px",
              height: key === "seoul" ? "16px" : "12px",
              borderRadius: "50%",
              background: key === "seoul" ? "#ef4444" : "#fbbf24",
              border: "3px solid white",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            }}
            data-testid={`city-marker-${key}`}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: key === "seoul" ? 0.3 : 0.8 }}
            style={{
              position: "absolute",
              ...(city.labelPosition === "right" && {
                left: "100%",
                top: "50%",
                transform: "translateY(-50%)",
                marginLeft: "12px"
              }),
              ...(city.labelPosition === "left" && {
                right: "100%",
                top: "50%",
                transform: "translateY(-50%)",
                marginRight: "12px"
              }),
              ...(city.labelPosition === "top" && {
                bottom: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginBottom: "8px"
              }),
              ...(city.labelPosition === "bottom" && {
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                marginTop: "8px"
              }),
              background: "rgba(0, 0, 0, 0.8)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "600",
              whiteSpace: "nowrap",
            }}
          >
            {city.name}
          </motion.div>
        </motion.div>
      ))}


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
          textAlign: "center",
          zIndex: 15,
          width: "fit-content",
          minWidth: "300px"
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.2rem",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "4px",
          }}
        >
          Global Innovation Network
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            color: "#6b7280",
            fontWeight: "500",
          }}
        >
          Seoul → Las Vegas • New York • Los Angeles
        </p>
      </motion.div>
    </div>
  );
}