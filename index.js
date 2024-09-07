const axios = require('axios');

class ProEmailFinder {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://pro-email-finder.p.rapidapi.com/find-email';
  }

  async findEmail(first_name, last_name, domain) {
    const options = {
      method: 'POST',
      url: this.baseUrl,
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': 'pro-email-finder.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        first_name: first_name,
        last_name: last_name,
        domain: domain
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching email: ${error.message}`);
    }
  }
}

module.exports = ProEmailFinder;
