import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ArtistsService } from './artists.service';

const artists = [
  {
    id: 1,
    name: 'Darin',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_1000,q_auto,w_1000/v1614350411/sample/Darin_Zanyar_in_2020__cropped_vh1qnm.jpg',
    price: 15000,
    tags: [
      { id: 0, group: 0, name: 'Artist' },
      { id: 0, group: 1, name: 'Pop' },
      { id: 1, group: 1, name: 'Ballad' },
    ],
    video: 'https://www.youtube.com/watch?v=JtwTFV-yFcs',
  },
  {
    id: 2,
    name: 'Lady Gaga',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_1135,q_auto,w_1135/v1614350455/sample/Lady_Gaga_-_2019_SAG_Awards_l1f1ri.jpg',
    price: 100000,
    tags: [
      { id: 0, group: 0, name: 'Artist' },
      { id: 0, group: 1, name: 'Pop' },
      { id: 2, group: 1, name: 'Electro-Pop' },
    ],
    video: 'https://www.youtube.com/watch?v=qrO4YZeyl0I',
  },
  {
    id: 3,
    name: 'Dj Cool Red Beard',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_405,q_auto,w_405/v1614350505/sample/Redbeardman_hmcdly.jpg',
    price: 700,
    tags: [
      { id: 1, group: 0, name: 'DJ' },
      { id: 3, group: 1, name: 'Hip-Hop' },
      { id: 4, group: 1, name: 'RnB' },
    ],
    video: 'https://www.youtube.com/watch?v=BKfpOJqyMWo',
  },
  {
    id: 4,
    name: 'BOP',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/dpr_auto,f_auto,q_auto/v1614350575/sample/A-996604-1409334991-7193.jpeg_uxldhz.jpg',
    price: 10000,
    tags: [
      { id: 1, group: 0, name: 'DJ' },
      { id: 5, group: 1, name: 'Electro' },
      { id: 6, group: 1, name: 'Drum and Bass' },
    ],
    video: 'https://www.youtube.com/watch?v=lwjf4GM1g00',
  },
  {
    id: 5,
    name: 'Zara Larsson',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_1000,q_auto,w_1000/v1614350607/sample/Zara_Larsson___The_Observatory_OC_05_02_2019__48498748537_hyjoqz.jpg',
    price: 200000,
    tags: [
      { id: 0, group: 0, name: 'Artist' },
      { id: 4, group: 1, name: 'RnB' },
      { id: 0, group: 1, name: 'Pop' },
    ],
    video: 'https://www.youtube.com/watch?v=tD4HCZe-tew',
  },
  {
    id: 6,
    name: 'Madonna',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_400,q_auto,w_400/v1614350319/sample/1980s_Madonna_style_pndhiv.jpg',
    price: 120000,
    tags: [
      { id: 0, group: 0, name: 'Artist' },
      { id: 0, group: 1, name: 'Pop' },
      { id: 5, group: 1, name: 'Electro' },
    ],
    video: 'https://www.youtube.com/watch?v=zpzdgmqIHOQ',
  },
  {
    id: 7,
    name: 'Iron Maiden',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_faces,h_1024,q_auto,w_1024/v1614350371/sample/Iron_Maiden_en_Costa_Rica_wpsqyn.jpg',
    price: 75000,
    tags: [
      { id: 2, group: 0, name: 'Band' },
      { id: 7, group: 1, name: 'Rock' },
      { id: 8, group: 1, name: 'Metal' },
    ],
    video: 'https://www.youtube.com/watch?v=X4bgXH3sJ2Q',
  },
  {
    id: 8,
    name: 'Eminem',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,q_auto,w_523/v1614350653/sample/Eminem__cropped_sj6zu4.jpg',
    price: 95000,
    tags: [
      { id: 0, group: 0, name: 'Artist' },
      { id: 3, group: 1, name: 'Hip-Hop' },
      { id: 9, group: 1, name: 'Rap' },
    ],
    video: 'https://www.youtube.com/watch?v=_Yhyp-_hX2s',
  },
  {
    id: 9,
    name: 'Jockez ABBA-covers',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,q_auto,w_480/v1614350721/sample/1398458_69cef692_ebqbdt.jpg',
    price: 1000,
    tags: [
      { id: 2, group: 0, name: 'Band' },
      { id: 10, group: 1, name: 'Cover' },
      { id: 0, group: 1, name: 'Pop' },
    ],
    video: 'https://www.youtube.com/watch?v=OHe15qbHoSU',
  },
  {
    id: 10,
    name: 'Post Malone',
    picture:
      'https://res.cloudinary.com/hthruuqgk/image/upload/c_crop,dpr_auto,f_auto,g_face,h_600,q_auto,w_600/v1614350263/sample/Post_Malone_Stavernfestivalen_2018__202032_wknv0r.jpg',
    price: 1000,
    tags: [
      { id: 0, group: 0, name: 'Artist' },
      { id: 3, group: 1, name: 'Hip-Hop' },
      { id: 9, group: 1, name: 'Rap' },
    ],
    video: 'https://www.youtube.com/watch?v=ApXoWvfEYVU',
  },
];

describe('ArtistsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: ArtistsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientSpy }],
    });

    service = TestBed.inject(ArtistsService);

    httpClientSpy.get.and.returnValue(new BehaviorSubject(artists));
  });

  afterEach(() => {
    httpClientSpy.get.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get artist list from the network', (done: DoneFn) => {
    const obs = service.getArtistList(true);
    expect(httpClientSpy.get).toHaveBeenCalled();
    obs.subscribe((arts) => {
      expect(arts.length).toBe(artists.length);
      done();
    });
  });

  it('should build the filtered artist list', (done: DoneFn) => {
    const obs = service.getArtistList(true);

    const cheapArtist = artists.sort((a, b) => a.price - b.price)[0];
    obs.subscribe((arts) => {
      expect(arts[0].price).toBe(cheapArtist.price);
      done();
    });
  });

  it('should filter on tags', (done: DoneFn) => {
    const obs = service.getArtistList(true);

    const taggedArtists = artists.filter((a) => a.tags.some((t) => t.id === 0 && t.group === 0));
    service.setArtistFilter({ descending: false, tags: [{ id: 0, group: 0, name: 'Artist' }] });
    obs.subscribe((arts) => {
      expect(arts.length).toBe(taggedArtists.length);
      expect(arts[0].tags.map((t) => t.id)).toContain(0);
      done();
    });
  });

  it('should return the current filter', () => {
    const filter = service.getCurrentFilter();
    expect(filter).toBeDefined();
    expect(filter.descending).toBe(false);
    expect(filter.tags.length).toBe(0);
  });
});
