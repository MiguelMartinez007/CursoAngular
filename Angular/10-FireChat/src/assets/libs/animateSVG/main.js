$(document).ready(function() {
    var btn = document.getElementById('cta');
    var btn2 = document.getElementById('cta2');

    if( btn != null ){
        btn.onclick = function() {
            var morphing = anime({
                targets: '.polymorph',
                points: [{
                    value: '1366,768 0,768 0,0 221,0 486,573'
                }, {
                    value: '1366,768 0,768 0,0 0,0 486,573'
                }],
                easing: 'easeOutQuad',
                duration: 1000,
                fill: '#007BFF',
                loop: false
            });
    
            anime({
                targets: '#blip',
                opacity: 1,
                duration: 500,
                translateY: 150
            });
    
            var promise = morphing.finished.then(() => {
                btn2.onclick = function() {
                    var morphing = anime({
                        targets: '.polymorph',
                        points: [{
                            value: '1366,768 0,768 0,0 221,0 486,573'
                        }, {
                            value: '1366,768 0,768 0,0 221,0 1366,0'
                        }],
                        easing: 'easeOutQuad',
                        duration: 1000,
                        loop: false,
                        fill: '#007BFF'
                    });
    
                    anime({
                        targets: '#blip',
                        opacity: 0,
                        duration: 500,
                        translateY: -800
                    });
                };
            })
        };
    }
})