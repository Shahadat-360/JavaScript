class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    // showing profile using bootstrap 4
    showProfile(user) {
        this.clearAlert();
        console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
        `;
    }

    // clear Profile info
    clearProfile() {
        this.profile.innerHTML = '';
    }

    // showing alert 
    showAlert(message, className) {
        this.clearAlert();
        this.profile.innerHTML = '';
        let div = document.createElement('div');
        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        container.insertBefore(div, search);
    }

    // clear alert 
    clearAlert() {
        let alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

}