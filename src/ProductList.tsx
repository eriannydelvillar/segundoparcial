interface Props {
  products: any[];
  onDelete: (id: number) => void;
  onEdit: (product: any) => void;
}

export default function ProductList({ products, onDelete, onEdit }: Props) {
  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id} className="product-item">
              <strong>{p.name}</strong> - ${p.price}
              <div className="product-actions">
                <button onClick={() => onEdit(p)} className="edit-button">Editar</button>
                <button onClick={() => onDelete(p.id)} className="delete-button">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
