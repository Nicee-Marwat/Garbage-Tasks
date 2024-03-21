var btn = document.querySelector('button');
    var makeFriend = document.querySelector('h2');
    btn.addEventListener('click', () => {
        if(makeFriend.innerHTML.toLowerCase() === 'stranger'){
            makeFriend.innerHTML = 'Friend';
            makeFriend.classList.remove('red');
            makeFriend.classList.add('green');
            btn.innerHTML = 'Remove Friend';
        }
        else
        if(makeFriend.innerHTML.toLowerCase() === 'friend'){
            makeFriend.innerHTML = 'Stranger';
            makeFriend.classList.remove('green');
            makeFriend.classList.add('red');
            btn.innerHTML = 'Add Friend';
        }

    });