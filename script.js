document.addEventListener("DOMContentLoaded", function() {
    const roomStatusDiv = document.getElementById('room-status');
    const alertBox = document.getElementById('alert-box');

    function updateRoomStatus() {
        roomStatusDiv.innerHTML = `
            <div class="room-status">
                <h2>Room 1 Status</h2>
                <p>Temperature: Normal</p>
                <p>Smoke Level: No Smoke</p>
                <p>Noise Level: Low</p>
                <p>Occupancy: Full</p>
            </div>
            <div class="room-status">
                <h2>Room 2 Status</h2>
                <p>Temperature: High</p>
                <p>Smoke Level: Smoke Detected!</p>
                <p>Noise Level: High</p>
                <p>Occupancy: Full</p>
            </div>
            <div class="room-status">
                <h2>Room 3 Status</h2>
                <p>Temperature: Normal</p>
                <p>Smoke Level: All Clear</p>
                <p>Noise Level: Moderate</p>
                <p>Occupancy: Half</p>
            </div>
            <div class="room-status">
                <h2>Room 4 Status</h2>
                <p>Temperature: Normal</p>
                <p>Smoke Level: Normal</p>
                <p>Noise Level: Low</p>
                <p>Occupancy: Empty</p>
            </div>
        `;
    }

    function showAlert(message) {
        alertBox.innerHTML = `<p>${message}</p>`;
    }

    // Simulate real-time alert after 3 seconds
    setTimeout(() => showAlert('Smoke detected in Room 2!'), 3000);

    updateRoomStatus();
});
