import Form from "../components/Form";
import { useSelector } from "react-redux";
import moment from "moment-timezone";

const Home = () => {
  const key = useSelector((state) => state.key);
  return (
    <div className="flex flex-col gap-2 w-3/4">
      <Form />
      <div>
        {moment.tz.names().map((content, k) => {
          if ((key && content.toLocaleLowerCase().includes(key)) || !key) {
            const zone = content.split("/");
            const time = moment(Date.now())
              .tz(content)
              .format("HH:mm A-D/M/Y")
              .split("-");
            return (
              <div
                key={k}
                className="flex w-full justify-between py-4 border-b"
              >
                <div className="flex flex-col text-left">
                  <span className="text-xl font-medium text-gray-700">
                    {zone[0]}
                  </span>
                  <span className="text-gray-500">{zone[1]}</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-lg font-medium text-gray-700">
                    {time[0]}
                  </span>
                  <span className="text-gray-500">{time[1]}</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Home;
