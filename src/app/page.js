'use client';
import ShoppingList from "./ShoppingList";
export default function Home() {
  const productos = [
    {
      nombre: "Gafas de sol",
      precio: 50
    },
    {
      nombre: "Sombrero de pescador",
      precio: 8
    },
    {
      nombre: "Crema solar 200ml",
      precio: 13
    }
  ];
  return (
    <ShoppingList productos={productos}></ShoppingList>
  );
}
