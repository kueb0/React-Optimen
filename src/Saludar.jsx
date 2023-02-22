export function Saludar({ titulo, nombre = "USER" }) {
  console.log(titulo, nombre);
  return (
    <h1>
      {titulo} dice {nombre}
    </h1>
  );
}

export function Usuario(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.nombre}</h1>
      <p> 🤓 {props.estudiante ? "Estudiante" : "Nini"}</p>
      <ul>
        <li>Deporte: {props.hobbies.deporte}</li>
        <li>Arte: {props.hobbies.arte}</li>
        <li>Red social: {props.hobbies.socialMedia}</li>
      </ul>
    </div>
  );
}
