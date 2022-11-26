import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookProduct = ({user, productInfo, setProductInfo, revalidator}) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const bookingSubmit = data => {
        console.log(data);
        const bookedProduct = {
            id: productInfo._id,
            productName: productInfo.productName,
            price: productInfo.resalePrice,
            userName: data.name,
            email: data.email,
            phone: data.phone,
            meetingLocation: data.meetingLocation
        }
        fetch('http://localhost:5000/booked', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('furnishbayToken')}`
            },
            body: JSON.stringify(bookedProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.acknowledged){
                toast.success('Product is booked successfully')
                setProductInfo(null);
                revalidator.revalidate();
            }
        })
        reset();
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-error text-white btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleSubmit(bookingSubmit)}>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input 
                            type="text"
                            {...register("name")}
                            className="input input-sm input-bordered"
                            defaultValue={user.displayName}
                            readOnly
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                            type="text"
                            {...register("email")}
                            className="input input-sm input-bordered"
                            defaultValue={user.email}
                            readOnly
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input 
                            type="text"
                            {...register("productName")}
                            className="input input-sm input-bordered"
                            defaultValue={productInfo?.productName}
                            readOnly
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input 
                            type="text"
                            {...register("resalePrice")}
                            className="input input-sm input-bordered"
                            defaultValue={productInfo?.resalePrice}
                            readOnly
                        />
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input 
                            type="text"
                            {...register("phone", {required: "Phone number is required"})}
                            aria-invalid={errors.phone ? "true" : "false"}
                            placeholder="Enter your phone number" 
                            className="input input-sm input-bordered" 
                        />
                        {errors.phone && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.phone?.message}</p>}
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                            <span className="label-text">Meeting location</span>
                        </label>
                        <input 
                            type="text"
                            {...register("meetingLocation", {required: "Location is required"})}
                            aria-invalid={errors.meetingLocation ? "true" : "false"}
                            placeholder="Enter your preferable meeting location" 
                            className="input input-sm input-bordered" 
                        />
                        {errors.meetingLocation && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.meetingLocation?.message}</p>}
                    </div>
                    <input type="submit" value="Book now" className='btn w-full btn-sm btn-primary text-white mt-5'/>
                </form>
            </div>
            </div>
        </>
    );
};

export default BookProduct;