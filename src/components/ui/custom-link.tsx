'use client';

import React from 'react';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}






const CustomLink: React.FC<CustomLinkProps> = ({ 
  href, 
  children, 
  className, 
  onClick,
  target,
  rel 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    // For internal navigation, use window.location
    if (href.startsWith('/') && !target) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default CustomLink;