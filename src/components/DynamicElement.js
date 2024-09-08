import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // You can choose a different style

const DynamicElement = ({ element, sectionTitle }) => {
  const { type, className, content, attributes, src, alt } = element;
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

  const renderInlineElements = (text) => {
    const regex = /(`[^`]+`|\*\*[^*]+\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (lastIndex !== match.index) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(match[0]);
      lastIndex = regex.lastIndex;
    }

    if (lastIndex !== text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={index} className="inline-code">{part.slice(1, -1)}</code>;
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('[') && part.includes('](')) {
        const [linkText, linkUrl] = part.slice(1, -1).split('](');
        return <a key={index} href={linkUrl} target="_blank" rel="noopener noreferrer">{linkText}</a>;
      }
      return part;
    });
  };

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <DynamicElement key={index} element={item} />
      ));
    }
    if (typeof content === 'string') {
      return renderInlineElements(content);
    }
    return content;
  };

  const generateId = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  };

  const ElementType = type;

  let id;
  if (type === 'h2' || type === 'h3' || type === 'h4') {
    id = generateId(content);
  }

  if (type === 'ul' || type === 'ol') {
    return (
      <ElementType className={className} id={id} {...attributes}>
        {content.map((item, index) => (
          <li key={index}>
            {Array.isArray(item.content) && item.content[0].type === 'a' ? (
              <a href={item.content[0].href}>{item.content[0].content}</a>
            ) : (
              renderContent(item.content)
            )}
          </li>
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

  if (type === 'img') {
    return (
      <figure className="image" style={{ textAlign: 'center', margin: '2rem 0' }}>
        <img 
          src={src} 
          alt={alt} 
          className={className} 
          {...attributes} 
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'contain'
          }}
        />
      </figure>
    );
  }

  return (
    <ElementType className={className} id={id} {...attributes}>
      {renderContent(content)}
    </ElementType>
  );
};

export default DynamicElement;