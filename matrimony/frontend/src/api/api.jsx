const baseurl="http://localhost:8000"

// read profile
export const getdata=async()=>{
    const res = await fetch(`${baseurl}/profile/getprofile`)

    return res.json()
}

// login
export const LoginUser = async (postdata) => {

    const res = await fetch(`${baseurl}/user/loginuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(postdata)
    })
     console.log("login response:");
     
    const data = await res.json();

    return data;
    // return res.json()
}

