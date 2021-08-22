import "./Comments.css"
import Profile_1  from '../img/Profile_1.png'
import Profile_2  from '../img/Profile_2.png'
import Icons from '../img/Icon_group.png'


const Comments = () => {
    return (
        <div className="Comments-wrapper">
            <section className="comments-title">
                <h1>ما خدمات زیادی به مشتریان بزرگمان ارائه می‌دهیم</h1>
                <p>از این زیر‌عنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده می‌کنیم. با کلیک بر روی این قسمت می‌توانید متن خود را ویرایش کنید</p>
            </section>
            <div className="comment-cards">
                <div className="comment-card">
                    <div className="comment-desc">
                        <p className="desc_1">این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید  برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.</p>
                        <p className="desc_2">علی جوانمردی</p>
                        <p className="desc_3">عنوان شغل، اسم شرکت</p>

                    </div>
                    <div className="card-pic">
                        <img src={Profile_1}></img>

                    </div>
                </div>
            
            {/*-----------------------------------------------------------------------*/}
            
                <div className="comment-card">
                    <div className="comment-desc">
                        <p className=" desc desc_1">این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید  برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.</p>
                        <p className="desc desc_2">سهراب یزدانی</p>
                        <p className="desc desc_3">عنوان شغل، اسم شرکت</p>

                    </div>
                    <div className="card-pic">
                        <img src={Profile_2}></img>

                    </div>
                </div>
            </div>
            {/*-----------------------------------------------------------------------*/}
            <div className="icon-wrapper"><img src={Icons}></img></div>
        </div>
    )
}


export default Comments