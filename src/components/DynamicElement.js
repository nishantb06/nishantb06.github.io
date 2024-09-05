import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // You can choose a different style

const DynamicElement = ({ element, sectionTitle }) => {
  const { type, className, content, attributes } = element;
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (type === 'pre' && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [type, content]);

  const copyToClipboard = () => {
    if (codeRef.current) {
      const code = codeRef.current.textContent;
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <DynamicElement key={index} element={item} />
      ));
    }
    if (typeof content === 'string') {
      return renderInlineCode(content);
    }
    return content;
  };

  const renderInlineCode = (text) => {
    const parts = text.split(/(`[^`]+`)/).filter(Boolean);
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={index} className="inline-code">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  const generateId = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  const ElementType = type;

  let id;
  if (type === 'h2') {
    id = generateId(content);
  } else if (type === 'h3' || type === 'h4') {
    id = generateId(`${sectionTitle}-${content}`);
  }

  if (type === 'ul' || type === 'ol') {
    return (
      <ElementType className={className} id={id} {...attributes}>
        {content.map((item, index) => (
          <li key={index}>{renderContent(item.content)}</li>
        ))}
      </ElementType>
    );
  }

  if (type === 'pre') {
    return (
      <div className="code-block-wrapper">
        <button className="copy-button" onClick={copyToClipboard}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
        <pre className={`${className} code-block`}>
          <code ref={codeRef} className="hljs">
            {content[0].content}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <ElementType className={className} id={id} {...attributes}>
      {renderContent(content)}
    </ElementType>
  );
};

export default DynamicElement;