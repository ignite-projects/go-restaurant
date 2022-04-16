import { FC, createRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import Modal from "../Modal";
import { FormHandles } from "@unform/core";
import Input from "../Input";
import { Form } from "./styles";
import { ModalAddFoodProps, FoodItem } from '../../types/props';

const ModalAddFood: FC<ModalAddFoodProps> = (props) => {
  const { isOpen, setIsOpen, handleAddFood } = props;
  const formRef = createRef<FormHandles>();

  const handleSubmit = async (data: FoodItem) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
