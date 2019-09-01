//init gitHub
const gitHub = new GitHub;

// int UI
const ui = new UI;

// search input
const searchUser = document.getElementById('search-user');

// search input user
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if(userText !== '') {
        // make http call
        gitHub.getUser(userText)
              .then(data => {
                if(data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User Not Found', 'alert alert-danger');

                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
              });
    } else {
        // clear profile
        ui.clearProfile();
    }




});