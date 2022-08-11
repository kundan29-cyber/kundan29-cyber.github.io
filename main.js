document.getElementById('button1').addEventListener('click',loadUsers);

function loadUsers()
{
    var xhr = new XMLHttpRequest;
    xhr.open('GET','Users.json',true);
    xhr.onload = function()
    {
        if(this.status == 200)
        {
            var users = JSON.parse(this.responseText);
            var output = '';
            for(var i in users)
            {
                output += '<ul>'+   '<li> Id: ' + users[i].id + '</li>'+ 
                                    '<li> Name: ' + users[i].name + '</li>'+
                                    '<li> Username: ' + users[i].username + '</li>'+
                                    '<li> Email: ' + users[i].email + '</li>'+
                                    '<li> Address: ' + users[i].address + '</li>'+
                                    '<li> Geography: ' + users[i].geo + '</li>'+
                                    '</ul>';
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}