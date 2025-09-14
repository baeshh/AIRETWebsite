export interface NewsItem {
  title: string;
  date: string;
  summary: string;
  link: string;
}

const news: NewsItem[] = [
  {
    title: '1',
    date: '2025-09-12',
    summary: '1',
    link: '#'
  },
  {
    title: '2',
    date: '2025-09-13',
    summary: '2',
    link: '#'
  },
  {
    title: '3',
    date: '2025-09-14',
    summary: '3',
    link: '#'
  },
];

export default news;
