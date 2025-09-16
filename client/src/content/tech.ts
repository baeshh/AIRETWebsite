export interface City {
  id: string;
  name: string;
  x: number;
  y: number;
  color: string;
}

export interface Connection {
  from: string;
  to: string;
  path: string;
  delay: number;
}

export const cities: City[] = [
  { id: 'seoul', name: 'Seoul', x: 720, y: 180, color: '#06b6d4' },
  { id: 'newyork', name: 'New York', x: 200, y: 160, color: '#3b82f6' },
  { id: 'la', name: 'Los Angeles', x: 120, y: 200, color: '#10b981' },
  { id: 'vegas', name: 'Las Vegas', x: 140, y: 190, color: '#f59e0b' }
];

export const connections: Connection[] = [
  {
    from: 'seoul',
    to: 'newyork',
    path: 'M720,180 Q460,120 200,160',
    delay: 0
  },
  {
    from: 'seoul', 
    to: 'la',
    path: 'M720,180 Q420,240 120,200',
    delay: 0.7
  },
  {
    from: 'seoul',
    to: 'vegas', 
    path: 'M720,180 Q430,185 140,190',
    delay: 1.4
  },
  {
    from: 'newyork',
    to: 'la',
    path: 'M200,160 Q160,180 120,200',
    delay: 2.1
  },
  {
    from: 'newyork',
    to: 'vegas',
    path: 'M200,160 Q170,175 140,190', 
    delay: 2.8
  },
  {
    from: 'la',
    to: 'vegas',
    path: 'M120,200 Q130,195 140,190',
    delay: 3.5
  }
];

export const techCards = [
  {
    title: "AI Pipeline",
    description: "Advanced machine learning algorithms for intelligent shoe care optimization"
  },
  {
    title: "Sterilization Tech", 
    description: "UV-C sterilization with smart sensors and automated deodorization system"
  }
];