type CardProps = {
    title:string;
    description:string;
}
export default function Card({title,description}:CardProps) {
    return (
        <div className="card p-4 rounded shadow-md w-fit bg-amber-600 m-5">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}