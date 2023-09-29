(function () {
    const githubContact = document.getElementById("contact-github");
    const mailContact = document.getElementById("contact-mail");
    const linkedinContact = document.getElementById("contact-linkedin");
    const parent = document.getElementById("contact-parent");
    var active = document.getElementById(parent.dataset.currentId)
    active.classList.add("active");

    parent.onmousemove = (event) => {
        // Inspired from: https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
        if (event.pageX == null && event.clientX != null) {
            const eventDoc = (event.target && event.target.ownerDocument) || document;
            const doc = eventDoc.documentElement;
            const body = eventDoc.body;

            event.pageX =
                event.clientX +
                ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
            event.pageY =
                event.clientY +
                ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                ((doc && doc.clientTop) || (body && body.clientTop) || 0);
        }

        const rect = parent.getBoundingClientRect();
        const width = rect.width;
        const relPos = (event.clientX - rect.left) / width;
        
        if (active === githubContact) {
            if (relPos > 0.8) {
                switchTo(githubContact, linkedinContact);
            }
            else if (relPos > 0.6) {
                switchTo(githubContact, mailContact);
            }
        }
        else if (active === mailContact) {
            if (relPos < 0.2) {
                switchTo(mailContact, githubContact);
            }
            else if (relPos > 0.8) {
                switchTo(mailContact, linkedinContact);
            }
        }
        else { // linkedinContact
            if (relPos < 0.2) {
                switchTo(linkedinContact, githubContact);
            }
            else if (relPos < 0.4) {
                switchTo(linkedinContact, mailContact);
            }
        }
    };
    
    function switchTo(oldElement, element) {
        if (oldElement === element) {
            return;
        }
        
        oldElement.classList.remove("active");
        active = element;
        element.classList.add("active");
    }
})();
