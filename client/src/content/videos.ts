export interface VideoItem {
  id: string;
  title: string;
  url: string;
  embedUrl: string;
  description: string;
}

const videos: VideoItem[] = [
  {
    id: "RdSAp-2JqZE",
    title: "AIRET Innovation Demo",
    url: "https://youtu.be/RdSAp-2JqZE",
    embedUrl: "https://www.youtube.com/embed/RdSAp-2JqZE",
    description: "Discover AIRET's groundbreaking technology solutions"
  },
  {
    id: "tNoYuRgrwAQ",
    title: "Digital Health",
    url: "https://youtu.be/tNoYuRgrwAQ",
    embedUrl: "https://www.youtube.com/embed/tNoYuRgrwAQ",
    description: "Behind the scenes of our product development process"
  },
  {
    id: "CK12Y3AEqRQ",
    title: "Introduce Airet",
    url: "https://www.youtube.com/watch?v=CK12Y3AEqRQ&t=4s",
    embedUrl: "https://www.youtube.com/embed/CK12Y3AEqRQ?start=4",
    description: "Exploring the future possibilities with AI advancement"
  }
];

export default videos;