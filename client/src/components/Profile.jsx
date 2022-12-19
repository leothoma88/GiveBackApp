import React from "react";
import { QUERY_ME } from "../utils/queries";
import Card from "./Cards";
import { useQuery } from "@apollo/client";
// useQuery me - savedDonations
const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  return (
    <div id="Profile" className="bg-[#df3e56] h-screen">
      <div className="w-full mx-auto text-center text-[#FCFFE7]">
        <h1 className="text-5xl md:text-5xl sm:text-4xl font-bold p-6 pt-12">
          My Donations
        </h1>
      </div>

      <div className="grid grid-cols-1 p-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-[#df3e56]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data?.me?.savedDonations?.map((donation) => {
              return <Card {...donation} key={donation.ein}/>;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
