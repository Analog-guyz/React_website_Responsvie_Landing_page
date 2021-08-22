import "./Media.css"
import Mediaplayer from '../img/media.png'


const Media = () => {
    return (
        <div className="Media-wrapper">
            <div className="media-column_1">
                <h1>ویدئو معرفی ما را تماشا کنید</h1>
                <ul>
                   <li><p>این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید  برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.</p></li>
                   <li><p>این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید  برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.</p></li>
                </ul>

            </div>
            <div className="media-column_2">
                <img src={Mediaplayer} className="media-img"></img>

            </div>
            
        </div>
    )
}


export default Media