const uploadArea = document.getElementById('uploadArea');

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = '#1DB954'; // Visual feedback
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  if (e.dataTransfer.files.length > 0) {
    const file = e.dataTransfer.files[0];
    if (file.type.includes('audio')) {
      alert(`File ready for upload: ${file.name}`);
      // Actual upload would happen here
    } else {
      alert('Please upload audio files only');
    }
  }
});


        // Player functionality
        const playBtn = document.querySelector('.play-btn');
        const playIcon = playBtn.querySelector('i');
        const progress = document.querySelector('.progress');
        const progressBar = document.querySelector('.progress-bar');
        const volumeLevel = document.querySelector('.volume-level');
        
        let isPlaying = false;
        
        // Toggle play/pause
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            playIcon.classList.toggle('fa-play');
            playIcon.classList.toggle('fa-pause');
        });
        
        // Update progress bar on click
        progressBar.addEventListener('click', (e) => {
            const pos = (e.pageX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
            progress.style.width = `${pos * 100}%`;
        });
        
        // Update volume level on click
        document.querySelector('.volume-bar').addEventListener('click', (e) => {
            const volBar = e.currentTarget;
            const pos = (e.pageX - volBar.getBoundingClientRect().left) / volBar.offsetWidth;
            volumeLevel.style.width = `${pos * 100}%`;
        });
        
        // Simulate progress for demo
        setInterval(() => {
            if (isPlaying) {
                const width = parseFloat(progress.style.width) || 0;
                if (width < 100) {
                    progress.style.width = `${width + 0.1}%`;
                } else {
                    progress.style.width = '0%';
                }
            }
        }, 100);
        
        // Upload area interaction
        // const uploadArea = document.getElementById('uploadArea');
        
        uploadArea.addEventListener('click', () => {
            alert('In a real application, this would open a file dialog to upload your music files');
        });
        
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#1DB954';
        });
        
        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = 'var(--text-tertiary)';
        });
        
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = 'var(--text-tertiary)';
            
            if (e.dataTransfer.files.length > 0) {
                const file = e.dataTransfer.files[0];
                if (file.type.includes('audio')) {
                    alert(`File ready for upload: ${file.name}`);
                    // In a real app, you would handle the file upload here
                } else {
                    alert('Please upload audio files only');
                }
            }
        });
        
        // Card hover effect
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.querySelector('.card-play').style.opacity = '1';
                card.querySelector('.card-play').style.transform = 'translateY(0)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.querySelector('.card-play').style.opacity = '0';
                card.querySelector('.card-play').style.transform = 'translateY(8px)';
            });
        });
        // document.querySelectorAll('.card').forEach(card => {
        //     card.addEventListener('mouseenter', () => {
        //         card.querySelector('.card-play').style.opacity = '1';
        //         card.querySelector('.card-play').style.transform = 'translateY(0)';
        //     });
            
        //     card.addEventListener('mouseleave', () => {
        //         card.querySelector('.card-play').style.opacity = '0';
        //         card.querySelector('.card-play').style.transform = 'translateY(8px)';
        //     });
        // });
