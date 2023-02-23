import { useState } from 'react';

const ImageFallback = () => {
  const [id, setId] = useState(0);
  const [url, setUrl] = useState(
    `https://res.cloudinary.com/dyb2uaxsj/image/upload/v1676894525/flags/${id}.png`
  );
  return <img src={url} />;
};

export default ImageFallback;
