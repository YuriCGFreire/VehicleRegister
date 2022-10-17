import React, { useContext, useEffect} from 'react'
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
import { normalizePrice } from '../../../utils/masks'
import { InputError } from '../../InputError'
 

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
    
    const {handleSubmit, register, formState: {errors}, watch, setValue}  = useForm({
        defaultValues: vehicle,
        resolver: yupResolver(validationSchema)
    })

    const priceValue = watch('price')
    useEffect(() => {
        setValue('price', normalizePrice(priceValue))
    }, [priceValue])

    return (
        <div className={styles.modalContent}>
            <Modal
                isOpen={isOpenUpdateModal}
                onRequestClose={props.onClose}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
            >
                <button
                    type="button"
                    onClick={props.onClose}
                    className={styles.modalContent__react__close}
                >
                    <BsArrowLeft size={30} color='#ffffff' className={styles.modal__arrow__left} />
                </button>
                <div className={styles.modalContent__container}>
                    <h2>Update Vehicle</h2>
                    <form action={props.action} onSubmit={handleSubmit(handleUpdateVehicle, onError)}>
                    <main className={styles.modalContent__form}>
                            <div >
                                <div className={styles.modalContent__label__error}>
                                    <label htmlFor="name">Name</label>
                                    {errors?.name?.type && <InputError msg={errors.name?.message} />}
                                </div>
                                <input className={styles.modalContent__input} type="text" id='name' {...register('name')} placeholder="Ex.: Lamborghini"/>
                            </div>
                            <div >
                                <div className={styles.modalContent__label__error}>
                                    <label htmlFor="plate">Plate</label>
                                    {errors?.plate?.type && <InputError msg={errors.plate?.message} />}
                                </div>
                                <input className={styles.modalContent__input} type="text" id='plate' {...register('plate')} placeholder="AAA-0000"/>
                            </div>
                            <div >
                                <div className={styles.modalContent__label__error}>
                                    <label htmlFor="year">Year</label>
                                    {errors?.year?.type && <InputError msg={errors.year?.message} />}
                                </div>
                                <input 
                                 className={styles.modalContent__input} type="text" id='year' {...register('year')} placeholder="Ex.: 2022"/>
                            </div>
                            <div >
                                <div className={styles.modalContent__label__error}>
                                    <label htmlFor="color">Color</label>
                                    {errors?.color?.type && <InputError msg={errors.color?.message} />}
                                </div>
                                <input className={styles.modalContent__input} type="color" id='color' {...register('color')}/>
                            </div>
                            <div>
                                <div className={styles.modalContent__label__error}>
                                    <label htmlFor="price">Price</label>
                                    {errors?.price?.type && <InputError msg={errors.price?.message} />}
                                </div>
                                <input {...register('price')} className={styles.modalContent__input} id='price' placeholder="Ex.: R$ 0,000,000.0"  type="currency"/>
                            </div>
                            <div>
                                <textarea className={styles.modalContent__textArea} style={{resize: 'none'}} id="description" {...register('description')}></textarea>
                            </div>
                        </main>
                        <Button text='Update' />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ModalUpdateVehicle