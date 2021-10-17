interface SectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  bg: 'gray' | 'white';
}

const Section: React.FC<SectionProps> = (props) => {
  const { children, className, bg = "white", ...rest } = props;

  return (
    <section
      className={`py-14 px-4 lg:py-20 lg:px-20${
        className ? ` ${className}` : ""
      }${bg === 'gray' ? ' bg-gray-100' : ''}`}
      {...rest}
    >
      {children}
    </section>
  );
};
export default Section;
