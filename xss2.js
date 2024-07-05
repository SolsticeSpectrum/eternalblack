function replace() {
    document.body.innerHTML = '';
    document.head.innerHTML = '<title>enderex.net</title>'

    var css = document.createElement('style');
    css.textContent = `body {
        background: url(data:image/gif;base64,${base64Gif}) center center fixed;
        background-size: cover;
        image-rendering: pixelated;
        color: #65f0af;
        font-family: monospace;
        text-align: center;
        margin: 0;
        padding: 25px;
        height: 100%
        overflow: hidden;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding-bottom: 0px
    }

    .banner {
        text-shadow: 1px 1px 2px #65f0af, 1px 1px 2px #101010;
        transition: 0.5s ease;
        font-weight: 1000;
        font-size: 15px;
        margin-top: -5px;
    }
    
    .card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.5s ease;  
        display: none;
        background: rgba(11, 26, 19, 0.5);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 25px 40px 25px 40px;
        border: 2px solid #65f0af;
        border-radius: 20px;
        max-width: 700px !important;
    }
    
    .message {
        font-size: 15px;
        text-shadow: 1px 1px 2px #65f0af, 1px 1px 2px #101010;
        font-weight: 1000;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    
    @media only screen and (max-width: 750px) {
        .banner {
            font-size: 7px;
            margin-top: 0;
        }

        .card {
            padding: 12px 15px 12px 15px;
        }
    }
    
    @media only screen and (max-height: 350px) {
        banner {
            font-size: 5px;
            margin-top: 0;
        }

        .message {
            font-size: 10px;
        }

        .card {
            font-size: 8px;
            padding: 8px 10px 8px 10px;
        }
    }`;
    document.body.appendChild(css);

    var container = document.createElement('div');
    container.className = 'container';

    var card = document.createElement('div');
    card.className = 'card';
    card.style = 'display: block;';

    var banner = document.createElement('pre');
    banner.className = 'banner';
    banner.textContent = `    _______   ______  __________  _______  __   _   ______________
   / ____/ | / / __ \\/ ____/ __ \\/ ____/ |/ /  / | / / ____/_  __/
  / __/ /  |/ / / / / __/ / /_/ / __/  |   /  /  |/ / __/   / /   
 / /___/ /|  / /_/ / /___/ _, _/ /___ /   |_ / /|  / /___  / /    
/_____/_/ |_/_____/_____/_/ |_/_____//_/|_(_)_/ |_/_____/ /_/     `;
    card.appendChild(banner);

    var message = document.createElement('div');
    message.className = 'message';
    message.textContent = "Do you leave your doors open at home?";
    card.appendChild(message);

    var p = document.createElement('p');
    p.innerHTML = `You might wonder why this message is here. 
    It's because you left your ports open to the public. 
    Just as you wouldn't welcome strangers into your home, 
    don't invite them into your server either. 
    Please avoid repeating this mistake. 
    Now, brew yourself some coffee and secure those silly ports! 
    (hint: that coffee should be done expressly) <br><br>
    ps. take this as friendly advice`;
    card.appendChild(p);

    container.appendChild(card);
    document.body.appendChild(container);
}

var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


  setTimeout(replace, 1000);
}