// Navbar 
        const toggleBtn = document.getElementById('toggle-btn')
        const navList = document.querySelector('.nav-list')

        toggleBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
        })
        /*
        const cursor1 = document.querySelector('.cursor');
        document.addEventListener('mousemove', (e) => {
            cursor1.style.left = e.clientX + 'px'
            cursor1.style.top = e.clientY + 'px'
        })*/
