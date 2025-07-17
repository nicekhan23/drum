// Drum machine functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Mapping of keys to drum names for display
    const drumNames = {
        'Q': 'Heater 1',
        'W': 'Heater 2', 
        'E': 'Heater 3',
        'A': 'Heater 4',
        'S': 'Clap',
        'D': 'Open-HH',
        'Z': 'Kick-n\'-Hat',
        'X': 'Kick',
        'C': 'Closed-HH'
    };
    
    // Get display element
    const display = document.getElementById('display');
    
    // Function to play drum sound
    function playDrum(key) {
        const audio = document.getElementById(key);
        const drumPad = audio.parentElement;
        
        if (audio) {
            // Reset audio to start
            audio.currentTime = 0;
            audio.play();
            
            // Update display
            display.textContent = drumNames[key];
            
            // Add visual feedback
            drumPad.classList.add('active', 'hit');
            
            // Remove active class after a short delay
            setTimeout(() => {
                drumPad.classList.remove('active', 'hit');
            }, 100);
        }
    }
    
    // Add click event listeners to drum pads
    const drumPads = document.querySelectorAll('.drum-pad');
    drumPads.forEach(pad => {
        pad.addEventListener('click', function() {
            const key = this.textContent.trim();
            playDrum(key);
        });
    });
    
    // Add keyboard event listener
    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase();
        const validKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
        
        if (validKeys.includes(key)) {
            playDrum(key);
        }
    });
    
    // Prevent default behavior for drum machine keys
    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase();
        const validKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
        
        if (validKeys.includes(key)) {
            event.preventDefault();
        }
    });
    
    // Optional: Add mouse down/up effects for better interaction
    drumPads.forEach(pad => {
        pad.addEventListener('mousedown', function() {
            this.classList.add('active');
        });
        
        pad.addEventListener('mouseup', function() {
            setTimeout(() => {
                this.classList.remove('active');
            }, 100);
        });
        
        pad.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
});
