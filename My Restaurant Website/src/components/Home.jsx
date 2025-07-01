export default function Home({ dishes }) {
  return (
    <section style={{ padding: "1rem" }}>
      <h2>Menú del día</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ marginBottom: "1rem" }}>
            <strong>{dish.name}</strong> - €{dish.price}
            <p>{dish.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
