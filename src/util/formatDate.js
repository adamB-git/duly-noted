import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function formatDate(date) {
    if (Date.now() - (1 * 7 * 24 * 60 * 60 * 1000) <= date) {
        return dayjs(date).fromNow();
    } else {
        return dayjs(date).format("h:m a on M/D/YYYY");
    }
}

export default formatDate;
