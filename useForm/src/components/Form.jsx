import useForm from "../hooks/useForm"

const Form = () => {
  const inputs = {
    nombre: "",
    email: ""
  }
  const { values, handleChange, handleSubmit } = useForm(inputs)

  return (
    <form onSubmit={handleSubmit} >
      <input type="text" name="nombre" value={values.nombre} onChange={handleChange} />
      <br />
      <input type="text" name="email" value={values.email} onChange={handleChange} />
      <br />
      <button type="submit">Enviar</button>
    </form>
  )
}
export default Form