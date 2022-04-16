import { ReactElement } from "react";

export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface FoodProps {
  food: FoodItem;
  handleDelete: (id: number) => void;
  handleEditFood: (food: FoodItem) => void;
}

export interface HeaderProps {
  openModal: () => void;
}

export interface InputProps {
  name: string;
  placeholder: string;
  icon?: any;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactElement;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodItem) => void;
}

export interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: FoodItem) => void;
  editingFood: FoodItem;
}
