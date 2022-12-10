
import { useState, useEffect } from "react";

function appendScript(baseUrl, setScriptLoaded) {
  if (window.MktoForms2) return setScriptLoaded(true);

  const script = document.createElement("script");
  script.src = `${baseUrl}/js/forms2/js/forms2.min.js`;
  script.onload = () => (window.MktoForms2 ? setScriptLoaded(true) : null);
  document.body.appendChild(script);
}

function UseMarketo({ baseUrl, munchkinId, formId }) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded) {
      window.MktoForms2.loadForm(baseUrl, munchkinId, formId);
      return;
    }
    appendScript(baseUrl, setScriptLoaded);
  }, [scriptLoaded, baseUrl, munchkinId, formId]);
}

export default UseMarketo;