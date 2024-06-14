var userLogout = async () => {
  var response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  return response;
};

var logout = async () => {
  try {
    var response = await userLogout();

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } catch (error) {
    alert(error.message);
  }
};

document.querySelector('#logout').addEventListener('click', logout);


