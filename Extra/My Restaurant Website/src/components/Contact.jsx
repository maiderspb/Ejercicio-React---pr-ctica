import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      email: "",
      mensaje: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por tu mensaje, ${this.state.nombre}!`);
    this.setState({ nombre: "", email: "", mensaje: "" });
  };

  render() {
    return (
      <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h2>Contacto y Reservas</h2>
        <form
          onSubmit={this.handleSubmit}
          style={{
            maxWidth: "500px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={this.state.nombre}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="¿En qué podemos ayudarte?"
            value={this.state.mensaje}
            onChange={this.handleChange}
            rows="5"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    );
  }
}

export default Contact;

