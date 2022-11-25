import { useEffect, useState } from "react"

const JwtToken = email => {
    const [token, setToken] = useState('');
    useEffect(()=>{
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res=>res.json())
            .then(data=>{
                if (data.accessToken) {
                    localStorage.setItem('furnishbayToken', data.accessToken);
                    setToken(data.accessToken);
                }
            })
        }
    },[email])
    return [token];
}
export default JwtToken;