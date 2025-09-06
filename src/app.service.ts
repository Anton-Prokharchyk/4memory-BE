import { Injectable } from '@nestjs/common';
import data from './seed';

type Anime = {
  id: string;
  name: string;
  description: string;
  img: string;
  type: string;
  episodes: string;
  status: string;
  genre: string;
  source: string;
  release: string;
  studio: string;
  'MPAA rank': string;
  peggy: string;
  duration: number;
  dubbing: string;
  sameAs: { id: string; name: string; img: string }[];
};

const animes: Anime[] = data;
@Injectable()
export class AppService {
  getAnimes(): Anime[] {
    return animes;
  }
  getHello(): string {
    return 'Hello World!';
  }
}
