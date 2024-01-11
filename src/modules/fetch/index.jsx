import * as s from "./style"
import { useEffect, useState } from "react"
import  User from "./assets/user.png"
// import * as Axios from "axios";

const Git_Repos = () => {
    
    // entrada do nome do usuário no github
    const [user, setUser] = useState("");
    
    
    const handleSearch = async () => {
        
        // definição da URL de busca
        const url = `https://api.github.com/users/${user}`

        // request feito pelo fetch, e automaticamente capturando o json
        const res = await (await fetch(url)).json()
    
        // em caso de sucesso, debug através do console.log
        .then((res)=>console.log(res));
        // .then((res)=>console.log(res.login));
        // .then((res)=>console.log(res.id));
        

    }
    
    return(
        <s.Container>
            <s.Title>Github API</s.Title>

            <s.Input 
                type="text"
                placeholder="Entre com o nome de usuário desejado"
                onChange={(e)=> setUser(e.target.value)}
            />

            <s.Button 
                onClick={()=>{handleSearch()}}
            >Clique aqui para buscar</s.Button>

            <s.Image src={User}/>

            <s.Name>{user}</s.Name>

            <s.Button>Clique aqui para conhecer {user}</s.Button>


        </s.Container>
    )
}

export default Git_Repos