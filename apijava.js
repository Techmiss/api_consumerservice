$(document).ready(function() {
    $.ajax({
        url: "http://rest-service.guides.spring.io/dressing_up"
    }).then(function(data) {
       $('.dressing_up-reason').append(data.reason);
       $('.dressing_up-mode').append(data.mode);
    });
});