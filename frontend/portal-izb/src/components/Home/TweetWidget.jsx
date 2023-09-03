import React, {useEffect} from 'react';

//Komponent zawierający widget Tweeter-a
function TweetWidget() {
    useEffect(() => {
      // Kod do inicjalizacji widgetu Twittera
      // Poniższy kod to przykład, który trzeba dostosować do własnych potrzeb
      window.twttr = (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
          t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
  
        t._e = [];
        t.ready = function (f) {
          t._e.push(f);
        };
  
        return t;
      }(document, "script", "twitter-wjs"));
  
      window.twttr.ready(function () {
        window.twttr.widgets.load();
      });
    }, []);
      return (
        <article id="twitter">
          <div id="mostyIZB" type="text">Napiszcie do Nas na @MostyIZB!</div>
          <div id="twit">
            <a className="twitter-timeline" data-height="580" href="https://twitter.com/PKP_PLK_SA?ref_src=twsrc%5Etfw">
                Wiadomości od @PKP_PLK_SA
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>

        </article>
      )
}
    

export default TweetWidget;