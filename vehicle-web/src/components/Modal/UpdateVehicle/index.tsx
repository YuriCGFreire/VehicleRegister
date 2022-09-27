import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import * as yup from 'yup'
import styles from "./Modal.module.scss"
import { BsArrowLeft } from "react-icons/bs"
import InputVehicle from '../../Input'
import Button from '../../Button'
import { IVehicle } from '../../../types/Vehicle'
import VehicleContext from '../../../contexts/VehicleContext'
import { plateBr, plateMercoSul } from '../../../utils/validations'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
 

interface ModalProps {
    action?: string;
    onClose: () => void;
    vehicle?: IVehicle;
    onFinish?: (id: string) => Promise<void>;
}

const validationSchema = yup.object({
    name: yup.string().required("Name is a required field."),
    plate: yup.string().matches(plateBr || plateMercoSul, "It's an invalide plate.").required(),
    year: yup.string().required("Year is a required field."),
    color: yup.string().required("Color is a required field."),
    price: yup.string().required("Price is a required field."),
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
        backgroundColor: '#192a56'
    }
}

const ModalUpdateVehicle = (props: ModalProps) => {
    const { isOpenUpdateModal, selectedVehicle, updateVehicle} = useContext(VehicleContext)

    const vehicle = {
        name: selectedVehicle.name,
        plate: selectedVehicle.plate,
        color: selectedVehicle.color,
        description: selectedVehicle.description,
        year: selectedVehicle.year,
        price: selectedVehicle.price,
    }

    function handleUpdateVehicle(data: any) {
        updateVehicle({
            id: selectedVehicle.id,
            ...data
        })
    }

    function onError(error:any){
        toast.dark('Check the input fields and try again!')
    }
    
    const {handleSubmit, register, formState: {errors}}  = useForm({
        defaultValues: vehicle,
        resolver: yupResolver(validationSchema)
    })


    return (
        <div className={styles.modal}>
            <Modal
                isOpen={isOpenUpdateModal}
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
                    <h2>Update Vehicle</h2>
                    <form action={props.action} onSubmit={handleSubmit(handleUpdateVehicle, onError)}>
                        <InputVehicle error={errors.name?.message} register={register} placeholder='Vehicle name' htmlFor='name' text='Name' id='name' name='name' type='text'/>
                        <InputVehicle error={errors.plate?.message} register={register} placeholder='ABC-1234 or ABC1B34' htmlFor='plate' text='Plate' id='plate' name='plate' type='text'/>
                        <InputVehicle error={errors.year?.message} register={register} placeholder='2022' htmlFor='year' text='Year' id='year' name='year' type='text'/>
                        <InputVehicle error={errors.color?.message} register={register} placeholder='red' htmlFor='color' text='Color' id='color' name='color' type='color'/>
                        <InputVehicle error={errors.price?.message} register={register} placeholder='R$ 0,000.00' htmlFor='price' text='Price' id='price' name='price' type='text'/>
                        <label className={styles.container__label} htmlFor={'description'}>Description</label>
                        <textarea {...register('description')} style={{resize: 'none'}} className={styles.modal__textArea} name="description" id="description"></textarea>
                        <Button text='Update' />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ModalUpdateVehicle