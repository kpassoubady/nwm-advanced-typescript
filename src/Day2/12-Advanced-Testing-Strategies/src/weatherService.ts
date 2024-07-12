// src/weatherService.ts
import axios from 'axios';

export const getWeather = async (city: string): Promise<string> => {
  const response = await axios.get(`https://weather.example.com/${city}`);
  return response.data.weather;
};

export const getTemperature = async (city: string): Promise<number> => {
  const response = await axios.get(`https://weather.example.com/${city}`);
  return response.data.temperature;
};
