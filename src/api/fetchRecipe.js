import axios from 'axios';

const API_KEY = 'LWa8VOmCHL+y6B/kIYFM+g==7nuJ0cey9kHvWP3e';
const BASE_URL = 'https://api.api-ninjas.com/v1/recipe';

const getRecipe = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${query}`, {
      headers: { 'X-Api-Key': API_KEY },
      contentType: 'application/json',
    });

    return response.data;
    
  } catch (error) {
    console.error('Error fetching recipe data:', error);
    throw error;
  }
};

export default getRecipe;
