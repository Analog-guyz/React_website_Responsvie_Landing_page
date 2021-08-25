import "./Hero.css"
import Button from './Button'
import Logo from '../img/logo.png'
import bg_img from '../img/Group_13483.png'


const Hero = () => {
    return (
        <div className="hero-wrapper"  style={{ backgroundImage: `url(${bg_img})` }}>
            <div className="hero-logo-wrapper">
                <img src={Logo}></img>

            </div>
            <div className="hero-title-wrapper">
                <h1>به راحتی خدمات مورد نیاز خودت رو پیدا کن</h1>
                <p>اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست و چه کارهایی انجام می‌ده</p>

            </div>
            <div className="hero-button-wrapper">
                <Button bg_Color="#5274F9" text_color="white" paddings="0.9rem 1.8rem" borders="none" text="الان مشاوره میخوام" font_size="1.3rem" radius="5px"/>
                <Button bg_Color="transparent" text_color="white" paddings="0.9rem 1.8rem" borders="0.5px solid white" text="فرم تماس با ما" font_size="1.3rem" radius="5px"/>
            </div>
        </div>
    )
}


export default Hero