const fs = require("fs");

// Read the JSON file containing user data
const readUserData = () => {
  try {
    const data = fs.readFileSync("users.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading user data:", error);
    throw error;
  }
};

// Manipulate the data to include the total number of posts for each user
const manipulateUserData = (userData) => {
  try {
    const manipulatedData = userData.map((user) => {
      // Assume the user data structure includes a 'posts' property
      const totalPosts = user.posts ? user.posts.length : 0;
      return { ...user, totalPosts };
    });
    return manipulatedData;
  } catch (error) {
    console.error("Error manipulating user data:", error);
    throw error;
  }
};

// Write the modified data back to a new JSON file
const writeModifiedData = (modifiedData) => {
  try {
    const jsonString = JSON.stringify(modifiedData, null, 2);
    fs.writeFileSync("modifiedUsers.json", jsonString, "utf8");
    console.log("Modified data has been written to modifiedUsers.json");
  } catch (error) {
    console.error("Error writing modified data:", error);
    throw error;
  }
};

// Main function to orchestrate the process
const main = () => {
  try {
    // Step 1: Read user data from the JSON file
    const userData = readUserData();

    // Step 2: Manipulate the data to include the total number of posts
    const modifiedUserData = manipulateUserData(userData);

    // Step 3: Write the modified data back to a new JSON file
    writeModifiedData(modifiedUserData);
  } catch (error) {
    console.error("Error in the main process:", error);
  }
};

// Run the main function
main();
