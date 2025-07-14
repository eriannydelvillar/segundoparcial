import { useEffect, useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import axios from 'axios';
import './styles.css';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:3000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const createOrUpdate = async (product: any) => {
    if (product.id) {
      await axios.put(`http://localhost:3000/api/products/${product.id}`, product);
    } else {
      await axios.post('http://localhost:3000/api/products', product);
    }
    fetchProducts();
    setSelected(null);
  };

  const deleteProduct = async (id: number) => {
    await axios.delete(`http://localhost:3000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="Products">
      <h2>Gestión de Productos</h2>
      <ProductForm onSubmit={createOrUpdate} selectedProduct={selected} />
      <ProductList products={products} onDelete={deleteProduct} onEdit={setSelected} />
    </div>
  );
}
