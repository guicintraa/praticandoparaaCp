interface conteudoProps{

    title: string;
    texto: string;


}


export function Conteudo (props: conteudoProps){ 
    return(

        <main>
            <h3>{props.title}</h3>
            <p>{props.texto}</p>
        </main>


    )

}