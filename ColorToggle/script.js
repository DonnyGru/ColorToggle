document.addEventListener('DOMContentLoaded',function(){

    //Making image clickable and adding toggle function
    
       const clickMenu = document.getElementById('toggleMenu')
    
        clickMenu.addEventListener('click', function(){
            toggle();
        });
    
    // Function toggle colourmenu
    
        let toggle = function(){
        let menuColor = document.querySelector('.colormenu');
    
        menuColor.classList.toggle('show');
    
        }
    
    //Toggle on colouritems
    
        const liMenu = document.querySelector('.colormenu')
    
        liMenu.addEventListener('click', function(){
            toggle();
        });
    
    // Changing colour
        
        const homeList = document.querySelector('.home')
    
            homeList.addEventListener('click', function(){
            document.body.style.backgroundColor = 'rgba(241, 236, 236, 0.521)';
            
        });
        
        const greenList = document.querySelector('.green')
    
            greenList.addEventListener('click', function(){
            document.body.style.backgroundColor = 'rgb(39, 230, 64)';
            
        });
    
        const blueList = document.querySelector('.orange')
    
            blueList.addEventListener('click', function(){
            document.body.style.backgroundColor = 'rgb(245, 141, 5)';
            
        });
        
        const redList = document.querySelector('.red')
    
            redList.addEventListener('click', function(){
            document.body.style.backgroundColor = 'rgb(235, 27, 44)';
            
        });
        
        const yellowList = document.querySelector('.purple')
    
            yellowList.addEventListener('click', function(){
            document.body.style.backgroundColor = 'rgb(159, 9, 204)';
            
        });
        
    
     })