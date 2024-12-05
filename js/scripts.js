// Tab Navigation Logic
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.getAttribute('data-tab');
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // Add active class to the clicked tab
    tab.classList.add('active');
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    // Show the clicked tab's content
    document.getElementById(tabName).classList.add('active');
  });
});



// Payment Button Handlers
function handlePayPal() {
  alert('Redirecting to PayPal...');
}

function handleRazorPay() {
  alert('Redirecting to RazorPay...');
}


