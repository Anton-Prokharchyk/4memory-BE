import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


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

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  getHello1(): string {
    return this.appService.getHello();
  }
  @Get()
  getAnimes(): Anime[] {
    return this.appService.getAnimes();
  }
}
