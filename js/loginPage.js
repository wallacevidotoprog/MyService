function loginDefault() {


  let email = (document.getElementById("email").value).replace(' ', '');
  let pass = (document.getElementById("password").value).replace(' ', '');

  if (email.length > 0 && pass.length > 0) {
    var dados = {
      input: 'host',
      email: email,
      pass: pass
    }

    console.log(dados)
    $.post('../connection/validate.php', dados, function (res) {
      console.log(res);
      document.getElementById('info').innerHTML = res;

    })
  }
  else {
    console.log('err ' + email.length + ' ' + pass.length);
  };


}


function handleCredentialResponse(response) {
  const responsePayload = decodeJwtResponse(response.credential);
  var dados = {
    input: 'google',
    id_google: responsePayload.sub,
    name: responsePayload.name,
    email: responsePayload.email,
    image: responsePayload.picture
  }
  $.post('../connection/validate.php', dados, function (res) {

    if(res.startsWith('..')){
      window.location.href = res;
    }
    else if(res.startsWith('Email')){
      alert(res);
    }
    else{
      alert(res);
    }
    document.getElementById('info').innerHTML = res;
  });
}



window.onload = function () {
  google.accounts.id.initialize({
    client_id: "299185048559-67k2nff689h21ocq98af5r86lmmpu7c9.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), {
    theme: "filled_black",
    size: "large",
    type: "standard",
    shape: "pill",
    locale: "pt-BR",
    logo_alignment: "left",
  } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}
function decodeJwtResponse(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}