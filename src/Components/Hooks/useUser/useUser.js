import { useEffect, useState } from "react"

const useUser = email => {
    const [isUser, setIsUser] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://furnishbay-server.vercel.app/users/user/${email}`)
            .then(res=>res.json())
            .then(data=> {
                console.log(data);
                setIsUser(data.isUser);
                setUserLoading(false)
            })
        }
    },[email])
    return [isUser, userLoading];
}

export default useUser;