const back2top = (function () {
  return {
    id: null,
    setButtonId (buttonId) {
      back2top.id = $('#' + buttonId)[0];
    },
    stylize () {
      back2top.id.style.display = 'none';
      back2top.id.style.position = 'fixed';
      back2top.id.style.bottom = '20px';
      back2top.id.style.right = '30px';
      back2top.id.style.zIndex = '99';
      back2top.id.style.fontSize = '18px';
      back2top.id.style.color = 'white';
      back2top.id.style.cursor = 'pointer';
      back2top.id.style.padding = '15px';
      back2top.id.style.borderRadius = '4px';
    },
    createButton () {
      let btn = document.createElement('button');
      let btnTxt = document.createTextNode('Top');
      btn.appendChild(btnTxt);

      let btnId = 'back2topBtn';
      btn.setAttribute('id', btnId);
      btn.setAttribute('title', 'Go to top');
      btn.setAttribute('class', 'btn btn-primary');
      document.body.appendChild(btn);

      back2top.setButtonId(btnId);
      back2top.stylize();
    },
    scrollFunction () {
      window.onscroll = function () {
        console.log(document.body.scrollTop);
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          back2top.id.style.display = 'block';
        } else {
          back2top.id.style.display = 'none';
        }
      };
    },
    topFunction () {
      back2top.id.onclick = function () {
        $('html, body').animate({scrollTop: 0}, 600);
      };
    },
    run () {
      back2top.createButton();
      back2top.scrollFunction();
      back2top.topFunction();
    }
  };
})();
back2top.run();
