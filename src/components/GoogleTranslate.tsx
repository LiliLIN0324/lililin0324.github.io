import React, { useEffect, useRef } from 'react';

export const GoogleTranslate = () => {
  const googleTranslateRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !googleTranslateRef.current) return;
    
    scriptLoaded.current = true;
    
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          { 
            pageLanguage: 'en', 
            includedLanguages: 'en,zh-CN,zh-TW',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false 
          }, 
          'google_translate_element'
        );
        
        setTimeout(() => {
          const elem = document.getElementById('google_translate_element');
          if (elem) {
            elem.style.display = 'inline-block';
            const allDivs = elem.querySelectorAll('div');
            allDivs.forEach(div => {
              div.style.display = 'inline-flex';
              div.style.flexDirection = 'row';
              div.style.alignItems = 'center';
            });
            const allSpans = elem.querySelectorAll('span');
            allSpans.forEach(span => {
              span.style.display = 'inline';
              span.style.verticalAlign = 'middle';
            });
          }
        }, 100);
      };
      
      document.body.appendChild(script);
    };

    addGoogleTranslateScript();

    return () => {
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        translateElement.innerHTML = '';
      }
      
      const script = document.querySelector('script[src*="translate.google.com"]');
      if (script) {
        script.remove();
      }
      
      const googTrans = document.querySelector('.skiptranslate');
      if (googTrans) {
        googTrans.remove();
      }
      
      const googTe = document.querySelector('#goog-gt-tt');
      if (googTe) {
        googTe.remove();
      }
      
      document.body.style.top = '';
      scriptLoaded.current = false;
    };
  }, []);

  return (
    <div className="flex items-center">
      <div 
        id="google_translate_element" 
        ref={googleTranslateRef}
        className="flex items-center"
        style={{ display: 'inline-block', minWidth: '100px' }}
      />
      <style>{`
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; }
        #google_translate_element {
          display: inline-block !important;
        }
        #google_translate_element * {
          display: inline !important;
          float: none !important;
        }
        #google_translate_element .goog-te-gadget {
          display: inline-block !important;
          margin: 0 !important;
        }
        #google_translate_element .goog-te-gadget-simple {
          background-color: transparent !important;
          border: 1px solid #e5e5e5 !important;
          border-radius: 4px !important;
          padding: 2px 6px !important;
          display: inline-block !important;
          white-space: nowrap !important;
          margin: 0 !important;
          line-height: normal !important;
        }
        #google_translate_element .goog-te-gadget-simple a {
          display: inline !important;
          text-decoration: none !important;
        }
        #google_translate_element .goog-te-gadget-simple span {
          color: #525252 !important;
          font-size: 11px !important;
          display: inline !important;
          vertical-align: middle !important;
        }
        #google_translate_element .goog-te-gadget-icon {
          display: none !important;
        }
        #google_translate_element .goog-te-gadget-simple img {
          display: none !important;
        }
      `}</style>
    </div>
  );
};
