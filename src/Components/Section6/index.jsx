import Paragraph from "../Paragraph"
import Form from "../ReuseForm"

const texts =[
    {
        paragraph:{
            title:"Sign up for our newsletter",
            class:"h4"
        }
    },
    {
        paragraph:{
            title:"Be the first to know about releases and industry news and insights.",
            class:"ph-sm"
        }
    }
]

const inputs = [
    {
        class:"",
        id:"1",
        type:"text",
        name:"email",
        placeholder:"Enter email",      

    }
]

const Section6 = ()=>{
    return(
        <section className="sec-6 bg-primary">
            <div className="container">
                <div className="row ">                  
                    <div className="col-12">
                        <div className="col-wrapper">
                            
                    <div className="col-6 ">
                           {texts.map((item,i)=>(
                            <Paragraph
                             className={item.paragraph.class}
                             paragraph={item.paragraph.title}
                             key={i}
                            />
                           ))}                                               
                        </div>                                         
                        <div className="col-6 ">
                            <Form
                             inputs={inputs}
                             type="submit"
                             skin="primary"
                             id={1}
                             name="Subscribe"
                            />  
                            <Paragraph 
                             className="ph-sm close"
                             paragraph="We care about your data in our"
                             url="#privacy"
                             link=" privacy policy."
                            />
                        </div>   
                        </div>
                    </div>                
                </div>
            </div>
        </section>
    )
}

export default Section6;