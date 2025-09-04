// const TOKEN = "d3166b4b903d22fd0872b52bc62cf3ebe54736c8";
const API_URL = "http://127.0.0.1:8000/api";
const AUTH_URL = "http://127.0.0.1:8000";

export default class API {
  static async userLogin(body) {
    const response = await fetch(`${AUTH_URL}/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) return null;
    return await response.json();
  }

  static async userRegister(body) {
    const response = await fetch(`${API_URL}/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) return null;
    return await response.json();
  }

  static async getMovies(token) {
    const response = await fetch(`${API_URL}/movies/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }
    return await response.json();
  }

  static getNewMovie = async (movieId, token) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/movies/${movieId}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  };

  static rateMovie = async (movieId, body, token) => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/movies/${movieId}/rate_movie/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  };

  static async updateMovie(movieId, body, token) {
    const response = await fetch(`${API_URL}/movies/${movieId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return null;
    }
    return await response.json();
  }

  static async createMovie(body, token) {
    const response = await fetch(`${API_URL}/movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) return null;
    return await response.json();
  }

  static async deleteMovie(movieId, token) {
    const response = await fetch(`${API_URL}/movies/${movieId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
    if (!response.ok) return false;
    return true;
  }
}
