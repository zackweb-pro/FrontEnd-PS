import '../css/Login.css'
import Input from '../components/Input'
import somaplogo from '../assets/somap-logo.png'
import gradient1 from '../assets/Asset 3.png'
import gradient2 from '../assets/Asset 2.png'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

function App() {

  return (
    <div class="loginpage">    
    <img className='gradient1' src={gradient1} alt="" />
    <img className='gradient2' src={gradient2} alt="" />
    <div className="login">
      {/* <h1>Welcome Back</h1>
      <p className='description-p'>welcome back! Please enter your details.</p> */}
      <img src={somaplogo} className='login-logo' alt="" />
      <form action="/dashboard">
        <Input icon={<MdOutlineAlternateEmail/>} name="Entrer votre Email" id="username" description=""></Input>
        <Input icon={<RiLockPasswordFill/>} name="Entrer votre mot de passe" type="password" id="password" description=""></Input><br />
        <div className="moreoptions">

        <label htmlFor="remember">
          <input style={{textAlign: "left"}} type="checkbox" name="rememberme" id="rememberme"/>
          <span className='remember'>Remember Me</span>
        </label>
        <a href="#" className='forget'>Forget my password</a>
        </div>
        <br />
        <button type='submit'>Sign in</button>
        {/* <p>Don't have an account? <a href="#">Sign up!</a></p> */}
      </form>
    </div>
    <div className="demandesection">

    <svg width="426" height="540" viewBox="0 0 426 540" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ddf_0_1)">
<rect x="7" y="7.05614" width="412" height="525.876" rx="17" fill="#FEFEFE"/>
</g>
<g filter="url(#filter1_f_0_1)">
<path d="M187 532.438C187 511.072 178.413 490.581 163.129 475.472C147.845 460.364 127.115 451.876 105.5 451.876C83.8848 451.876 63.155 460.364 47.8707 475.472C32.5865 490.581 23.9999 511.072 23.9999 532.438L105.5 532.438H187Z" fill="#0AA9E6"/>
</g>
<g filter="url(#filter2_f_0_1)">
<path d="M238 6.56188C238 27.9282 246.587 48.4194 261.871 63.5277C277.155 78.636 297.885 87.1238 319.5 87.1238C341.115 87.1238 361.845 78.636 377.129 63.5277C392.413 48.4195 401 27.9282 401 6.56191L319.5 6.56189L238 6.56188Z" fill="#0AA9E6"/>
</g>
<defs>
<filter id="filter0_ddf_0_1" x="0" y="0.0561371" width="426" height="539.876" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2" dy="2"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2" dy="-2"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_0_1" result="effect2_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect3_foregroundBlur_0_1"/>
</filter>
<filter id="filter1_f_0_1" x="19.9999" y="447.876" width="171" height="88.5619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"/>
</filter>
<filter id="filter2_f_0_1" x="234" y="2.56189" width="171" height="88.5619" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_0_1"/>
</filter>
</defs></svg>
<div className="greetin">
            <h1>Welcome Back</h1>
      <p className='description-p'>welcome back! Please enter your details.</p>

</div>
<div className="noaccount">

        <p>Don't have an account?</p>
        <a href="/DemandeCompte"><button>Demander un compte</button></a>
</div>

    </div>
    </div>

  )
}

export default App
