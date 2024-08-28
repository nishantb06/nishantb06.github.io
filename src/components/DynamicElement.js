import React from 'react';

const DynamicElement = ({ element }) => {
  const { type, className, id, content, attributes } = element;

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <DynamicElement key={index} element={item} />
      ));
    }
    return content;
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