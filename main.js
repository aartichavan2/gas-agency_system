const firebaseConfig = {
    apiKey: "AIzaSyAwfXknbFyDlK_QIiKemrosZc37A73WYr4",
    authDomain: "fir-contact-c250f.firebaseapp.com",
    databaseURL: "https://fir-contact-c250f-default-rtdb.firebaseio.com",
    projectId: "fir-contact-c250f",
    storageBucket: "fir-contact-c250f.appspot.com",
    messagingSenderId: "38367688615",
    appId: "1:38367688615:web:131a7ec9995dc36a4de882",
    measurementId: "G-7H1ZRZ13NM"
  };
  firebase.initializeApp(firebaseconfig);
  var messagesRef = firebase.database().ref('messages');
  document.getElementById('contactform').addEventListener('submit' , submitform);
  function submitform(e){
    e.preventDefault();
    var name = getInputval('name');
    var email = getInputval('email');
    var phone = getInputval('phone');
    var message = getInputval('message');
    saveMessage(name, email, phone, message);
    document.querySelector('.alert').computedStyleMap.display = 'block';
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    },3000);
    document.getElementById('contactform').reset();
  }
  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}

  


  