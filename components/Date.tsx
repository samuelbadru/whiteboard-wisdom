import { format, parseISO } from "date-fns";
import utilStyles from "../styles/utils.module.css";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <div className={utilStyles.lightText}>
      <time dateTime={dateString}>{format(date, "do LLLL yyyy")}</time>
    </div>
  );
}
