const updateForm = () => {
    const customerType = document.getElementById('customerType').value;
    const connectionsField = document.getElementById('connections');
    const connectionsLabel = document.getElementById('connectionsLabel');

    if (customerType === 'business') {
        connectionsField.style.display = 'block';
        connectionsLabel.style.display = 'block';
    } else {
        connectionsField.style.display = 'none';
        connectionsLabel.style.display = 'none';
    }
};