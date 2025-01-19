import utilStyles from "../styles/utils.module.css";
import Date from "./Date";

type TitleDateProps = {
  titleString: string;
  dateString: string;
};

export default function TitleDate({ titleString, dateString }: TitleDateProps) {
  return (
    <>
      <h1 className={utilStyles.headingXl}>{titleString}</h1>
      <Date dateString={dateString} />
    </>
  );
}
