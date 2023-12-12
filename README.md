# Movie List App

## Introduction

This is a movie app with react, typescript and RTK queries

## Installation

To install and use this package, you can follow these simple steps:

**Run these commands**:

```bash
cd front-end-assignment
npm install
npm start
```

## Technologies Used

- **React**: This app is build on React.js framework.
- **TypeScript**: The code in the application is in Typescript (ts, tsx).
- **Redux Toolkit Query**: For data fetching, loading and error handling as well as state management, RTK Queries has been used.
- **Tailwind CSS**: For responsive design and styling I used tailwind css.
- **Material UI**: I have also utilized some of the styled componets from material ui as a styled components.
- **React Router**: I have used react router to redirect pages.

## Features

- **Movie List**: Users are able to see a list of 20 movies per page.
- **Pagination**: User can go through different pages using pagination features. It will retrive new list of 20 movies. If the user wants to go back to the previous page, RTK-quries will handle the data fetching efficiently.
- **Details Page**: Users can check for movie details by clicking on a movie card. It will redirect user to that movie's detailes pageto see detailed information about each movie. This functionality has been implemented using React-router.
- **Search Functionalities**: User can Search for a movie, it will retrive the data from all the data. Search funtionalities also inclues search as you type.
- **Styling and responsive layout**: The application has been styled with tailwindcss for responsive layout and designs. I tried to follow the reference image that was attached but I inclued some of my inputs as well.
- **Filter and Sort**: From the filter and sort dropdown on the top right corner, user can filter and sort movie list by Popularity, Rating (High-Low, Low-High), Relased Date (Newest-Oldest, Oldest-Newest).
- **Loading and Error Handling**: With utiliaing useEffect hooks and RTK-queries, while api data fetching, leading and error have been handled.
# movie-app-w-rtk-queries
