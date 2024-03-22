# Weather Forecast App

Weather Forecast App is a simple mobile-first web app that provides users with current weather conditions and forecasts.
The goal is to utilizing the OpenWeatherMap API for weather data and the Unsplash API for dynamic background images based on the current weather conditions, so that we can deliver a visually engaging and informative forecast app to user.

## Installation

Use the package manager npm or yarn to install the app.

```bash
npm install
# or
yarn install
```

## Environment Setup

To run the app properly on development environment, you must setting up API endpoint and Access keys for OpenWeatherMap, Unsplash, and Geoapify using your own keys.

To retrieve OpenWeatherMap API key, you can go here: https://home.openweathermap.org/api_keys
To retrieve Unsplash Access Key, you can go here: https://home.openweathermap.org/api_keys

After you successfully retrieved both keys, create a new .env file on root level project and copy paste the content from .env.example file, and fill each of the API key value.
It will looks like this later:

```bash
# BASE URL
NEXT_PUBLIC_OPEN_WEATHER_PUBLIC_BASE_URL=https://openweathermap.org
NEXT_PUBLIC_OPEN_WEATHER_API_BASE_URL=https://api.openweathermap.org
NEXT_PUBLIC_UNSPLASH_BASE_URL=https://api.unsplash.com

# SECRET KEYS
NEXT_PUBLIC_OPEN_WEATHER_API_KEY={your-api-key}
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY={your-access-key}
```

## Getting started

After package installation and environment setup, you can run the development server by these commands:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Core Technologies

1. NextJS v14.1.3 (https://nextjs.org/blog/next-14-1): Main framework for SSR and SSG.
2. TailwindCSS v3.4 (https://tailwindcss.com/blog/tailwindcss-v3-4): For utilities styling application.
3. Shadcn UI (https://ui.shadcn.com/docs): For UI component based utilities.
4. TypeScript v5 (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html): For static typing and type annotations needs.
5. SWR by Vercel (https://swr.vercel.app/docs/api): For client side data fetching and caching.
6. OpenWeatherMap API (https://openweathermap.org/api/one-call-3): API endpoint for fetching weather forecasts.
7. Unsplash API (https://unsplash.com/documentation#search-photos): API endpoint for dynamic background image based on weather condition.
8. React Testing Library (https://testing-library.com/docs/): For unit testing needs.

## Application Features and Functionalities

### Weather Data Display

- Display current weather conditions including temperature, humidity, wind speed, and a brief description (e.g., sunny, cloudy).
- Provide a 5-day weather forecast showing daily high and low temperatures and weather conditions.
- Dynamic background that adapt to current weather conditions (sunny, cloudy, rainy, or snowy). Also for sunny and cloudy, the dynamic background able to adapt based on day or night time.
- Provide description and advice based on daily weather condition.

### Dynamic Background

- Utilize the Unsplash API to fetch and display background images that correspond to the current weather conditions (e.g., sunny, rainy, cloudy, or snowy).
- Ensure that the background image adapt to the current weather conditions.

### Responsive Design

- Provide fully responsive (but mobile-first) for an optimal viewing experience across a wide range of devices.

## Project Structure

The project folder structure is represent by this tree-folder.

```bash
├── public
├── src
│ ├── app                       : NextJS App Routing
│ │ ├── containers              : Pages UI containers
│ │ │   └── [container-name]
│ │ │   └── hooks               : Dedicated custom hooks for the container
│ │ │
│ │ ├── favicon.ico
│ │ ├── layout.tsx              : NextJS root layout
│ │ ├── loading.tsx             : Main page loading UI
│ │ └── page.tsx                : Main page route
│ │
│ ├── components                : Project shared components
│ │   ├── common
│ │   ├── containers
│ │ │   └── [component-container-scope]
│ │ │   ├── **test**            : Dedicated test files for shared components
│ │ │   └── index.tsx
│ │ │
│ │ └── ui                      : Shadcn UI component base
│ │
│ ├── constants                 : Shared constants file
│ │   ├── [const].ts
│ │   └── mocks                 : Mock constant for testing needs
│ │
│ ├── helpers                   : Shared helpers function
│ │   ├── [helper].ts
│ │   └── **test**              : Dedicated test files for helpers
│ │     └── index.test.tsx
│ │
│ ├── hooks                     : Shared custom hooks
│ │ ├── common
│ │ │   ├── **test**            : Dedicated test files for custom hooks
│ │ │   │ └── index.test.tsx
│ │ │   └── [hooks].ts
│ │ │
│ ├── lib                       : Shared SDKs/libs
│ │   └── utils.ts
│ │
│ ├── services                  : Shared services
│ │   └── **test**              : Dedicated test files for shared services
│ │     └── index.test.tsx
│ │   ├── fetcher.ts
│ │   └── queries               : Folder for URL queries functions
│ │
│ ├── styles                    : Global styles
│ │   ├── common.css
│ │   └── globals.css
│ │
│ └── types                     : Types for shared UI or data structure
│     └── [type].ts
│
├── .env.example          : Example of local environment variables
├── .eslintrc.json        : Configuration file for ESLint
├── .gitignore            : Git files and folders to ignore
├── .prettierrc           : Configuration file for IDE Prettier
├── components.json       : Configuration file for Shadcn UI
├── jest.config.js        : Configuration file for React Testing Library - Jest
├── jest.setup.js         : Built in library for React Testing Library
├── next-env.d.ts         : TypeScript declaration file for Next.js
├── next.config.mjs       : Configuration file for Next.js
├── package-lock.json
├── package.json          : Project dependencies and scripts
├── postcss.config.js     : Configuration file for Tailwind Postcss
├── README.md             : Project documentation
├── tailwind.config.ts:   : Configuration file for Tailwind
└── tsconfig.json         : Configuration file for TypeScript
```

## Screenshots

- Mobile design

<p align="center">
  <img src="https://github.com/reggiegunawan88/weather-forecast-app/assets/44907916/06cfd4b8-b063-4720-9086-e5f08a933e9f">
</p>

- Desktop design

<p align="center">
  <img src="https://github.com/reggiegunawan88/weather-forecast-app/assets/44907916/b01f0f3f-b73c-4a30-afda-3934f2642c3d">
</p>

- Lighthouse Score

<p align="center">
  <img src="https://github.com/reggiegunawan88/weather-forecast-app/assets/44907916/bc904614-1b3e-4dad-91a4-b5b68f253ae5">
</p>

## Additional Reference

- Screen viewport: https://web.dev/blog/viewport-units?source=post_page-----102231e2ed56--------------------------------
- React design patterns: https://radixweb.com/blog/react-design-patterns

## Deployment

This application is deployed using Vercel. It also has an automatic auto deploy for both production and preview live URL (master branch: live prod, develop: preview).
You can see the live production link here: https://weather-forecast-app-reggie.vercel.app

Check [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Copyright

Copyright © 2024, Reggie Gunawan.
