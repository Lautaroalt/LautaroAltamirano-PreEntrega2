import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/product';

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  const itemId = parseInt(id, 10);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    promise
      .then((response) => {
        const filtered = response.find((item) => item.id === itemId);
        setItem(filtered);
      });
  }, [itemId]);

  if (!item) {
    return <>Loading</>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} width={150} alt={item.title} />
      <p>{item.description}</p>
    </div>
  );
};