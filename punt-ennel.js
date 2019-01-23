// Changes example punt nl to https://example.nl
// and example punt ennel to https://example.nl.
//
// Assumes HTTPS.
// 
// Drop this in a Seamonkey script or some such.
document.body.innerHTML = document.body.innerHTML.replace(/([a-z_-]+)\s+punt\s+(nl|ennel)/gi, "<a href=\"http://$1.nl\">$1.nl</a>");