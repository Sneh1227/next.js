"use client"

export default function Button(){
    return(
    <>
    <button className="bg-amber-500 p-4 m-4 rounded-2xl" 
        onClick={()=>{alert("hey deepu!!")}}>
        Click Me
    </button>
    </>
    )
}