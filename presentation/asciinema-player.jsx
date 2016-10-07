import React from "react";

export default function AsciinemaPlayer ({ src, autoplay, fontSize }) {
  const autoplayAttribute = autoplay ? "autoplay" : "";
  // Set innerHtml to ensure src is set on element creation
  const __html = `<asciinema-player src=\"${src}\" ${autoplayAttribute} font-size=${fontSize}></asciinema-player>`;
  return <div dangerouslySetInnerHTML={{ __html }} />;
}
