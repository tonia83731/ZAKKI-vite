// import { ReactComponent as ThankyouImg } from "../../../../Assets/Img/ThankyouImg.svg"
import ThankyouImg from "../../../../../assets/Img/ThankyouImg.svg";



export default function StepDone(){
  return(
    <form data-phase="submit">
      <div className="form-title">Thank you for your application. <br/>Our team will contact you very soon for further information.</div>
      <section className="form-body">
        <img src={ThankyouImg} alt="" className="thankyouImg" />
      </section>
    </form>
  )
}