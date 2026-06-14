/* 
    Public tracks be liek

    Update as of 6/13/2026
*/

function copyCurrentUrl() {
  const url = window.location.href;
  
  navigator.clipboard.writeText(url).then(() => {
    alert("URL copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}