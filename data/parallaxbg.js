const overlay = document.querySelector('#overlay');
if (overlay) {
    let overlayAmt = parseInt(overlay.getAttribute('data-amt'));
    if (isNaN(overlayAmt)) overlayAmt = 1;
    for (let i = 0; i < overlayAmt; i++) {
        const newChild = document.createElement('div');
        newChild.className = `overlay-${i+1}`;
        overlay.appendChild(newChild);
    }
    document.querySelector('#container').appendChild(overlay);
}

console.log("Image Overlay by seymour schlong -https://mspfa.com/?s=37172");