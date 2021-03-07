window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    var arr_l = focus.querySelector('.arrow_l');
    var arr_r = focus.querySelector('.arrow_r');
    var focW = focus.offsetWidth;
    var num = 0;
    var liC = ul.children[0].cloneNode(true);
    var index = 0;
    ul.appendChild(liC);

    for (var i = 0; i < ul.children.length - 1; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        li.addEventListener('click', function() {
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
                this.className = 'chi';
            }
            var index = this.getAttribute('index');
            console.log(index);

            animate(ul, -index * focW);
            num = index;
            circle = index;
        });
    };
    ol.children[0].className = 'chi';

    function check() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'chi';
    };
    var circle = 0;
    arr_l.addEventListener('click', function() {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focW + 'px';
        }
        num--;
        animate(ul, -num * focW);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        check();
    });
    arr_r.addEventListener('click', function() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focW);
        circle++;
        if (circle > ol.children.length - 1) {
            circle = 0;
        }
        check();
    });

    focus.addEventListener('mouseenter', function() {
        arr_l.style.display = 'block';
        arr_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arr_l.style.display = 'none';
        arr_r.style.display = 'none';
        timer = setInterval(function() {
            arr_r.click();
        }, 1000);
    });
    var timer = setInterval(function() {
        //手动调用点击事件
        arrow_r.click();
    }, 2000);
})