import css from './Section.module.scss';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default Section;
