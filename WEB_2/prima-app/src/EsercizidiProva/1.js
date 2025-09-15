/*Crea un componente ListaNomi che riceve un array di nomi e li visualizza in una lista <ul> usando .map().
Dettagli:
Input: array di stringhe
Output: <ul> con <li> per ogni nome.*/

const ListaNomi = () => {
    const arr = ["Mario", "Luigi", "Peach"]
    return (
        <ul>
            {arr.map((nome) => (
                <li key={nome}>
                    <div>{nome}</div>
                </li>
            ))};
        </ul>
    );
};

export default ListaNomi;



