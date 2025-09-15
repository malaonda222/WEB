import { piatti } from "./piatti";


const MenuRistorante = () => {
  return (
    <ul>
        {piatti.map((piatto) => (
            <li key={piatto.id}>
                Nome: {piatto.nome}, Prezzo: €{piatto.prezzo}
            </li>
        ))}
    </ul>
    );
};

export default MenuRistorante