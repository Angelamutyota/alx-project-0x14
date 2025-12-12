# CineSeek – Movie Discovery App

CineSeek is a modern movie exploration application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It integrates with the **MoviesDatabase API** to let users browse movies, view details, and search by year or genre.

---

## API Overview
The MoviesDatabase API provides structured, frequently updated data for more than **9 million** movies, series, and episodes, and over **11 million** actors and crew.  
It includes rich metadata such as titles, ratings, genres, cast, release info, images, and even award history.

The API supports filtering, sorting, searching, and accessing resources like titles, actors, episodes, and curated top lists.

---

## Version
The documentation does not explicitly state a version number, but the current API version referenced is the **latest MoviesDatabase public API**.

---

## Available Endpoints

### **Titles**
- **GET /titles**  
  Returns a list of titles filtered by various query parameters (genre, year, type, sorting, etc.).

- **GET /titles/{id}**  
  Fetches detailed information for a specific movie or series by IMDb ID.

- **GET /titles/{id}/ratings**  
  Returns rating and vote count for a title.

- **GET /titles/x/upcoming**  
  Lists upcoming movies based on optional filters.

- **GET /x/titles-by-ids**  
  Fetches multiple titles based on an array of IMDb IDs.

### **Search**
- **GET /titles/search/keyword/{keyword}**  
  Searches titles by keyword.

- **GET /titles/search/title/{title}**  
  Searches titles by actual title or partial title (supports exact match).

- **GET /titles/search/akas/{aka}**  
  Searches titles by alternate names (AKA).

### **Episodes & Seasons**
- **GET /titles/series/{id}**  
  Lists episodes of a series (light episode format).

- **GET /titles/seasons/{id}**  
  Returns the total number of seasons in a series.

- **GET /titles/series/{id}/{season}**  
  Lists episodes within a specific season.

- **GET /titles/episode/{id}**  
  Returns full data for a specific episode.

### **Actors**
- **GET /actors**  
  Lists actors with pagination.

- **GET /actors/{id}**  
  Fetches details for a single actor by IMDb ID.

### **Utils**
- **GET /title/utils/titleType**  
  Returns the list of supported title types.

- **GET /title/utils/genres**  
  Returns available genres.

- **GET /title/utils/lists**  
  Returns predefined top lists (e.g., most popular movies, top-rated movies).

---

## Request and Response Format

### **Request Format**
Most endpoints accept optional query parameters such as:

| Parameter | Type | Description |
|----------|------|-------------|
| `limit` | number | Number of results per page (max 50) |
| `page` | number | Page number |
| `genre` | string | Filter by genre (case-sensitive) |
| `year` | number | Filter by exact release year |
| `startYear` / `endYear` | number | Range-based year filters |
| `sort` | string | Sorting options (`year.incr`, `year.decr`) |
| `info` | string | Controls level of detail (`mini_info`, `base_info`, etc.) |
| `list` | string | Predefined curated lists |

### **Response Format**
All endpoints return an object with a `results` key:

```json
{
  "results": [...],
  "page": 1,
  "next": "/titles?page=2",
  "entries": 50
}
