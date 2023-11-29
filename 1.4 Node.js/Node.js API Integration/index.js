const axios = require("axios");

// Function to fetch data from an external API (JSONPlaceholder)
const fetchUsersWithPosts = async () => {
  try {
    const usersResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = usersResponse.data;

    const usersWithPosts = await Promise.all(
      users.map(async (user) => {
        const postsResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
        );
        const posts = postsResponse.data;
        return { ...user, posts };
      })
    );

    return usersWithPosts;
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    throw error;
  }
};
