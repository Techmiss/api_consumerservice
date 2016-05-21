$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/users/Techmiss?client_id=ddc9d6683af18ca09c74&client_secret=373c57be7d848ba64d889acabc9b6d20438a805b"
    }).then(function(data) {
       $('.id').append(data.id);
       $('.email').append(data.email);
       $('.user').append(data.login);
       $('.organization').append(data.organizations_url);
    });
});