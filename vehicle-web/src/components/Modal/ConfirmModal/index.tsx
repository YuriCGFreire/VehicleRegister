import React, { useContext } from 'react'
import VehicleContext from '../../../contexts/VehicleContext';
import styles from './Modal.module.scss'
import Modal from 'react-modal'

interface ModalProps {
    action?: string;
    onClose: () => void;
}

const ConfirmModal = (props: ModalProps) => {
    const { isOpenConfirmModal, deleteVehicle, selectedVehicle, handleIsOpenConfirmModal } = useContext(VehicleContext)
    return (
        <div className={styles.modal_container}>
            <Modal
                isOpen={isOpenConfirmModal}
                onRequestClose={props.onClose}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
            >
                <div className={styles.modal_container__content}>
                    <span className={styles.modal_container__span}>Are you sure you want to deletes this vehicle?</span>
                    <div className={styles.modal_container__buttons}>
                        <button className={styles.modal_container__delete_button} onClick={() => deleteVehicle(selectedVehicle.id!)}>Confirm</button>
                        <button className={styles.modal_container__cancel_button} onClick={() => handleIsOpenConfirmModal()}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ConfirmModal