document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserData() {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        const dataContainer = document.getElementById("api-data");

        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear loading message
            dataContainer.innerHTML = "";

            // Create a list to display users
            const userList = document.createElement("ul");

            // Loop through users and create list items
            users.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = "Failed to load user data.";
            console.error("Error fetching user data:", error);
        }
    }

    // Run the function once the DOM is fully loaded
    fetchUserData();
});
