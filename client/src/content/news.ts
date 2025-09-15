export interface NewsItem {
  title: string;
  date: string;
  summary: string;
  link: string;
  image?: string;
}

import awardImage from "@assets/image_1757913764301.png";

const news: NewsItem[] = [
  {
    title: 'Airret Wins Award at 2024 Startup Incubation Competition',
    date: '2024-11-22',
    summary: 'Recognized for IoT Smart Shoe-Care Cabinet with UV Odor Filter, Dust Collection, and Heat Pump',
    link: 'https://cc.newdaily.co.kr/site/data/html/2024/11/22/2024112200262.html',
    image: awardImage
  },
  {
    title: 'Innovation Showcase',
    date: '2024-10-15',
    summary: 'Latest developments in smart home technology',
    link: '#'
  },
  {
    title: 'Technology Partnership',
    date: '2024-09-30',
    summary: 'Strategic collaboration announcement',
    link: '#'
  },
];

export default news;
