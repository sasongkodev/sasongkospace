// src/services/linkPreview.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_LINK_PREVIEW_API;

export const fetchLinkPreview = async (url) => {
  try {
    const response = await axios.get(
      `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching link preview:", error);
    return null;
  }
};
