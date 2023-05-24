"use client"

import PhotosUploader from "@components/PhotosUploader.jsx";
import Perks from "@components/Perks.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaUpload } from "react-icons/fa";


export default function PlacesFormPage() {

    const [title, setTitle] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [cover, setCover] = useState("");
    const [category, setCategory] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [quantity, setQuantity] = useState(6);
    const [price, setPrice] = useState(100);
    const [avatar, setAvatar] = useState(null);
    const [redirect, setRedirect] = useState(false);

    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }
    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }

    async function savePlace(ev) {
        ev.preventDefault();
        const productData = {
            title, cover, category,
            desc: description, quantity, price, manufacturer
        };



        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                alert("Product succesfully uploaded!")
                //router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setRedirect(true);
            //setIsSubmitting(false);
        }


    }

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function (e) {
            // save this data1111 and send to server
            const dataVideo = reader.result; // reader.result // ----------------- data1111

        };
        reader.readAsBinaryString(file);

        setCover(file.name);
        setAvatar(file);
    };

    /* if (redirect) {
       return <Navigate to={'/account/places'} />
     }*/

    return (
        <div className="p-20 flex justify-center">
            <form onSubmit={savePlace}>
                {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
                <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt" />
                {preInput('Photos', 'more = better')}
                <div>
                    <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                    />
                    <div className="mt-2 flex items-center">
                        <span className="inline-block h-36 w-36 rounded-[5%] overflow-hidden">
                            {avatar ? (
                                <img
                                    src={URL.createObjectURL(avatar)}
                                    alt="avatar"
                                    className="h-full w-full object-cover "
                                />
                            ) : (
                                <FaUpload className="h-16 w-16" />
                            )}
                        </span>
                        <label
                            htmlFor="file-input"
                            className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                        >
                            <span>Upload a product cover</span>
                            <input
                                type="file"
                                name="avatar"
                                id="file-input"
                                accept="images/*"
                                onChange={handleFileInputChange}
                                className="sr-only"
                            />
                        </label>
                    </div>
                </div>
                {/*<PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />*/}
                {preInput('Description', 'description of the place')}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
                {preInput('Category', 'select category of the product')}
                <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <Perks selected={category} onChange={setCategory} />
                </div>
                {preInput('Manufacturer', 'company name, etc')}
                <input type="text" value={manufacturer} onChange={ev => setManufacturer(ev.target.value)} />
                {preInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
                <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
                    {/*<div>
                        <h3 className="mt-2 -mb-1">Check in time</h3>
                        <input type="text"
                            value={checkIn}
                            onChange={ev => setCheckIn(ev.target.value)}
                            placeholder="14" />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Check out time</h3>
                        <input type="text"
                            value={checkOut}
                            onChange={ev => setCheckOut(ev.target.value)}
                            placeholder="11" />
    </div>*/}
                    <div>
                        <h3 className="mt-2 -mb-1">Max number of products</h3>
                        <input type="number" value={quantity}
                            onChange={ev => setQuantity(ev.target.value)} />
                    </div>
                    <div>
                        <h3 className="mt-2 -mb-1">Price per case</h3>
                        <input type="number" value={price}
                            onChange={ev => setPrice(ev.target.value)} />
                    </div>
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 mt-5 text-white">Save</button>
            </form>
        </div>
    );
}