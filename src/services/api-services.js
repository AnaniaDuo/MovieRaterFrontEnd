const TOKEN = "d3166b4b903d22fd0872b52bc62cf3ebe54736c8";
const API_URL = "http://127.0.0.1:8000/api";

export default class API {
  static async getMovies() {
    const response = await fetch(`${API_URL}/movies/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
    });

    if (!response.ok) {
      return null;
    }
    return await response.json();
  }

  static getNewMovie = async (movieId) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/movies/${movieId}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token d3166b4b903d22fd0872b52bc62cf3ebe54736c8",
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  };

  static rateMovie = async (movieId, body) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/movies/${movieId}/rate_movie/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token d3166b4b903d22fd0872b52bc62cf3ebe54736c8",
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  };

  static async updateMovie(movieId, body) {
    const response = await fetch(`${API_URL}/movies/${movieId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return null;
    }
    return await response.json();
  }

  static async createMovie(body) {
    const response = await fetch(`${API_URL}/movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return null;
    return await response.json();
  }

  static async deleteMovie(movieId) {
    const response = await fetch(`${API_URL}/movies/${movieId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
    });
    if (!response.ok) return false;
    return true;
  }
}
