import FilterUsers from "@/components/FilterUser";

export default async function classroom(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users",
        {
            cache: "force-cache"
        }
    );
    const users = await response.json();
    return(
        <>
        <h1>This is ClassRoom page</h1>
        <FilterUsers users={users}/>
        </>
    )
}