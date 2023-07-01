const getalert = document.getElementById("alert");


function Wallet() {
    getalert.style.top='0';
}

setInterval(() => {
    document.getElementById("alert").style.top = "-100%";
}, 5000);


// Create a button element
const button = document.createElement('button');
button.textContent = 'Share On WhatsApp';

// Add click event listener to the button
button.addEventListener('click', () => {
  // Define the WhatsApp share URL
  const text = 'Check out this awesome website!';
  const url = encodeURIComponent(window.location.href);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;

  // Open the WhatsApp share URL in a new tab
  window.open(whatsappUrl, '_blank');

  // Update the share counter
  updateShareCounter();
});

// Create a share counter element
const shareCounter = document.createElement('span');
shareCounter.textContent = getShareCountText();

// Function to update the share counter
function updateShareCounter() {
  // Get the current share count from local storage
  let currentCount = parseInt(localStorage.getItem('shareCount')) || 0;

  // Increment the share count
  const newCount = currentCount + 1;

  // Update the share count in local storage
  localStorage.setItem('shareCount', newCount);

  // Update the share counter text
  shareCounter.textContent = getShareCountText();
}

// Function to get the share count text
function getShareCountText() {
  // Get the share count from local storage
  const count = parseInt(localStorage.getItem('shareCount')) || 0;

  // Generate the share count text
  return `${count}`;
}

// Function to clean local storage after 1 hour
function cleanLocalStorage() {
  // Remove the share count from local storage
  localStorage.removeItem('shareCount');
}

// Schedule the cleanLocalStorage function to run after 1 hour
setTimeout(cleanLocalStorage, 60 * 60 * 1000);

// Append the button and share counter to the document body
document.getElementById("shareme").appendChild(button);
document.getElementById("share_count").appendChild(shareCounter);


// Close the widthdraw page
const widthdraw_page = document.getElementById("widthdraw_page");

function open_widthdraw_page() {
  widthdraw_page.style.top = "0";
}
function close_widthdraw_page() {
  widthdraw_page.style.top = "-1000%";
}
// Loading function for embed content
// Query the elements
const iframeEle = document.getElementById('embed_page');
const loadingEle = document.getElementById('loading');

iframeEle.addEventListener('load', function () {
    // Hide the loading indicator
    loadingEle.style.display = 'none';

    // Bring the iframe back
    iframeEle.style.opacity = 1;
});
