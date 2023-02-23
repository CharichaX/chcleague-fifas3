import { useParams } from "react-router-dom";
import { useGetArenaQuery } from "./arenaApiSlice";
import Skeleton from "react-loading-skeleton";

import Button from "../../components/Button";

import BounceLoader from "react-spinners/BounceLoader";
import coverDefault from "../../assets/images/fifa_league_poster.png";
import logoDefault from "../../assets/images/logo_profile.png";

export default function ArenaPage() {
  const params = useParams();
  const { data, error, isLoading, isFetching } = useGetArenaQuery(params?.id, {
    skip: !params?.id,
  });

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <BounceLoader color="red" />
      </div>
    );
  }

  return (
    <div>
      {isLoading && <Skeleton height={200} />}
      <div>
        {!isFetching && (
          <img
            src={coverDefault}
            alt={data.name + " Cover Photo"}
            className="w-full h-[450px] object-cover overflow-clip"
          />
        )}
      </div>

      <div className="px-2 md:px-4 lg:px-20 xl:px-52 mt-2">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 ">
          <div className="flex items-center gap-2">
            <div className="w-14 h-14 rounded-full overflow-clip bg-gradient-to-b from-transparent to-black">
              {!isFetching && (
                <img
                  src={logoDefault}
                  alt={data.name + " Logo"}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div>
              <p className="text-white text-2xl font-bold"> {data?.name} </p>
              <p className="text-white text-xs"> @{data?.handle} </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button> Join Arena </Button>
            <Button type="outlined"> Subscribe </Button>
          </div>
        </div>

        <div className="text-white mt-4">
          <ul className="flex gap-4 font-semibold">
            <li> Home </li>
            <li> News </li>
            <li> Tournaments </li>
            <li> Scrims </li>
            <li> About </li>
          </ul>
        </div>
        <div className="w-full mt-2 h-[1px] bg-gray-700"></div>

        <div className="mt-4">
          <h2 className="text-white font-bold text-xl mb-4">
            Recommended tournaments
          </h2>
          <div className="flex gap-2 overflow-x-scroll">
            <div className="flex flex-col gap-2">
              <img
                className="min-w-sm max-w-lg rounded-md"
                src="/assets/images/celebration.jpg"
                alt="Tournament Cover"
              />
              <div className="flex gap-2">
                <img
                  className="w-12 h-12 object-cover rounded-full overflow-clip bg-slate-700"
                  src="/assets/images/chc_gaming_logo.png"
                  alt="Arena logo"
                />
                <div className="text-slate-300 text-xs flex flex-col gap-[1px]">
                  <p> Tomorrow, 18:00 </p>
                  <p className="font-bold text-white text-sm">
                    {" "}
                    Charicha Tourney{" "}
                  </p>
                  <p> Asia • 1v1 • NRs. 10,000 • 32 Slots </p>
                  <p className="bg-slate-700 rounded-full text-xs w-fit px-2">
                    {" "}
                    Members only{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <img
                className="min-w-sm max-w-lg rounded-md"
                src="/assets/images/celebration.jpg"
                alt="Tournament Cover"
              />
              <div className="flex gap-2">
                <img
                  className="w-12 h-12 object-cover rounded-full overflow-clip bg-slate-700"
                  src="/assets/images/chc_gaming_logo.png"
                  alt="Arena logo"
                />
                <div className="text-slate-300 text-xs flex flex-col gap-[1px]">
                  <p> Tomorrow, 18:00 </p>
                  <p className="font-bold text-white text-sm">
                    {" "}
                    Charicha Tourney{" "}
                  </p>
                  <p> Asia • 1v1 • NRs. 10,000 • 32 Slots </p>
                  <p className="bg-slate-700 rounded-full text-xs w-fit px-2">
                    {" "}
                    Members only{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-white text-xl mt-4"> About </h1>
          <div className="p-5 md:px-10 lg:py-10 lg:px-16 border-[1px] border-slate-300 rounded-md">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 ">
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 rounded-full overflow-clip bg-gradient-to-b from-transparent to-black">
                  {!isFetching && (
                    <img
                      src={logoDefault}
                      alt={data.name + " Logo"}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="text-white text-2xl font-bold">
                    {" "}
                    {data?.name}{" "}
                  </p>
                  <p className="text-white text-xs"> @{data?.handle} </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button> Join Arena </Button>
                <Button type="outlined"> Subscribe </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
