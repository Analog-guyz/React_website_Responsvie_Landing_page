import "./Footer.css"
import Button from './Button'
import footer_img from '../img/Group_13484.png'
const Footer = () => {
    return (
        <>
        <div className="footer-wrapper"  style={{ backgroundImage: `url(${footer_img})` }}>
            
            <div className="hero-title-wrapper">
                <h1>به راحتی خدمات مورد نیاز خودت رو پیدا کن</h1>
                <p>اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست و چه کارهایی انجام می‌ده</p>

            </div>
            <div className="hero-button-wrapper">
                <Button bg_Color="#5274F9" text_color="white" paddings="0.9rem 1.8rem" borders="none" text="ارسال رزومه" font_size="1.3rem" radius="5px"/>
                <Button bg_Color="transparent" text_color="white" paddings="0.9rem 1.8rem" borders="0.5px solid white" text="فرم تماس" font_size="1.3rem" radius="5px"/>
            </div>
            
        </div>
        
        </>
    )
}


export default Footer