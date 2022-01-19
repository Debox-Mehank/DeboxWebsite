import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface CustomTableProps {
  title: string;
  mc_title: string;
  dc: string[];
  mc: string[][];
}

const CustomTable = ({ title, dc, mc, mc_title }: CustomTableProps) => {
  return (
    <table className="w-11/12 md:w-11/12 lg:w-3/5 xl:w-3/5 mx-auto mt-4 xl:mt-8 mb-4">
      <tbody>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal p-3">
            {title}
          </th>
          <th className="bg-primary text-white text-sm text-center p-2 flex items-center justify-center">
            Basic
          </th>
          <th className="bg-primary text-white text-sm text-center p-2 flex items-center justify-center">
            White-Labelled
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-5 flex items-center underline text-primary p-3">
            Deployment Charges:
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            All prices are monthly cost paid upfront annually
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            {dc[0]}
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            {dc[1]}
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2 pt-3">
          <th className="col-span-5 flex items-center underline text-primary p-3">
            {mc_title}
          </th>
        </tr>
        {mc.map((m) => {
          return (
            <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
              <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
                {m[0]}
              </th>
              <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
                {m[1]}
              </th>
              <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
                {m[2]}
              </th>
            </tr>
          );
        })}
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2 pt-3">
          <th className="col-span-5 flex items-center underline text-primary p-3">
            Data Record Charges:
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            Up to 25,000 Entries
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            Free
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            Free
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            Every additional block of 25,000 Entries
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            1,000
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            Free
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2 pt-3">
          <th className="col-span-5 flex items-center underline text-primary p-3">
            Features:
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            Multiple User Roles
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            User Permissions
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            Email / SMS Notifications
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            Auto-Triggered Notifications
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            Dashboards
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            On-going Support
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            Custom Application URL
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
        </tr>
        <tr className="text-sm md:text-sm lg:text-base xl:text-base text-left grid grid-cols-5 gap-2">
          <th className="col-span-3 flex items-center font-normal bg-tableRowBg p-3">
            iOS & Android App
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </th>
          <th className="text-sm md:text-sm lg:text-base xl:text-base text-center font-normal flex items-center justify-center bg-tableRowBg p-3">
            <FontAwesomeIcon icon={faCheck} size="lg" />
          </th>
        </tr>
        <tr className="grid grid-cols-5 gap-2 pt-3">
          <th className="col-span-5 flex items-center text-sm md:text-sm lg:text-base xl:text-base text-right font-normal justify-end">
            * All Prices are excluding GST. GST will be charged as per
            applicable rates.
          </th>
        </tr>
        <tr className="grid grid-cols-5 gap-2">
          <th className="col-span-5 flex items-center text-sm md:text-sm lg:text-base xl:text-base text-right font-normal justify-end">
            ** For any additional customization requirements, get in touch.
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default CustomTable;
