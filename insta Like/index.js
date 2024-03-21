var box = document.querySelector('.box');
        function addLike() {
            var img2 = document.createElement('img');
                img2.src = 'heart.png';
                img2.classList.add('image2');
                box.appendChild(img2);
           setTimeout(() => {
                img2.remove();
            }, 2000);
        };