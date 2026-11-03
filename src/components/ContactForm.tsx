"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [reviewed, setReviewed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReviewed(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} onChange={() => setReviewed(false)}>
      <div><label htmlFor="nombre">Apellidos y nombres</label><input id="nombre" name="nombre" autoComplete="name" placeholder="Apellidos y nombres" required maxLength={100} /></div>
      <div><label htmlFor="telefono">Teléfono</label><input id="telefono" name="telefono" type="tel" autoComplete="tel" placeholder="Teléfono" required maxLength={25} /></div>
      <div><label htmlFor="correo">Correo electrónico</label><input id="correo" name="correo" type="email" autoComplete="email" placeholder="Correo electrónico" required maxLength={150} /></div>
      <div><label htmlFor="asunto">Asunto</label><input id="asunto" name="asunto" placeholder="¿Qué repuesto necesitas?" required maxLength={150} /></div>
      <div><label htmlFor="mensaje">Mensaje</label><textarea id="mensaje" name="mensaje" rows={5} placeholder="Indica el modelo, motor o número de pieza de tu vehículo." required maxLength={1500} /></div>
      <p className={styles.note}>Formulario de demostración: valida los campos, pero no envía ni guarda información. Para una consulta real, utiliza el teléfono o el correo.</p>
      <button type="submit">Revisar mensaje <span aria-hidden="true">→</span></button>
      {reviewed && <p className={styles.status} role="status">Los campos están completos. Esta demostración no ha enviado ningún mensaje.</p>}
    </form>
  );
}
