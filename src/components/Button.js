

const Button = ({bg_Color,text_color,paddings,borders,text,font_size,radius}) => {
    return(
        
         <button style={{backgroundColor:bg_Color,color:text_color,padding:paddings,border:borders,
         fontSize:font_size,borderRadius:radius,cursor:"pointer"}}>
             {text}
         </button>

        
    )
    
}

export default Button