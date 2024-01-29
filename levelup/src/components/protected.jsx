import { useSearchParams } from "react-router-dom";

export default function Protected({children}) {
    let [searchParams] = useSearchParams();
    const param = searchParams.get('q');
    const password = "toto";
    if (param === password)
    return(
        children
    );
    return(
        <p>Accés non autorisé</p>
    );
}