export const fetchYouTubeVideos = async (query) => {
    const API_KEY = "AIzaSyDzuF9AO4YhLdW7IlUmMGdGT59h1_6A6fE"
    const URL = https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=5&key=${API_KEY};
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.items.map((item) => ({
        title: item.snippet.title,
        link: https://www.youtube.com/watch?v=${item.id.videoId},
      }));
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      return [];
    }
  };