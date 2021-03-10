export interface Review {
  display_title: string;
  critics_pick: number;
  byline: string;
  headline: string;
  summary_short: string;
  publication_date: string;
  opening_date: string;
  date_updated: string;
  link: ILink;
  multimedia: IMultimedia;
}

interface ILink {
  url: string;
  suggested_link_text: string;
}

interface IMultimedia {
  src: string;
  width: number;
  height: number;
}
