# verified

# Betting Insights Platform

This is a prototype of a Betting Insights Platform built using Next.js, React, and Tailwind CSS. The platform provides data insights for sports betting through features such as Data Duels between teams and detailed player statistics.

## Features

- **Data Duel**: Compare statistics between two sports teams.
- **Player Stats**: View detailed statistics for individual players.
- **Responsive Design**: Styled with Tailwind CSS for a modern, responsive UI.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/stevenahanson/verified.git
    cd verified
    ```

2. **Install dependencies:**

    ```bash
    yarn install
    ```

3. **Run the development server:**

    ```bash
    yarn dev
    ```

4. **Open your browser and visit:**

    ```
    http://localhost:3000
    ```

## Project Structure

- `page.tsx`: Home page with links to Data Duel and Player Stats pages.
- `duel.tsx`: Page displaying the Data Duel between two teams.
- `players/page.tsx`: Page displaying detailed player statistics.
- `public/teams.json`: JSON file containing team data.
- `public/players.json`: JSON file containing player statistics.

## Usage

### Home Page

The home page provides links to start a Data Duel or view Player Stats.

### Data Duel

- Visit `/duel` to see a comparison between two teams.
- The page fetches and displays data from `teams.json`.

### Player Info

- Visit `/players` to see detailed statistics for individual players.
- The page fetches and displays data from `players.json`.

## Styling

This project uses Tailwind CSS for styling. 

## Data Files

Ensure that `teams.json` and `players.json` are correctly placed in the `public` directory.

## Example Data

Example data files are provided for teams and player stats. Here is the structure:

### teams.json

```json
[
  {
    "$id": 1,
    "name": "Washington Huskies",
    "sport_type": "usa_football",
    "stats": {
      "points_per_game": 37.6,
      "net_passing_yards_per_game": 350,
      "rushing_yards_per_game": 123.6
    }
  },
  {
    "$id": 2,
    "name": "Michigan Wolverines",
    "sport_type": "usa_football",
    "stats": {
      "points_per_game": 36,
      "net_passing_yards_per_game": 218.9,
      "rushing_yards_per_game": 159.5
    }
  }
]
```

### players.json

```json
[
  {
    "$id": 1,
    "team_id": 1,
    "first_name": "Micheal",
    "last_name": "Penix",
    "suffix": "Jr",
    "games_played": 10,
    "stats": {
      "yards_per_game": 332,
      "touchdowns_per_game": 2.5,
      "attempts_per_game": 0,
      "receptions_per_game": 0,
      "rushing_touchdowns": 0,
      "receiving_touchdowns": 0
    }
  },
  {
    "$id": 2,
    "team_id": 1,
    "first_name": "Dillon",
    "last_name": "Johnson",
    "games_played": 10,
    "stats": {
      "yards_per_game": 89.4,
      "touchdowns_per_game": 0,
      "attempts_per_game": 17.1,
      "receptions_per_game": 0,
      "rushing_touchdowns": 16,
      "receiving_touchdowns": 0
    }
  },
]
```

## Additional

- upgrade your subscription link appears on page, but is not clickable or routable to another page.
  

