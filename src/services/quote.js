import axios from 'axios';

export const quoteClient = axios.create();

const createQuoteRequest = async (data) => {
  const response = await quoteClient.post('api/quotes/', data);

  return response.data;
};

const deleteQuoteRequest = async (quoteId) => {
  const response = await quoteClient.delete(`api/quotes/${quoteId}`);

  return response.data;
};

const getAllQuotesRequest = async () => {
  const response = await quoteClient.get('api/quotes');

  return response.data;
};

const getRandomQuoteRequest = async () => {
  const response = await quoteClient.get('api/quotes/random');

  return response.data;
};

const getSingleQuoteRequest = async (quoteId) => {
  const response = await quoteClient.get(`api/quotes/${quoteId}`);

  return response.data;
};

const updateQuoteRequest = async (data, quoteId) => {
  const response = await quoteClient.put(`api/quotes/${quoteId}`, data);

  return response.data;
};

export {
  createQuoteRequest,
  deleteQuoteRequest,
  getAllQuotesRequest,
  getRandomQuoteRequest,
  getSingleQuoteRequest,
  updateQuoteRequest,
};
