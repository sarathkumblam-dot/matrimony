const baseurl="http://localhost:8000"

// read profile
export const getdata=async()=>{
    const res=await fetch(`${baseurl}/profile/getprofile`)
    return res.json()
}




