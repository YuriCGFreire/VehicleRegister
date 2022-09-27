import { IVehicle } from "../types/Vehicle";

const API = "http://localhost:3333";

const endpoint = (path: string): string => API + path;

const get = async (path: string): Promise<any> => {
  return fetch(endpoint(path), {method: 'GET'}).then((res) => res.json());
};

const patch = async (path: string, vehicle?: IVehicle): Promise<any> => {
  return fetch(endpoint(path), {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehicle)
  }).then((res) => res.json());
};

const destroy = async (path: string): Promise<any> => {
  return fetch(endpoint(path), {
    method: 'DELETE', 
    headers: {'Content-Type': 'application/json'}
  })
}

const post = async (path: string, vehicle: IVehicle): Promise<any> => {
  return fetch(endpoint(path), {
    method: "POST",
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(vehicle)
  }).then(res => res.json())
}

export const getVehicle = async (id?:string) => {
  return get(`/vehicles/${id}`)
}

export const getVehicles = async () => {
  return get("/vehicles");
};

export const patchVehicle = async (vehicle: IVehicle) => {
  return patch(`/vehicles/${vehicle.id}`, vehicle)
}

export const postVehicle = async (vehicle: IVehicle) => {
  return post(`/vehicles`, vehicle)
}

export const patchToFavorite = async (vehicleId: string) => {
  return patch(`/vehicles/isfavorite/${vehicleId}`)
}

export const destroyVehicle = async (vehicleId: string) => {
  return destroy(`/vehicles/${vehicleId}`)
}