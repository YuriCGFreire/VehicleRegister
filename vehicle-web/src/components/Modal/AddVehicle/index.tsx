import React, { useContext} from 'react'
import Modal from 'react-modal'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import styles from "./Modal.module.scss"
import { BsArrowLeft } from "react-icons/bs"
import InputVehicle from '../../Input'
import Button from '../../Button'
import VehicleContext from '../../../contexts/VehicleContext'
import { useForm } from 'react-hook-form'
import { plateBr} from '../../../utils/validations' 
import { toast } from 'react-toastify'

interface ModalProps {
    action?: string;
    onClose: () => void;
}

const validationSchema = yup.object({
    name: yup.string().required("Name is a required field"),
    plate: yup.string().matches(plateBr, "It's an invalide plate.").required(),
    year: yup.string().required("Year is a required field"),
    color: yup.string().required("Color is a required field").default('#FFFFFF'),
    price: yup.string().required("Price is a required field"),
    description: yup.string(),
})

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },  
    content: {
        height: '85%',
        width: '60%',
        top: '50%',
        bottom: 'auto',
        left: '50%',
        right: 'auto',
        padding: '30px',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#192a56',
    }
}

const ModalAddVehicle = (props: ModalProps) => {
    const { isOpenAddModal, createVehicle} = useContext(VehicleContext)
    
    function onError(error:any){
        toast.dark('Check the input fields and try again!')
    }
    
    const {handleSubmit, register, formState: {errors}, watch, setValue} = useForm({
        resolver: yupResolver(validationSchema)
    })

    function handleCreateVehicle(data: any){
        createVehicle({...data})
    }


    return (
        <div className={styles.modal}>
            <Modal
                isOpen={isOpenAddModal}
                onRequestClose={props.onClose}
                style={customStyles}

            >
                <button
                    type="button"
                    onClick={props.onClose} 
                    className={styles.modal__react__close}
                >
                    <BsArrowLeft size={30} color='#ffffff' className={styles.modal__arrow__left} />
                </button>
                <div className={styles.modal__container}>
                    <h2>Register Vehicle</h2> 
                    <form action={props.action} onSubmit={handleSubmit(handleCreateVehicle, onError)}>
                        <InputVehicle error={errors.name?.message} register={register} placeholder='Vehicle name' htmlFor='name' text='Name' id='name' type='text' name={'name'}/>
                        <InputVehicle error={errors.plate?.message} register={register} placeholder='AAA-0000' htmlFor='plate' text='Plate' id='plate' type='text' name={'plate'}/>
                        <InputVehicle error={errors.year?.message} register={register} placeholder='2022' htmlFor='year' text='Year' id='year' type='text' name={'year'}/>
                        <InputVehicle error={errors.color?.message} register={register} placeholder='red' htmlFor='color' text='Color' id='color' type='color' name={'color'}/>
                        <InputVehicle error={errors.price?.message} register={register} placeholder='R$ 0,000.00' htmlFor='price' text='Price' id='price' type='text' name={'price'}/>
                        <label className={styles.container__label} htmlFor={'description'}>Description</label>
                        <textarea style={{resize: 'none'}} className={styles.modal__textArea} id="description" {...register('description')}></textarea>
                        <Button text='Register'/>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ModalAddVehicle