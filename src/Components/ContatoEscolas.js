import '../Components/CSSFiles/ContatoEscolas.css'
import EmailIcon from "../Assets/Img/email-icon.png"
import WhatsappIcon from "../Assets/Img/whatsapp-icon.png"
import TelefoneIcon from "../Assets/Img/phone-icon.png"
import HorarioIcon from "../Assets/Img/clock-icon.png"
import EnderecoIcon from "../Assets/Img/map-icon.png"

// para alterar os valores de email, whatasapp... É só accesar InfEscolas(O COMPONENENTE) e alterar,
// creio que é melhor mudar ele de lugar já que voces vâo aplicar ele em outras paginas
function ContatoEscolas({ email, whatsapp, telefone, horario, endereco }) {
  const contactDetails = [
    { label: 'Email', value: email, icon: EmailIcon },
    { label: 'Whatsapp', value: whatsapp, icon: WhatsappIcon },
    { label: 'Telefone', value: telefone, icon: TelefoneIcon },
    { label: 'Horário de Atendimento', value: horario, icon: HorarioIcon },
    { label: 'Endereço', value: endereco, icon: EnderecoIcon },
  ]

  return (
    <div className="container">
      <h1>CONTATOS</h1>
      {contactDetails.map(({ label, value, icon }) => (
        <div key={label} className="contact-item">
          <h2>
            <img src={icon} alt={label} style={{ marginRight: '0.5rem' }} />
            {label}:
          </h2>
          <p>{value}</p>
        </div>
      ))}
    </div>
  )
}
export default ContatoEscolas;