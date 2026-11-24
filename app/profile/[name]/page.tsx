type ProfilePageProps = {
    params: Promise<{name:string}>
};

export default async function ProfilePage({params}:ProfilePageProps){
    const users = [
        {
            id:1,
            name:'Deep',
            email:'deep.rajput@gmail.com',
            bio:'frontend developer with a good experience of 100+ years'
        },
        {
            id:2,
            name:'Ronak',
            email:'roank.singh@gmail.com',
            bio:'BDE intern, having a good communication in hindi'
        },
        {
            id:3,
            name:'Salman',
            email:'salman.khan@gmail.com',
            bio:'Heavy Driver, with 10+ kills'
        }
    ]

    const PageParams = await params
    const name = PageParams.name
    const user = users.find(user=>user.name.toLocaleLowerCase() === name.toLocaleLowerCase());

    if(!user){
        return(
            <div className="m-4 p-4">
                <h1>USER <span className="text-red-600 font-bold">Not Found</span></h1>
                <p>The user with the name "{name}" does not exist</p>
            </div>
        )
    }
    return(
        <div className="m-4 p-4">
        <h1>{user?.name}, Welcome</h1>
        <p>{user?.email}</p>
        <p>{user?.bio}</p>
        </div>
    )
}