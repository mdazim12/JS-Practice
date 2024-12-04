import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {

    const coffee = useLoaderData();

    const {_id, name, quauntity, supplier, taste, category, details, photo} = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quauntity = form.quauntity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const UpdateCoffe = {name,quauntity,supplier,taste,category,details,photo}

        

        //send data to backend

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(UpdateCoffe)
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.matchedCount > 0){
                Swal.fire({
                    title: 'Coffe Updated',
                    text: 'Coffee Update Succesfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })
    }

    return (
        <div>
            <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
                <h2 className="text-4xl text-center my-11">Coffe name:{name}</h2>
                <form onSubmit={handleUpdateCoffee} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <input type="text" defaultValue={name} placeholder="name" name='name' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quauntity</span>
                        </label>
                        <input type="text" defaultValue={quauntity} placeholder="Quauntity" name='quauntity' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" defaultValue={supplier} placeholder="supplier" name='supplier' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Teaste</span>
                        </label>
                        <input type="text" defaultValue={taste} placeholder="Taste" name='taste' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" defaultValue={category} placeholder="Category" name='category' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" defaultValue={details} placeholder="Details" name='details' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" defaultValue={photo} placeholder="Url" name='photo' className="input input-bordered" required />

                    </div>

                    <div className="form-control mt-6">

                        <input className="btn btn-primary" type="submit" value="Update Coffee" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffe;