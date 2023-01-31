import React,{useState}  from 'react'

import {deleteObject, getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {saveItem} from '../utils/firbaseFunction.utils';
import {storage} from '../firebase.config'

import {motion} from 'framer-motion';

import {
    MdFastfood,
    MdCloudUpload,
    MdDelete,
    MdFoodBank,
    MdAttachMoney
} from 'react-icons/md'

import categories from '../utils/data/category.utils';
import Loader from '../components/loader/loaderComponent';


const CreateComponent = () => {
    const [title, setTitle] = useState('');
    const [calories, setCalories] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [alertStatus, setAlertStatue] = useState('danger')
    const [fields, setFields] = useState(false);
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const loadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `Images/${
            Date.now()
        }-${
            imageFile.name
        }`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);
        console.log(uploadTask);
        uploadTask.on('state_changed', (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(uploadProgress);
        }, (error) => {
            console.log(1);
            console.log(error);
            setFields(true);
            setMsg('Error while uploading: Try Again 🔔');
            setAlertStatue('danger');
            setTimeout(() => {
                setFields(true);
                setIsLoading(false);
            }, 4000)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
                setImageAsset(downloadUrl);
                setIsLoading(false);
                setFields(true);
                setMsg('Message uploaded successfully 😊');
                setAlertStatue('Success');
                setTimeout(() => {
                    setFields(false)

                }, 4000)
            })
        })


    }

    const deleteImage = () => {
        setIsLoading(true);
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(() => {
            setIsLoading(false);
            setImageAsset(null);
            setFields(true);
            setMsg('Image deleted successfully 😊');
            setAlertStatue('Success');
            setTimeout(() => {
                setFields(false);
            }, 4000)
        })
    }
    const saveDetails = () => {
        setIsLoading(true);
        try {
            if (!title || !calories || !imageAsset || !price || !category) {
                setFields(true);
                setMsg('Required Fields cant be empty 🔔');
                setAlertStatue('danger');
                setTimeout(() => {
                    setFields(true);
                    setIsLoading(false);
                }, 4000)
            } else {
                const data = {
                    id: `${
                        Date.now()
                    }`,
                    title: title,
                    imageUrl: imageAsset,
                    category: category,
                    price: price,
                    calories: calories
                }
                saveItem(data);
                setIsLoading(false);
                setFields(true);
                setMsg('Data uploaded successfully 😊');
                setAlertStatue('Success');
                setTimeout(() => {
                    setFields(false);
                    clearData();
                }, 4000)

            }
        } catch (error) {
            console.log(error);
            setFields(true);
            setMsg('Error while uploading: Try Again 🔔');
            setAlertStatue('danger');
            setTimeout(() => {
                setFields(true);
                setIsLoading(false);
            }, 4000)
        }
    }
    const clearData = () => {
        setTitle('');
        setImageAsset(null);
        setCalories('');
        setPrice('');
        setCategory('Select Category');
    }

    return (
        <div className='w-full h-auto min-h-screen  flex items-center justify-center '>
            <div className='w-[90%] md:w-[70%] border border-gray-300 p-4 flex flex-col items-center justify-center rounded-lg gap-4'>
                {
                fields && (
                    <motion.p initial={
                            {opacity: 0}
                        }
                        animate={
                            {opacity: 1}
                        }
                        exit={
                            {opacity: 0}
                        }
                        className={
                            `w-full p-2 rounded-lg text-center text-lg font-semibold
                    ${
                                alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'
                            }`
                    }>
                        {msg}</motion.p>
                )
            }

                <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
                    <MdFastfood className='text-xl text-gray-700 '/>
                    <input type='text' required
                        value={title}

                        onChange={
                            (e) => setTitle(e.target.value)
                        }
                        placeholder='Give me a title...'
                        className='w-full h-full text-lg bg-transparent placeholder:text-gray-400 text-textColor border-none outline-none'/>
                </div>
                <div className='w-full '>
                    <select className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
                        onChange={
                            (e) => setCategory(e.target.value)
                    }>
                        <option value='other' className='bg-white'>Select Category</option>
                        {
                        categories && categories.map(category => (
                            <option key={
                                    category.id
                                }
                                className='text-base border-0 outline-none capitalize bg-white text-headingColor'
                                value={
                                    category.urlParamName
                            }>
                                {
                                category.name
                            }</option>
                        ))
                    } </select>
                </div>
                <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h420 cursor-pointer rounded-lg'>
                    {
                    isLoading ? <Loader/>: <> {
                        !imageAsset ? <>
                            <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                                    <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700'/>
                                    <p className='text-gray-500 hover:text-gray-700'>Click here to upload</p>
                                </div>
                                <input type='file' name='uploadImage' accept='image/*'
                                    onChange={loadImage}
                                    className='w-0 h-0'/>
                            </label>
                        </> : <div className='relative h-full'>
                            <img src={imageAsset}
                                alt='uploadedImage'
                                className='w-full h-full object-cover'/>
                            <button type='button' className='absolute bottom-3 right-3 p-3 outline-none rounded-full bg-red-500 text-xl cursor-pointer outline hover:shadow-lg duration-500 transition-all ease-in-out'
                                onClick={deleteImage}><MdDelete className='text-white '/></button>
                        </div>
                    } </>
                } </div>
                <div className='w-full flex flex-col md:flex-row items-center gap-3'>
                    <div className='w-full py-2 border-b border-gray-300 gap-2 flex items-center '>
                        <MdFoodBank className='text-gray-700 text-2xl'/>
                        <input type='text' required placeholder='Calories'
                            value={calories}
                            onChange={
                                (e) => setCalories(e.target.value)
                            }
                            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>
                    </div>
                    <div className='w-full py-2 border-b border-gray-300 gap-2 flex items-center '>
                        <MdAttachMoney className='text-gray-700 text-2xl'/>
                        <input type='text' required placeholder='Price'
                            value={price}
                            onChange={
                                (e) => setPrice(e.target.value)
                            }
                            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'/>
                    </div>
                </div>

                <div className='flex items-center w-full'>
                    <button type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12
                                                                                                                                                                                                                                                                                                                                        rounded-lg text-white font-semibold py-2'
                        onClick={saveDetails}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default CreateComponent
