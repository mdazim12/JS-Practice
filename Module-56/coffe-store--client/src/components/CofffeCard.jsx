
const CofffeCard = ({coffe}) => {

    const {name,quauntity,supplier,taste,category,details,photo} = coffe;

    return (
        <div className="card card-side bg-base-100 shadow-xl m-5">
            <figure>
                <img className="w-[300px]"
                    src={photo}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default CofffeCard;