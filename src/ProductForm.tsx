import { useState, useEffect } from 'react';

interface Props {
  onSubmit: (product: any) => void;
  selectedProduct: any;
}

export default function ProductForm({ onSubmit, selectedProduct }: Props) {
  const [product, setProduct] = useState({ name: '', description: '', price: 0 });

  useEffect(() => {
    if (selectedProduct) setProduct(selectedProduct);
  }, [selectedProduct]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: '', description: '', price: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>{selectedProduct ? 'Editar Producto' : 'Agregar Producto'}</h2>

      <input
        name="name"
        placeholder="Nombre"
        value={product.name}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Descripción"
        value={product.description}
        onChange={handleChange}
        required
      />

      <input
        name="price"
        type="number"
        placeholder="Precio"
        value={product.price}
        onChange={handleChange}
        min="0"
        step="0.01"
        required
      />

      <button type="submit" className="save-button">Guardar</button>

      
    </form>
  );
}