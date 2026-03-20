import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Asiatic Lily Bulbs" };

export default function AsiaticPage() {
  // Redirect to lilies page with asiatic pre-selected via hash
  redirect("/lilies#asiatic");
}
