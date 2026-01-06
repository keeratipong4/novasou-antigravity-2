import React from "react";
import { Navbar } from "./Navbar";
import { getGlobalData } from "@/api/strapi";

export async function NavbarWrapper() {
  const globalData = await getGlobalData();
  return <Navbar links={globalData?.navbar} />;
}
