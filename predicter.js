const axios = require('axios');

const graphqlEndpoint = 'https://api.ftcscout.org/graphql'; // Replace with your actual GraphQL endpoint

async function getTotalOPR(teamNumber) {
  try {
    const response = await axios.post(graphqlEndpoint, {
      query: `
        query {
          teamByNumber(number: ${teamNumber}) {
            quickStats(season: 2023) {
              tot {value}
            }
          }
        }
      `,
    });
    console.log(response.data.data.teamByNumber.quickStats.tot.value);
    return response.data.data.teamByNumber.quickStats.tot.value;
  } catch (error) {}
}

