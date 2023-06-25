import Img from "../../Image";
import Paragraph from "../../Paragraph";
import SubTitle from "../../SubTitle";

const texts = [
  {paragraph:"Amelie Lauren", class:"h4"},
  {paragraph:"Finance Manager,Sisyphus", class:"ph-sm"}
]

const Message = () => {
  return (
    <>
      <div className="msg-wrapper">
       <div className="msg">
       <Img
          src="./Assets/Image/boltshift.avif"
          alt="boltshift picture"
          width="40"
          height="30"
        />

        <SubTitle  
        className="h4" 
        subHeading="Sisyphus" 
        />
       </div>
 
        <Paragraph
          className="h2"
          paragraph="We've been able to scale faster by combining our deposits, spend and controls in one account."
        />
      </div>
      <article>
        <Img
          className="half-round"
          src="./Assets/Image/profile.jpg"
          alt="profile picture"
          width="50"
          height="50"
        />
       {texts.map((el,i)=>(
        <div key={i}>
         <Paragraph 
         className={el.class} 
         paragraph={el.paragraph}          
         />
         </div>
       ))}       
      </article>
    </>
  );
};

export default Message;
