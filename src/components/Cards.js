import "./Cards.css"
import Button from './Button'
import img_1 from '../img/Image 254.png'
import img_2 from '../img/Image 255.png'
import img_3 from '../img/Image 256.png'

const Cards = () => {
    return (
        <section className="cards-wrapper">
            <section className="cards-title-wrapper">
                <h1>ما خدمات زیادی به مشتریان بزرگمان ارائه می‌دهیم</h1>
                <p>از این زیر‌عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده می‌کنیم. با کلیک بر روی این قسمت می‌توانید متن خود را ویرایش کنید</p>
            </section>
            <div className="card-wrapper">
                <div className="card">
                    <img src={img_1} className="card-image"></img>
                    <div className="card-desc">
                        <h2>طراحی جدید</h2>
                        <p>اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه می‌دهید</p>
                        <div className="card-desc-button-wrapper">
                            <Button bg_Color="#FEF2EB" text_color="#FB7C3F" paddings="0.6rem 1.25rem" borders="none" text="Web Design" font_size="0.85rem" radius="0"></Button>
                            <Button bg_Color="#FEF2EB" text_color="#FB7C3F" paddings="0.6rem 1.25rem" borders="none" text="IT Solution" font_size="0.85rem" radius="0"></Button>
                        </div>
                    </div>
                </div>
                <div className="card" >
                    <img src={img_2} className="card-image"></img >
                    <div className="card-desc">
                        <h2>خدمات مالی</h2>
                        <p>اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه می‌دهید</p>
                        <div className="card-desc-button-wrapper">
                            <Button bg_Color="#E9F9F0" text_color="#32BA6E" paddings="0.6rem 1.25rem" borders="none" text="Best Invest" font_size="0.85rem" radius="0"></Button>
                            <Button bg_Color="#E9F9F0" text_color="#32BA6E" paddings="0.6rem 1.25rem" borders="none" text="Saftey Pay " font_size="0.85rem" radius="0"></Button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={img_3} className="card-image"></img>
                    <div className="card-desc">
                        <h2>تجزیه و تحلیل وب</h2>
                        <p>اینجا می‌توانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه می‌دهید</p>
                        <div className="card-desc-button-wrapper">
                            <Button bg_Color="#EDF1FF" text_color="#5C3FFB" paddings="0.6rem 1.8rem" borders="none" text="SEO" font_size="0.85rem" radius="0" ></Button>
                            <Button bg_Color="#EDF1FF" text_color="#5C3FFB" paddings="0.6rem 1.25rem" borders="none" text="Marketing" font_size="0.85rem" radius="0"></Button>
                        </div>
                    </div>
                </div>
            
            </div>

        </section>
    )
}


export default Cards