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
    title: "Smart home",
    url: "https://youtu.be/RdSAp-2JqZE",
    embedUrl: "https://www.youtube.com/embed/RdSAp-2JqZE",
    description: "Next-generation lifestyle technology enhancing convenience and hygiene at home"
  },
  {
    id: "tNoYuRgrwAQ",
    title: "Digital Health",
    url: "https://youtu.be/tNoYuRgrwAQ",
    embedUrl: "https://www.youtube.com/embed/tNoYuRgrwAQ",
    description: "Smart digital innovation for health management and well-being"
  },
  {
    id: "CK12Y3AEqRQ",
    title: "Introduce Airet",
    url: "https://www.youtube.com/watch?v=CK12Y3AEqRQ&t=4s",
    embedUrl: "https://www.youtube.com/embed/CK12Y3AEqRQ?start=4",
    description: "Presenting an innovative IoT-based smart shoe-care system"
  }
];

export default videos;