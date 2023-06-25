const Paragraph = ({ className, paragraph, link, url, span, back }) => {
  return (
    <p className={className}>
      {paragraph}
      {span ? <span> {span}</span> : null}
      {back ? ` ${back}` : null}
      {link ? <a href={url}>{link}</a> : null}
    </p>
  );
};
export default Paragraph;
