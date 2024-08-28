let searchBtn = document.getElementById('searchBtn');
let searchUser = document.getElementById('searchUser');
let ui = new UI();
// add event listener 
searchBtn.addEventListener('click', e => {
    let userText = searchUser.value;
    if (userText != '') {
        fetch(`https://api.github.com/users/${userText}`)
            .then(data => data.json())
            .then(data => {
            if (data.message === 'Not Found') {
                // show alert 
                ui.showAlert('Please Enter Valid UserName', 'alert alert-danger');
            } else {
                // show profile 
                ui.showProfile(data);
            }
        })
    }
    else {
        ui.clearProfile();
    }
    searchUser.value = '';
})

// /define function 