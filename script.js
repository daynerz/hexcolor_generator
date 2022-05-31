function myColor() {
  
    // Get value of the selected color
    var color = document.getElementById('selected_color').value;

    // Set color as background
    document.body.style.backgroundColor = color;

    // Store hex code
    document.getElementById('hexCode').textContent = color;
}

document.getElementById('selected_color').addEventListener('input', myColor);