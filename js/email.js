document.getElementById('sender').addEventListener("click", sendEmail);

function GetSubject() {
  var subject = "Subject : " + document.getElementById('subject').value + '\n';
  return subject;
};

function GetComments() {
  var comments = "Comment: " + document.getElementById('comment').value + '\n';
  return comments;
};

function sendEmail() {
  var email = 'calltgbs@gmail.com';
  var subject = GetSubject();
  var comments = GetComments();
  var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(comments);
  window.location.href = mailto_link;
}    