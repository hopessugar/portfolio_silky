import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  placeholder?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  placeholder
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Show placeholder while loading
  if (isLoading && placeholder) {
    return <div className={className}>{placeholder}</div>;
  }

  // Show fallback if image failed to load
  if (imageError) {
    if (fallbackSrc) {
      return (
        <img
          src={fallbackSrc}
          alt={alt}
          className={className}
          onError={() => setImageError(true)}
        />
      );
    }
    
    // Default placeholder for missing images
    return (
      <div className={`${className} bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-medium`}>
        <div className="text-center">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm opacity-80">Image Coming Soon</div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleImageError}
      onLoad={handleImageLoad}
    />
  );
};