import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ModalAddVehicle, ModalUpdateVehicle } from "../components";
import ConfirmModal from "../components/Modal/ConfirmModal";
import { destroyVehicle, getVehicle, getVehicles, patchToFavorite, patchVehicle, postVehicle } from "../lib/api";
import { IVehicle, VehicleContextProps } from "../types/Vehicle";
import VehicleContext from "./VehicleContext";


const VehicleContextProvider = (props: VehicleContextProps) => {
    const [vehicles, setVehicles] = useState<IVehicle[]>([])
    const [selectedVehicle, setSelectedVehicle] = useState<IVehicle>({} as IVehicle)
    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false)
    const [isOpenAddModal, setIsOpenAddModal] = useState(false)
    const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false)


    useEffect(() => {
        const fetchVehicles = async () => {
            const payload = await getVehicles()
            setVehicles(payload)
        }
        fetchVehicles()
    })

    function handleSelectedUpdateVehicle(id?: string) {
        const fetchVehicle = async () => {
            const payload = await getVehicle(id)
            setSelectedVehicle(payload)
            handleIsOpenUpdateModal()
        }
        fetchVehicle()
    }

    function handleSelectedDeleteVehicle(id?: string) {
        const fetchVehicle = async () => {
            const payload = await getVehicle(id)
            setSelectedVehicle(payload)
            handleIsOpenConfirmModal()
        }
        fetchVehicle()
    }

    function setFavorite(id: any) {
        const fetchVehicleFavorite = async () => {
            return await patchToFavorite(id)
        }
        fetchVehicleFavorite()
        toast.dark('You just set your favorite vehicles', { autoClose: 1000 })
    }

    function updateVehicle(data: IVehicle) {
        const fetchUpdateVehicle = async () => {
            return await patchVehicle({ ...data })
        }
        fetchUpdateVehicle()
        handleIsOpenUpdateModal()
        toast.dark('Vehicle updated with success', { autoClose: 1000 })
    }

    function deleteVehicle(id: string) {
        const fecthDeleteVehicle = async () => {
            return await destroyVehicle(id)
        }
        fecthDeleteVehicle()
        handleIsOpenConfirmModal()
        toast.dark('Vehicle deleted with success')
    }

    function createVehicle(data: IVehicle) {
        const fetchCreateVehicle = async () => {
            return await postVehicle({ ...data })
        }
        fetchCreateVehicle()
        handleIsOpenAddModal()
        toast.dark('Vehicle created with success', { autoClose: 1000 })
    }

    function handleIsOpenUpdateModal() {
        setIsOpenUpdateModal(!isOpenUpdateModal)
    }

    function handleIsOpenAddModal() {
        setIsOpenAddModal(!isOpenAddModal)
    }

    function handleIsOpenConfirmModal() {
        setIsOpenConfirmModal(!isOpenConfirmModal)
    }

    return (
        <VehicleContext.Provider value={{
            vehicles,
            selectedVehicle,
            handleSelectedUpdateVehicle,
            handleSelectedDeleteVehicle,
            isOpenAddModal,
            isOpenUpdateModal,
            isOpenConfirmModal,
            handleIsOpenAddModal,
            handleIsOpenUpdateModal,
            handleIsOpenConfirmModal,
            updateVehicle,
            createVehicle,
            setFavorite,
            deleteVehicle
        }}>
            <div>{props.children}</div>
            {
                isOpenUpdateModal && (
                    <ModalUpdateVehicle
                        onClose={handleIsOpenUpdateModal}
                    />
                )
            }
            {
                isOpenConfirmModal && (
                    <ConfirmModal
                        onClose={handleIsOpenConfirmModal}
                    />
                )
            }
            {
                isOpenAddModal && (
                    <ModalAddVehicle
                        onClose={handleIsOpenAddModal} />
                )
            }

        </VehicleContext.Provider>
    )
}

export default VehicleContextProvider;