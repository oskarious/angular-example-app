# AngularExampleApp

This is a couple of hours of work done on a sunday evening and thus is far from something that can be called production ready.

## Built with:

- Angular 16.2
- Tailwindcss
- DaisyUI

## To run:

- Install dependencies (`yarn`)
- Start a dev server with with `ng s`
- To view the `/list` route, provide a username

## Missing stuff:

- Most tests, though some are defined:
  - Artists service [`artists.service.spec.ts`](src/app/services/artists/artists.service.spec.ts)
  - Price pipe [`price.pipe.spec.ts`](src/app/artist/pipes/price.pipe.spec.ts)
  - Landing component [`landing.component.spec.ts`](src/app/landing/pages/landing/landing.component.spec.ts)
- i18n
- SSR/Universal
- Any sort of session-to-session/stored state management (localStorage, a database etc)
