import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/data';

export const addContent = async (content) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, content);
    return response.data;
  } catch (error) {
    console.error('Error adding content:', error);
    throw error;
  }
};

export const updateContent = async (content) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${content.id}`, content);
    return response.data;
  } catch (error) {
    console.error('Error updating content:', error);
    throw error;
  }
};

export const deleteContent = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting content:', error);
    throw error;
  }
};

export const getAll = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all content:', error);
    throw error;
  }
};

export const getOne = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching single content:', error);
    throw error;
  }
};

export const addPlayerToEvent = async (data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${data.id}`,data);
  
      console.log('Player added successfully:', response.data);
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };
  