



// Whenever the user clicks a external link, a popup would appear asking if the user wants to leave our website.

let link = document.getElementById("externalLink")


document.body.addEventListener('click', function (event) {
    // Find the closest anchor tag if the user clicked an element inside a link (like an icon)
    const link = event.target.closest('a');
    
    // Exit early if no link was clicked, or if it doesn't have an href attribute
    if (!link || !link.href) return;

    // Check if the link is external by comparing hostnames
    if (link.hostname !== window.location.hostname) {
        const leaveSite = window.confirm("You are leaving our website. Do you want to continue?");
        
        // If the user clicks "Cancel", block the browser navigation
        if (!leaveSite) {
            event.preventDefault();
        }
    }
});