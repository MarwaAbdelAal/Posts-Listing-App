## About the Project

#### Posts listing app has 2 pages (Home, Favorites) when we favorite a post it's added to localstorage. Designed to be mobile-first.

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Demo

Check out the live demo on [Vercel](https://posts-listing-rho.vercel.app/) or [Github Pages](https://marwaabdelaal.github.io/Posts-Listing/).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/MarwaAbdelAal/Posts-Listing.git
```

2. Navigate to the project directory:

```bash
cd Posts-Listing
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit http://localhost:3000.

## Usage

To navigate through the application, use the Home and Favorites links in the navigation bar. The active link will be highlighted, and you can add posts to your favorites if you hit the heart icon on each post.

## Features

- **Responsive UI**: Pages adapts to different screen sizes and highlights the active link in the navigation bar.
- **Loading Spinner**: Displays a spinner while images are loading to enhance the user experience.
- **Favorite Posts**: Ability to favorite posts and persist this state using localStorage.
- **Dynamic Content**: Conditionally render content based on the active route and the loading state.

## Technologies Used

- **Next.js v14**.
- **React v18**.
- **Sass** for styling.
- **React Icons**.
