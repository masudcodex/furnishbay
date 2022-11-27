import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate= useNavigate();
    const formData = new FormData();

    const handleAddProduct = data => {
        console.log(data);
        const date = new Date();
        const image = data.img[0];
        formData.append('image', image);
        //Save image to hosting
        fetch("https://api.imgbb.com/1/upload?key=296373cd090b98dc3fb7564cd1174564",{
            method: 'POST',
            body: formData
        })
        .then(res=> res.json())
        .then(img=> {
            if(img.success){
                console.log(img.data.url);
                const product = {
                    productName: data.productName,
                    image: img.data.url,
                    originalPrice: data.originalPrice,
                    resalePrice: data.resalePrice,
                    yearsUsed: data.yearsUsed,
                    condition: data.condition,
                    category_id: data.category_id,
                    location: data.location,
                    sellerName: user.displayName,
                    sellerEmail: user.email,
                    phone: data.phone,
                    posted_time: date.toDateString(),
                    status: "available",
                    isFeatured: false
                }
                //Save products to database
                fetch('http://localhost:5000/products',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res=> res.json())
                .then(data=> {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success("Product added successfully");
                        reset();
                        navigate('/dashboard/myproducts')
                    }
                })
            }
        })
    }

    return (
        <div className='flex items-center justify-center'>
            <div className='w-6/12 p-5 bg-white rounded-md'>
                <h2 className='text-3xl font-bold mb-5'>Add a product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control mb-4">
                        <input 
                            type="text"
                            {...register("productName", {required: "Product name is required"})}
                            aria-invalid={errors.productName ? "true" : "false"}
                            placeholder="Enter your product name" 
                            className="input input-sm input-bordered" 
                        />
                        {errors.productName && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.productName?.message}</p>}
                    </div>
                    <div className="form-control flex-row gap-5 mb-4">
                        <input 
                            type="text"
                            {...register("originalPrice", {required: "Original price is required"})}
                            aria-invalid={errors.originalPrice ? "true" : "false"}
                            placeholder="Original price in USD. e.g. 500.00" 
                            className="input w-2/4 input-sm input-bordered" 
                        />
                        {errors.originalPrice && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.originalPrice?.message}</p>}
                        <input 
                            type="text"
                            {...register("resalePrice", {required: "Resale price is required"})}
                            aria-invalid={errors.resalePrice ? "true" : "false"}
                            placeholder="Resale price in USD. e.g. 100.00" 
                            className="input w-2/4 input-sm input-bordered" 
                        />
                        {errors.resalePrice && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.resalePrice?.message}</p>}
                    </div>
                    <div className="form-control flex-row gap-5 mb-4">
                        <input 
                            type="text"
                            {...register("yearsUsed", {required: "Enter the number of year used"})}
                            aria-invalid={errors.yearsUsed ? "true" : "false"}
                            placeholder="Years used. e.g. 1.5" 
                            className="input w-2/4 input-sm input-bordered" 
                        />
                        {errors.yearsUsed && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.yearsUsed?.message}</p>}
                        <select {...register("category_id")} className="select select-bordered select-sm w-2/4">
                            <option disabled>Select a category</option>
                            <option value="1">Bedroom furniture</option>
                            <option value="2">Dining furniture</option>
                            <option value="3">Kitchen furniture</option>
                        </select>
                    </div>
                    <div className="form-control flex-row gap-5 mb-4">
                        <select {...register("condition")} className="select select-bordered select-sm w-2/4">
                            <option disabled>Select condition type</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                        <input 
                            type="text"
                            {...register("phone", {required: "Enter your active phone number"})}
                            aria-invalid={errors.phone? "true" : "false"}
                            placeholder="Enter your active phone number" 
                            className="input w-2/4 input-sm input-bordered" 
                        />
                        {errors.phone && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.phone?.message}</p>}
                    </div>
                    <div className="form-control mb-4">
                        <input 
                            type="text"
                            {...register("location", {required: "Enter your location"})}
                            aria-invalid={errors.location? "true" : "false"}
                            placeholder="Enter your location. e.g. New York, California" 
                            className="input w-full input-sm input-bordered" 
                        />
                        {errors.location && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control mb-4">
                    <label className="label"><span className="label-text">Upload image</span></label>
                        <input type="file" 
                        {...register("img", {
                            required: "Image is required"
                        })} 
                        area-invalid={errors.img ? "true" : "false"}
                        className="input input-md w-full" 
                        />
                        {errors.location && <p role="alert" className='text-sm text-error mt-2 ml-2'>{errors.location?.message}</p>}
                    </div>
                    <input type="submit" value="Add product" className='btn btn-sm w-full btn-primary text-white mt-2'/>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;