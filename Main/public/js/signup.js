const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document
    .querySelector('#newuser-info')
    .value.trim();
  const passwordEl = document
    .querySelector('#newuser-passoword')
    .value.trim();

  if (passwordEl.length >= 8 && usernameEl) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: usernameEl,
        password: passwordEl,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  } else {
    alert(
      'Please include both a username and password, and make sure your password is at least 8 characters long'
    );
  }
};

document
  .querySelector('#signup-box')
  .addEventListener('submit', signupFormHandler);
