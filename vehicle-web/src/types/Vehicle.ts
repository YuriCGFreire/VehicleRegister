import { ReactNode } from "react";

export interface IVehicle {
  id?: string;
  name: string;
  description: string;
  plate: string;
  isFavorite?: boolean;
  year: string;
  color: string;
  price: string;
  createdAt?: Date;
}

export type VehicleContextType = {
  vehicles: IVehicle[],
  selectedVehicle: IVehicle,
  handleSelectedVehicle: (newState?: string) => void,
  isOpenAddModal: boolean,
  isOpenUpdateModal: boolean,
  handleIsOpenAddModal: (newState?: boolean) => void,
  handleIsOpenUpdateModal: (newState?: boolean) => void,
  updateVehicle: (data: IVehicle) => void,
  createVehicle: (data: IVehicle) => void,
  setFavorite: (id: any) => void,
  deleteVehicle: (id: string) => void
}

export type VehicleContextProps = {
  children: ReactNode;
}

export interface VehicleFormData extends IVehicle {}