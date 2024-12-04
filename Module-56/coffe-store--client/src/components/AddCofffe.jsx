import React from 'react';
import Swal from 'sweetalert2'


const AddCofffe = () => {

    const handleAddCoffe = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quauntity = form.quauntity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffe = {name,quauntity,supplier,taste,category,details,photo}

        console.log(newCoffe)

        //send data to backend

        fetch('http://localhost:5000/coffee',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newCoffe)
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Error!',
                    text: 'Coffee Added Succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div>
            <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleAddCoffe} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quauntity</span>
                        </label>
                        <input type="text" placeholder="Quauntity" name='quauntity' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="supplier" name='supplier' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Teaste</span>
                        </label>
                        <input type="text" placeholder="Taste" name='taste' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Category" name='category' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name='details' className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Url" name='photo' className="input input-bordered" required />

                    </div>

                    <div className="form-control mt-6">

                        <input className="btn btn-primary" type="submit" value="Add Coffe" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCofffe;