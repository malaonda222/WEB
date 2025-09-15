import CardUtente from "./CardUtente";

const ComponentePadre = () => {
    return (
        <div>
        <CardUtente
            nome = "Paolo Mini"
            email = "paolo.mini@gmail.com"
            imgUrl = "https://placehold.co/600x400"
        />
        <CardUtente
            nome = "Gino Gemmi"
            email = "gino.gemmi@gmail.com"
            imgUrl = "https://placehold.co/400"
        />
        </div>

    );
};

export default ComponentePadre