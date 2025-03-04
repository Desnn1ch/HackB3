'use server'

import { redirect } from "next/navigation";
import { APP_HOST } from "./components/host";

export default async function Home() {
  redirect(`${APP_HOST}/student`);
}
