// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search Input Event Listener
searchUser.addEventListener("keyup", e => {
  // Get Input text
  const userText = e.target.value;
  if (userText !== "") {
    // Make HTTP Call to API
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        // Show Repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
