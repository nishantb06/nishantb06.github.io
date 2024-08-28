import React from 'react';

const DynamicElement = ({ element }) => {
  const { type, className, id, content, attributes } = element;

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
        return <code key={index}>{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  const ElementType = type;

  if (type === 'ul' || type === 'ol') {
    return (
      <ElementType className={className} id={id} {...attributes}>
        {content.map((item, index) => (
          <li key={index}>{renderContent(item.content)}</li>
        ))}
      </ElementType>
    );
  }

  return (
    <ElementType className={className} id={id} {...attributes}>
      {renderContent(content)}
    </ElementType>
  );
};

export default DynamicElement;