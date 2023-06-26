import Button from "../Button";
import Logo from "../Logo";
import Paragraph from "../Paragraph";
import SubTitle from "../SubTitle";

const buttons = [
  { title: "Chat to us", skin: "secondary sec-degn", id: 1, type: "button" },
  { title: "Get started", skin: "primary pry-degn", id: 2, type: "button" },
];

const linkList1 = [
  { title: "Product", class: "h4" },
  { link: "Overview", url: "#overview", class: "ph-sm" },
  { link: "Features", url: "#features", class: "ph-sm" },
  { link: "Solutions", url: "#solutions", class: "ph-sm" },
  { link: "Tutorials", url: "#tutorials", class: "ph-sm" },
  { link: "Pricing", url: "#pricing", class: "ph-sm" },
  { link: "Releases", url: "#releases", class: "ph-sm" },
];

const linkList2 = [
  { title: "Company", class: "h4" },
  { link: "About us", url: "#about us", class: "ph-sm" },
  { link: "Careers", url: "#careers", class: "ph-sm" },
  { link: "Press", url: "#press", class: "ph-sm" },
  { link: "News", url: "#news", class: "ph-sm" },
  { link: "Media kit", url: "#media kit", class: "ph-sm" },
  { link: "Contact", url: "#contact", class: "ph-sm" },
];

const linkList3 = [
  { title: "Resources", class: "h4" },
  { link: "Blog", url: "#blog", class: "ph-sm" },
  { link: "Newsletter", url: "#newsletter", class: "ph-sm" },
  { link: "Events", url: "#events", class: "ph-sm" },
  { link: "Help centre", url: "#help centre", class: "ph-sm" },
  { link: "Tutorials", url: "#tutorials", class: "ph-sm" },
  { link: "Support", url: "#support", class: "ph-sm" },
];

const linkList4 = [
  { title: "Use cases ", class: "h4" },
  { link: "Startups", url: "#startups", class: "ph-sm" },
  { link: "Enterprise", url: "#enterprise", class: "ph-sm" },
  { link: "Government", url: "#government", class: "ph-sm" },
  { link: "SaaS centre", url: "#saaS centre", class: "ph-sm" },
  { link: "Marketplaces", url: "#marketplaces", class: "ph-sm" },
  { link: "Ecommerce", url: "#ecommerce", class: "ph-sm" },
];

const linkList5 = [
  { title: "Social", class: "h4" },
  { link: "Twitter", url: "#twitter", class: "ph-sm" },
  { link: "LinkedIn", url: "#linkedIn", class: "ph-sm" },
  { link: "Facebook", url: "#facebook", class: "ph-sm" },
  { link: "GitHub", url: "#gitHub", class: "ph-sm" },
  { link: "AngelList", url: "#angelList", class: "ph-sm" },
  { link: "Dribbble", url: "#dribbble", class: "ph-sm" },
];

const linkList6 = [
  { title: "Legal", class: "h4" },
  { link: "Terms", url: "#terms", class: "ph-sm" },
  { link: "Privacy", url: "#privacy", class: "ph-sm" },
  { link: "Cookies", url: "#cookies", class: "ph-sm" },
  { link: "Licenses", url: "#licenses", class: "ph-sm" },
  { link: "Settings", url: "#settings", class: "ph-sm" },
  { link: "Contact", url: "#contact", class: "ph-sm" },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="msg-wrapper">
              <SubTitle
                className="mg-top"
                subHeading="Connect with health care"
              />
              <Paragraph
                className="ph-sm"
                paragraph="Over 4,000+ startups already Join with health care."
              />
              <div className="btn-wrapper">
                {buttons.map((button) => (
                  <Button
                    skin={button.skin}
                    id={button.id}
                    type={button.type}
                    title={button.title}
                    key={button.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row fx">
          <div className="col-2 col-half">
            {linkList1.map((link, i) => (
              <Paragraph
                className={link.class}
                paragraph={link.title}
                link={link.link}
                url={link.url}
                key={i}
              />
            ))}
          </div>
          <div className="col-2 col-half">
            {linkList2.map((link, i) => (
              <Paragraph
                className={link.class}
                paragraph={link.title}
                link={link.link}
                url={link.url}
                key={i}
              />
            ))}
          </div>
          <div className="col-2 col-half">
            {linkList3.map((link, i) => (
              <Paragraph
                className={link.class}
                paragraph={link.title}
                link={link.link}
                url={link.url}
                key={i}
              />
            ))}
          </div>
          <div className="col-2 col-half">
            {linkList4.map((link, i) => (
              <Paragraph
                className={link.class}
                paragraph={link.title}
                link={link.link}
                url={link.url}
                key={i}
              />
            ))}
          </div>
          <div className="col-2 col-half">
            {linkList5.map((link, i) => (
              <Paragraph
                className={link.class}
                paragraph={link.title}
                link={link.link}
                url={link.url}
                key={i}
              />
            ))}
          </div>
          <div className="col-2 col-half">
            {linkList6.map((link, i) => (
              <Paragraph
                className={link.class}
                paragraph={link.title}
                link={link.link}
                url={link.url}
                key={i}
              />
            ))}
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12">
            <div className="wrapper">
              <Logo />
              <div className="text-wrapper">
                &#169;
                <Paragraph
                  className="ph-sm"
                  paragraph="2080 Health Care. All rights reserved."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
