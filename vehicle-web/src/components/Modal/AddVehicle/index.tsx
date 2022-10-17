import { useContext, useEffect} from 'react'
import Modal from 'react-modal'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import styles from "./Modal.module.scss"
import { BsArrowLeft } from "react-icons/bs"
import Button from '../../Button'
import VehicleContext from '../../../contexts/VehicleContext'
import { useForm } from 'react-hook-form'
import { plateBr } from '../../../utils/validations'
import { toast } from 'react-toastify'
import { InputError } from '../../InputError'
import { IVehicle } from '../../../types/Vehicle'
import { normalizePrice } from '../../../utils/masks'

interface ModalProps {
    action?: string;
    onClose: () => void;
    vehicle?: IVehicle;
    onFinish?: (id: string) => Promise<void>;
}


const validationSchema = yup.object({
    name: yup.string().required("Name is a required field"),
    plate: yup.string().matches(plateBr, "It's an invalide plate.").required(),
    year: yup.string().required("Year is a required field"),
    color: yup.string().required("Color is a required field").default('#FFFFFF'),
    price: yup.string().required("Price is a required field"),
    description: yup.string(),
})

const ModalAddVehicle = (props: ModalProps) => {
    const { isOpenAddModal, createVehicle } = useContext(VehicleContext)

    function onError(error: any) {
        toast.dark('Check the input fields and try again!')
    }

    const { handleSubmit, register, formState: { errors }, setValue, watch} = useForm({
        resolver: yupResolver(validationSchema)
    })

    function handleCreateVehicle(data: any) {
        createVehicle({ ...data })
    }

    const priceValue = watch('price')
    useEffect(() => {
        setValue('price', normalizePrice(priceValue))
    }, [priceValue, setValue])

    return (
        <div className={styles.modalContent}>
            <Modal
                isOpen={isOpenAddModal}
                onRequestClose={props.onClose}
                className={styles.Modal}
                overlayClassName={styles.Overlay}

            >
                <button
                    type="button"
                    onClick={props.onClose}
                    className={styles.modalContent__react__close}
                >
                    <BsArrowLeft size={30} color='#ffffff' className={styles.modalContent__arrow__left} />
                </button>
                <div className={styles.modalContent__container}>
                    <h2>Register Vehicle</h2>
                    <form action={props.action} onSubmit={handleSubmit(handleCreateVehicle, onError)}>
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
                                <input className={styles.modalContent__input} type="text" id='plate' {...register('plate')} placeholder="AAA0000"/>
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
                        <Button text='Register' />
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default ModalAddVehicle